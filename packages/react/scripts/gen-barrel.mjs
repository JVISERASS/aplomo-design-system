import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = resolve(root, "components");
mkdirSync(resolve(root, "src"), { recursive: true });

const sourcePaths = readdirSync(componentsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .flatMap((category) =>
    readdirSync(join(componentsDir, category.name))
      .filter((file) => file.endsWith(".jsx"))
      .map((file) => `components/${category.name}/${file}`)
  )
  .sort();

const lines = sourcePaths.map((p) => `export * from "../${p.replace(/\.jsx$/, "")}";`);

writeFileSync(
  resolve(root, "src", "index.ts"),
  `// AUTO-GENERADO por scripts/gen-barrel.mjs — no editar a mano.\n${lines.join("\n")}\n`
);
console.log(`gen-barrel: ${lines.length} componentes`);
