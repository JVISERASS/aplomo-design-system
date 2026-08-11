#!/usr/bin/env node
// Prueba de humo del paquete Angular: comprueba que el artefacto de ng-packagr se INSTALA y
// ENLAZA en una aplicacion Angular real, que es lo unico que el build de la libreria no prueba.
//
// Corre necesariamente FUERA del monorepo, en un directorio temporal: dentro, la aplicacion
// veria el @angular/core hoisteado en la raiz ademas del suyo, y dos copias del framework dan
// errores de tipos falsos (el clasico "__@ngINPUT_SIGNAL_BRAND_WRITE_TYPE@N does not exist").
// Empaquetar con `npm pack` e instalar el tarball reproduce exactamente lo que recibe un usuario.
//
// Uso:  node scripts/smoke-angular.mjs [--keep]

import { execFileSync } from "node:child_process";
import { cpSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, readdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const keep = process.argv.includes("--keep");
const run = (cmd, args, cwd) =>
  execFileSync(cmd, args, { cwd, stdio: "inherit", env: process.env });

const work = mkdtempSync(join(tmpdir(), "aplomo-smoke-"));
console.log(`\n▸ directorio de trabajo: ${work}\n`);

try {
  console.log("▸ 1/5  construyendo tokens y libreria Angular");
  run("npm", ["run", "build:tokens"], root);
  run("npm", ["run", "build:angular"], root);

  console.log("\n▸ 2/5  empaquetando como los recibiria un consumidor");
  const packDir = join(work, "pack");
  mkdirSync(packDir, { recursive: true });
  run("npm", ["pack", "./packages/angular/dist", "--pack-destination", packDir], root);
  run("npm", ["pack", "./packages/tokens", "--pack-destination", packDir], root);
  const tarballs = readdirSync(packDir).map((f) => join(packDir, f));
  if (tarballs.length !== 2) throw new Error(`esperaba 2 tarballs, hay ${tarballs.length}`);

  console.log("\n▸ 3/5  montando la aplicacion de prueba");
  const app = join(work, "app");
  cpSync(join(root, "apps/demo-angular"), app, { recursive: true });
  // El package.json del template no declara la libreria: se instala desde el tarball.
  const pkg = JSON.parse(readFileSync(join(app, "package.json"), "utf8"));
  delete pkg.dependencies["@jviserass/aplomo-angular"];
  delete pkg.dependencies["@jviserass/aplomo-tokens"];
  writeFileSync(join(app, "package.json"), JSON.stringify(pkg, null, 2) + "\n");

  console.log("\n▸ 4/5  instalando");
  run("npm", ["install", "--no-audit", "--no-fund"], app);
  run("npm", ["install", "--no-audit", "--no-fund", ...tarballs], app);

  console.log("\n▸ 5/5  compilando la aplicacion contra el paquete instalado");
  run("npx", ["ng", "build"], app);

  // El build pasa, pero los estilos podrian no viajar: se comprueba la salida real.
  // Angular nombra la carpeta de salida por el proyecto de angular.json, no por el package.json.
  const distRoot = join(app, "dist");
  const project = readdirSync(distRoot, { withFileTypes: true }).find((e) => e.isDirectory());
  if (!project) throw new Error(`el build no dejo salida en ${distRoot}`);
  const browser = join(distRoot, project.name, "browser");
  const files = readdirSync(browser);
  const css = readFileSync(join(browser, files.find((f) => f.startsWith("styles-"))), "utf8");
  const js = readFileSync(join(browser, files.find((f) => f.startsWith("main-"))), "utf8");

  const tokens = new Set([...css.matchAll(/--ap-[a-z0-9-]+/g)].map((m) => m[0]));
  const problems = [];
  if (tokens.size < 50) problems.push(`solo ${tokens.size} tokens --ap-* en el CSS global`);
  if (!js.includes("ap-radius-control")) problems.push("los estilos de componente no viajan en el JS");
  if (js.includes("ApCommandPalette")) problems.push("no hay tree-shaking: entra codigo no importado");

  if (problems.length) {
    console.error(`\n✖ el paquete compila pero:\n  - ${problems.join("\n  - ")}\n`);
    process.exit(1);
  }

  console.log(`\n✔ el paquete se instala, enlaza y compila en una app Angular limpia`);
  console.log(`  ${tokens.size} tokens en el CSS global, estilos de componente encapsulados, tree-shaking activo\n`);
} finally {
  if (keep) console.log(`(se conserva ${work})`);
  else rmSync(work, { recursive: true, force: true });
}
