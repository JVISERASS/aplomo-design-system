#!/usr/bin/env node
// Comprueba que el catalogo de Storybook de Angular refleja el de React: mismos componentes,
// mismos titulos y mismas stories.
//
// Que el Storybook compile solo demuestra que el TypeScript es valido; no dice nada de si
// faltan stories o de si un titulo cambio y el componente acaba en otra rama del arbol, que es
// donde un catalogo se degrada sin que nadie lo note.
//
// Uso:  node scripts/stories-check.mjs [--verbose]

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const reactDir = resolve(root, "packages/react/components");
const angularDir = resolve(root, "packages/angular/src/lib");
const verbose = process.argv.includes("--verbose");

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

function leer(src) {
  const title = src.match(/title:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? null;
  // `export const Default: Story = …` y `export const Default = …`, sin colarse el default.
  const stories = [...src.matchAll(/^export const ([A-Z][A-Za-z0-9_]*)/gm)].map((m) => m[1]);
  return { title, stories };
}

const problemas = [];
const pendientes = [];
let comparados = 0;
let totalStories = 0;

for (const categoria of readdirSync(reactDir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
  const dir = join(reactDir, categoria.name);
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".stories.tsx")).sort()) {
    const nombre = file.replace(/\.stories\.tsx$/, "");
    const k = kebab(nombre);
    const destino = join(angularDir, categoria.name, k, `ap-${k}.stories.ts`);

    if (!existsSync(destino)) {
      pendientes.push(`${categoria.name}/${nombre}`);
      continue;
    }

    const a = leer(readFileSync(join(dir, file), "utf8"));
    const b = leer(readFileSync(destino, "utf8"));
    comparados++;
    totalStories += b.stories.length;

    const fallos = [];
    if (a.title !== b.title) fallos.push(`titulo: "${a.title}" -> "${b.title}"`);
    const faltan = a.stories.filter((s) => !b.stories.includes(s));
    const sobran = b.stories.filter((s) => !a.stories.includes(s));
    if (faltan.length) fallos.push(`stories ausentes: ${faltan.join(", ")}`);
    if (sobran.length) fallos.push(`stories que el original no tiene: ${sobran.join(", ")}`);

    if (fallos.length) problemas.push({ componente: `${categoria.name}/${nombre}`, fallos });
    else if (verbose) console.log(`  ok  ${categoria.name}/${nombre}  (${b.stories.length} stories)`);
  }
}

console.log(
  `\nstories-check: ${comparados} componentes comparados, ${totalStories} stories, ` +
    `${pendientes.length} sin portar`
);

if (pendientes.length && verbose) console.log(`\nsin portar:\n  ${pendientes.join("\n  ")}`);

if (problemas.length) {
  console.log(`\n${problemas.length} componente(s) con el catalogo desalineado:\n`);
  for (const p of problemas) {
    console.log(`  ${p.componente}`);
    for (const f of p.fallos) console.log(`    ${f}`);
  }
  console.log("");
  process.exit(1);
}

if (pendientes.length) {
  console.log(`\n${pendientes.length} componentes todavia sin story en Angular.\n`);
  process.exit(1);
}

console.log("El catalogo de Angular refleja el de React.\n");
