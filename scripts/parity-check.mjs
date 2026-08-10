#!/usr/bin/env node
// Comprueba la paridad visual entre cada componente React y su equivalente Angular.
//
// El modo de fallo caracteristico de esta conversion no es que no compile: es que una
// declaracion de estilo se caiga por el camino y el componente se vea distinto. Este script
// extrae de cada .jsx el conjunto de propiedades CSS y de referencias --ap-* de sus objetos
// de estilo, hace lo propio con el .css / .html / .ts del componente Angular, y reporta lo
// que esta en React y falta en Angular.
//
// Uso:  node scripts/parity-check.mjs [--verbose]

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const reactDir = resolve(root, "packages/react/components");
const angularDir = resolve(root, "packages/angular/src/lib");
const verbose = process.argv.includes("--verbose");

// Propiedades CSS realmente presentes en los objetos de estilo del design system.
// Es una lista cerrada a proposito: las claves de los .jsx que no son CSS (bg, fg, rest,
// hover, id, label…) quedan fuera y el chequeo no produce falsos positivos.
const CSS_PROPS = new Set([
  "align-content", "align-items", "align-self", "animation", "appearance", "background",
  "background-color", "border", "border-bottom", "border-color", "border-left", "border-radius",
  "border-right", "border-top", "border-top-color", "bottom", "box-shadow", "color", "cursor",
  "display", "filter", "flex", "flex-direction", "flex-wrap", "font", "font-family", "font-size",
  "font-variant-numeric", "font-variation-settings", "font-weight", "gap", "grid-template-columns",
  "grid-template-rows", "height", "inset", "justify-content", "justify-items", "left",
  "letter-spacing", "line-height", "list-style", "margin", "margin-bottom", "margin-left",
  "margin-right", "margin-top", "max-height", "max-width", "min-height", "min-width", "opacity",
  "outline", "overflow", "overflow-x", "padding", "padding-bottom", "padding-left", "padding-right",
  "padding-top", "pointer-events", "position", "resize", "right", "text-align", "text-decoration",
  "text-overflow", "text-transform", "text-wrap", "top", "transform", "transform-origin",
  "transition", "transition-delay", "user-select", "white-space", "width", "word-break", "z-index",
]);

// Una propiedad de React se da por cubierta si en Angular aparece ella misma o cualquiera de
// las que la engloban (atajos, o la forma equivalente que el CSS de componente suele preferir).
const COVERED_BY = {
  "background": ["background-color"],
  "background-color": ["background"],
  "border-color": ["border"],
  "border-top-color": ["border-top", "border"],
  "font-family": ["font"],
  "font-size": ["font"],
  "font-weight": ["font"],
  "line-height": ["font"],
  "margin-bottom": ["margin"],
  "margin-left": ["margin"],
  "margin-right": ["margin"],
  "margin-top": ["margin"],
  "overflow-x": ["overflow"],
  "padding-bottom": ["padding"],
  "padding-left": ["padding"],
  "padding-right": ["padding"],
  "padding-top": ["padding"],
  "inset": ["top", "right", "bottom", "left"],
};

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const tokensIn = (src) => new Set([...src.matchAll(/--ap-[a-z0-9-]+/g)].map((m) => m[0]));

/** Propiedades CSS de los objetos de estilo de un fichero JSX. */
function reactProps(src) {
  const found = new Set();
  for (const m of src.matchAll(/([a-zA-Z][a-zA-Z0-9]*)\s*:/g)) {
    const prop = kebab(m[1]);
    if (CSS_PROPS.has(prop)) found.add(prop);
  }
  return found;
}

/** Propiedades CSS de un componente Angular: hoja, plantilla y bindings de host. */
function angularProps(sources) {
  const found = new Set();
  for (const src of sources) {
    // declaraciones de una hoja o de un bloque styles: inline
    for (const m of src.matchAll(/(?:^|[;{])\s*([a-z][a-z0-9-]*)\s*:/gm)) {
      if (CSS_PROPS.has(m[1])) found.add(m[1]);
    }
    // [style.font-size], [style.width.px], "[style.grid-template-columns]"
    for (const m of src.matchAll(/\[style\.([a-z-]+)(?:\.[a-z%]+)?\]/g)) {
      if (CSS_PROPS.has(m[1])) found.add(m[1]);
    }
  }
  return found;
}

const dirsIn = (path) =>
  existsSync(path)
    ? readdirSync(path, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : [];

const problems = [];
const pending = [];
let checked = 0;

for (const category of dirsIn(reactDir)) {
  for (const file of readdirSync(join(reactDir, category)).filter((f) => f.endsWith(".jsx")).sort()) {
    const name = file.replace(/\.jsx$/, "");
    const target = join(angularDir, category, kebab(name));

    if (!existsSync(target)) {
      pending.push(`${category}/${name}`);
      continue;
    }

    const jsx = readFileSync(join(reactDir, category, file), "utf8");
    const ngSources = readdirSync(target)
      .filter((f) => /\.(ts|html|css)$/.test(f) && !f.endsWith(".spec.ts"))
      .map((f) => readFileSync(join(target, f), "utf8"));

    const wantProps = reactProps(jsx);
    const haveProps = angularProps(ngSources);
    const missingProps = [...wantProps].filter(
      (p) => !haveProps.has(p) && !(COVERED_BY[p] ?? []).some((alt) => haveProps.has(alt))
    );

    const ngAll = ngSources.join("\n");
    const wantTokens = tokensIn(jsx);
    const haveTokens = tokensIn(ngAll);
    const missingTokens = [...wantTokens].filter((t) => !haveTokens.has(t));

    checked++;
    if (missingProps.length || missingTokens.length) {
      problems.push({ component: `${category}/${name}`, missingProps, missingTokens });
    } else if (verbose) {
      console.log(`  ok  ${category}/${name}  (${wantProps.size} props, ${wantTokens.size} tokens)`);
    }
  }
}

console.log(`\nparity-check: ${checked} componentes comparados, ${pending.length} sin convertir todavia`);

if (pending.length && verbose) {
  console.log(`\nsin convertir:\n  ${pending.join("\n  ")}`);
}

if (problems.length) {
  console.log(`\n${problems.length} componente(s) con perdida de estilo:\n`);
  for (const p of problems) {
    console.log(`  ${p.component}`);
    if (p.missingProps.length) console.log(`    propiedades ausentes: ${p.missingProps.join(", ")}`);
    if (p.missingTokens.length) console.log(`    tokens ausentes:      ${p.missingTokens.join(", ")}`);
  }
  console.log("");
  process.exit(1);
}

console.log("Sin perdida de estilo.\n");
