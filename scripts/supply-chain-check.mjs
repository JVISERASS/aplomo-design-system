#!/usr/bin/env node
// Comprueba el arbol de dependencias contra las versiones publicadas con codigo malicioso en
// los incidentes conocidos de cadena de suministro de npm.
//
// Esto NO lo cubre `npm audit`, que solo conoce vulnerabilidades con CVE publicado. Un paquete
// comprometido —una version legitima a la que su atacante le inyecto un robador de credenciales—
// suele retirarse del registro en horas y nunca llega a tener aviso, asi que un `npm audit`
// limpio no dice nada sobre el.
//
// Tambien avisa de cualquier dependencia que se resuelva fuera del registro publico de npm, que
// es un indicador clasico de sustitucion.
//
// Uso:  node scripts/supply-chain-check.mjs

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lock = JSON.parse(readFileSync(resolve(root, "package-lock.json"), "utf8"));

// Version exacta = version publicada con la carga maliciosa. Las anteriores y posteriores estan
// limpias, asi que comparar por igualdad y no por rango es lo correcto aqui.
const COMPROMETIDAS = {
  // 8-sep-2025 — compromiso de la cuenta del mantenedor de chalk/debug (18 paquetes,
  // ~2.600 millones de descargas semanales combinadas). Inyectaba un interceptor de
  // transacciones de criptomonedas en el navegador.
  "ansi-regex": ["6.2.1"], "ansi-styles": ["6.2.2"], "backslash": ["0.2.1"],
  "chalk": ["5.6.1"], "chalk-template": ["1.1.1"], "color": ["5.0.1"],
  "color-convert": ["3.1.1"], "color-name": ["2.0.1"], "color-string": ["2.1.1"],
  "debug": ["4.4.2"], "error-ex": ["1.3.3"], "has-ansi": ["6.0.1"],
  "is-arrayish": ["0.3.3"], "simple-swizzle": ["0.2.3"], "slice-ansi": ["7.1.1"],
  "strip-ansi": ["7.1.1"], "supports-color": ["10.2.1"],
  "supports-hyperlinks": ["4.1.1"], "wrap-ansi": ["9.0.1"],

  // 15-sep-2025 — gusano "Shai-Hulud": robaba credenciales y se autopropagaba publicando
  // desde las cuentas comprometidas. Alcanzo varios paquetes del ecosistema Angular.
  "@ctrl/tinycolor": ["4.1.1", "4.1.2"], "angulartics2": ["14.1.2"],
  "ngx-bootstrap": ["18.1.4", "19.0.3", "19.0.4", "20.0.4", "20.0.5"],
  "ngx-toastr": ["19.0.2"], "ngx-trend": ["8.0.1"], "ngx-color": ["10.0.2"],
  "@ctrl/ngx-codemirror": ["7.0.2"], "@ctrl/ngx-csv": ["6.0.2"],
  "@ctrl/ngx-emoji-mart": ["9.2.2"], "@ctrl/ngx-rightclick": ["4.0.2"],

  // Incidentes anteriores, por si una dependencia vieja los reintroduce.
  "event-stream": ["3.3.6"], "flatmap-stream": ["0.1.1"],
  "ua-parser-js": ["0.7.29", "0.8.0", "1.0.0"],
  "coa": ["2.0.3", "2.0.4", "2.1.1", "2.1.3"],
  "rc": ["1.2.9", "1.3.9", "2.3.9"],
  "node-ipc": ["9.2.2", "10.1.1", "10.1.2"],
  "colors": ["1.4.1", "1.4.2"], "faker": ["6.6.6"],
};

const comprometidos = [];
const limpiosDeRiesgo = new Set();
const fueraDeNpm = [];

for (const [path, meta] of Object.entries(lock.packages ?? {})) {
  if (!path) continue;
  const name = meta.name ?? path.replace(/.*node_modules\//, "");
  const version = meta.version;
  const resolved = meta.resolved ?? "";

  const malas = COMPROMETIDAS[name];
  if (malas) {
    if (malas.includes(version)) comprometidos.push({ name, version, path });
    else limpiosDeRiesgo.add(`${name}@${version}`);
  }

  // Solo interesan las descargas remotas: los workspaces del propio monorepo se resuelven a
  // una ruta local y no son un indicador de nada.
  const esRemoto = /^(https?:|git\+|git:)/.test(resolved);
  if (esRemoto && !resolved.startsWith("https://registry.npmjs.org/")) {
    fueraDeNpm.push({ name, resolved });
  }
}

const total = Object.keys(lock.packages ?? {}).length - 1;
console.log(`\nsupply-chain-check: ${total} paquetes en el arbol`);

if (fueraDeNpm.length) {
  console.log(`\n${fueraDeNpm.length} dependencia(s) resueltas fuera del registro publico:`);
  for (const d of fueraDeNpm) console.log(`  ${d.name} <- ${d.resolved}`);
}

if (comprometidos.length) {
  console.error(`\n✖ ${comprometidos.length} VERSION(ES) COMPROMETIDA(S) EN EL ARBOL:\n`);
  for (const c of comprometidos) console.error(`  ${c.name}@${c.version}\n    en ${c.path}`);
  console.error(
    "\nNo basta con actualizar: hay que asumir que cualquier credencial accesible durante\n" +
      "una instalacion con estas versiones esta expuesta, y rotarla.\n"
  );
  process.exit(1);
}

// --- Sin recursos de terceros en tiempo de ejecucion ---
// El sistema incrusta sus iconos (ver scripts/gen-icons.mjs) precisamente para no depender de
// ninguna descarga externa: una etiqueta <script> hacia un CDN reintroduce el riesgo que se
// quito, ademas de un punto de fallo y una fuga de la IP de quien abre la pagina.
const { readdirSync, statSync } = await import("node:fs");
const { join, relative } = await import("node:path");

const IGNORAR = new Set(["node_modules", ".git", "storybook-static", "out-tsc", ".angular"]);
const CDNS = /https?:\/\/(unpkg\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|esm\.sh|skypack\.dev)/;

function* ficheros(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (IGNORAR.has(e.name)) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* ficheros(full);
    else if (/\.(html|ts|tsx|js|jsx|mjs|md|css|scss)$/.test(e.name)) yield full;
  }
}

const conCdn = [];
for (const f of ficheros(root)) {
  const texto = readFileSync(f, "utf8");
  for (const linea of texto.split("\n")) {
    // Solo carga real de recursos, no una URL citada en documentacion. `@import` y `url()`
    // cubren las hojas de estilo: un tema de resaltado o un @font-face que tiran de un CDN
    // eran invisibles mientras el barrido no miraba .css ni .scss.
    if (CDNS.test(linea) && /<script|<link|import\(|fetch\(|@import|url\(/.test(linea)) {
      conCdn.push(`${relative(root, f)}: ${linea.trim().slice(0, 100)}`);
    }
  }
}

if (conCdn.length) {
  console.error(`\n✖ ${conCdn.length} carga(s) de recursos desde un CDN:\n`);
  for (const c of conCdn) console.error(`  ${c}`);
  console.error("\n  Aplomo no depende de recursos externos en tiempo de ejecucion.\n");
  process.exit(1);
}

console.log(
  `\n✔ ninguna version comprometida conocida ` +
    `(${limpiosDeRiesgo.size} paquetes de las listas presentes, todos en version limpia)`
);
console.log(`✔ ninguna carga de recursos desde un CDN\n`);
