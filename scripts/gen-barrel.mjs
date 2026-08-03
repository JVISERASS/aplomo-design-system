import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "_ds_manifest.json"), "utf8"));
mkdirSync(resolve(root, "src"), { recursive: true });

const lines = [...manifest.components]
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((c) => `export * from "../${c.sourcePath.replace(/\.jsx$/, "")}";`);

writeFileSync(
  resolve(root, "src", "index.ts"),
  `// AUTO-GENERADO por scripts/gen-barrel.mjs — no editar a mano.\n${lines.join("\n")}\n`
);
console.log(`gen-barrel: ${lines.length} componentes`);
