// Precompila los ui_kits para que no dependan de ningun CDN.
//
// El arnes original servia JSX sin compilar y cargaba React, ReactDOM y @babel/standalone desde
// unpkg. Eso son tres peticiones a un tercero solo para abrir una demo: un punto de fallo, una
// fuga de la IP de quien la abre, y la misma superficie de cadena de suministro que quitamos al
// incrustar los iconos.
//
// Aqui cada kit se compila a un unico kit.js, y React/ReactDOM se empaquetan una vez en
// _runtime.js compartido. El HTML resultante no necesita red.

import { build, transform } from "esbuild";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const kitsDir = resolve(root, "ui_kits");

// --- runtime compartido: React y ReactDOM como globales, igual que los exponia el UMD del CDN ---
await build({
  stdin: {
    contents: `
      import React from "react";
      import * as ReactDOMClient from "react-dom/client";
      window.React = React;
      window.ReactDOM = ReactDOMClient;
    `,
    resolveDir: root,
    loader: "js",
  },
  outfile: join(kitsDir, "_runtime.js"),
  bundle: true,
  format: "iife",
  platform: "browser",
  target: "es2020",
  minify: true,
  legalComments: "none",
});
console.log(`build-kits: _runtime.js (${(readFileSync(join(kitsDir, "_runtime.js")).length / 1024).toFixed(0)} KB)`);

const jsxTransform = (code, nombre) =>
  transform(code, {
    loader: "jsx",
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    sourcefile: nombre,
  }).then((r) => r.code);

for (const kit of readdirSync(kitsDir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
  const dir = join(kitsDir, kit.name);
  const htmlPath = join(dir, "index.html");
  if (!existsSync(htmlPath)) continue;

  const html = readFileSync(htmlPath, "utf8");

  // El orden de las vistas importa: se declaran como globales y unas usan a otras. En la
  // primera pasada se lee del HTML original; despues, del manifiesto, para que el script se
  // pueda volver a ejecutar (el HTML generado ya no lleva las etiquetas de las que se dedujo).
  const manifiestoPath = join(dir, "kit.sources.json");
  let ficheros = [...html.matchAll(/<script type="text\/babel" src="\.\/([^"]+)"><\/script>/g)].map(
    (m) => m[1]
  );
  let inline = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/)?.[1] ?? "";

  if (ficheros.length) {
    writeFileSync(manifiestoPath, JSON.stringify({ ficheros, inline }, null, 2) + "\n");
  } else if (existsSync(manifiestoPath)) {
    ({ ficheros, inline } = JSON.parse(readFileSync(manifiestoPath, "utf8")));
  } else {
    console.warn(`build-kits: ${kit.name} no declara vistas y no hay manifiesto; se omite`);
    continue;
  }

  const partes = [];
  for (const f of ficheros) partes.push(await jsxTransform(readFileSync(join(dir, f), "utf8"), f));
  if (inline.trim()) partes.push(await jsxTransform(inline, "mount.jsx"));

  // Cada vista va en su propio ambito: en el arnes original cada una era su propia etiqueta
  // <script>, y varias declaran `const {Panel, ...} = window.AP_UI` en el nivel superior. En un
  // unico ambito compartido esas declaraciones chocan ("Identifier 'Panel' has already been
  // declared"). Se comunican entre si por `window`, no por closure, asi que aislarlas es fiel.
  const salida =
    `/* AUTO-GENERADO por scripts/build-kits.mjs — edita los .jsx, no este fichero. */\n` +
    partes.map((p) => `(function(){\n${p}\n})();`).join("\n");
  writeFileSync(join(dir, "kit.js"), salida);

  // El HTML pasa a cargar solo ficheros locales: fuera el JSX sin compilar y fuera los tres
  // scripts de unpkg (React, ReactDOM y Babel), que ahora viven en _runtime.js y en kit.js.
  let nuevoHtml = html
    .replace(/[ \t]*<script[^>]*src="https:\/\/unpkg\.com\/[^"]*"[^>]*><\/script>\n?/g, "")
    .replace(/[ \t]*<script type="text\/babel" src="\.\/[^"]+"><\/script>\n?/g, "")
    .replace(/[ \t]*<script type="text\/babel">[\s\S]*?<\/script>\n?/g, "");

  if (!nuevoHtml.includes("_runtime.js")) {
    nuevoHtml = nuevoHtml.replace(
      '<script src="../../_ds_bundle.js"></script>',
      '<script src="../_runtime.js"></script>\n<script src="../../_ds_bundle.js"></script>'
    );
  }
  // kit.js va el ultimo, despues de todo lo que necesita (runtime, bundle, datos y el proxy
  // AP_UI). Se ancla a </head> y no a un script concreto: no todos los kits cargan los mismos
  // ficheros —tres comparten el ns.js de admin— y anclarlo a uno de ellos dejaba a esos tres
  // sin su kit.js y sin montar nada.
  if (!nuevoHtml.includes("kit.js")) {
    nuevoHtml = nuevoHtml.replace("</head>", '<script src="./kit.js" defer></script>\n</head>');
  }

  writeFileSync(htmlPath, nuevoHtml);
  console.log(`build-kits: ${kit.name}/kit.js (${ficheros.length} vistas, ${(salida.length / 1024).toFixed(0)} KB)`);
}
