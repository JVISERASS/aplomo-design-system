import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const order = ["fonts", "colors", "typography", "space", "shape", "elevation", "motion", "base"];
mkdirSync(resolve(root, "dist"), { recursive: true });

const importRe = /@import\s+url\([^)]*\)\s*;?/g;

function assemble(names) {
  const fontImports = [];
  const bodies = [];
  for (const name of names) {
    let css = readFileSync(resolve(root, "tokens", `${name}.css`), "utf8");
    for (const m of css.match(importRe) || []) if (m.includes("http")) fontImports.push(m);
    css = css.replace(importRe, "").trim();
    bodies.push(`/* tokens/${name}.css */\n${css}`);
  }
  const seen = new Set();
  const uniq = fontImports.filter((i) => (seen.has(i) ? false : seen.add(i)));
  return `${uniq.join("\n")}\n\n${bodies.join("\n\n")}\n`;
}

writeFileSync(resolve(root, "dist", "aplomo.css"), assemble(order));
writeFileSync(resolve(root, "dist", "tokens.css"), assemble(order.filter((n) => n !== "base")));
console.log("build-css: dist/aplomo.css + dist/tokens.css");
