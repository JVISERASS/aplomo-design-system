// Genera src/public-api.ts a partir de src/lib/<categoria>/<componente>/ap-*.ts.
// El barril es AUTO-GENERADO a propósito: así ningún agente de conversión necesita
// tocar un fichero compartido, y no hay conflictos entre conversiones paralelas.
import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const libDir = resolve(root, "src", "lib");
mkdirSync(resolve(root, "src"), { recursive: true });

const dirs = (path) =>
  existsSync(path)
    ? readdirSync(path, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : [];

const sourcePaths = dirs(libDir)
  .flatMap((category) =>
    dirs(join(libDir, category)).flatMap((component) =>
      readdirSync(join(libDir, category, component))
        .filter(
          (file) =>
            file.startsWith("ap-") &&
            file.endsWith(".ts") &&
            !file.endsWith(".spec.ts") &&
            !file.endsWith(".stories.ts")
        )
        .map((file) => `./lib/${category}/${component}/${file.replace(/\.ts$/, "")}`)
    )
  )
  .sort();

const lines = sourcePaths.map((p) => `export * from "${p}";`);

writeFileSync(
  resolve(root, "src", "public-api.ts"),
  `// AUTO-GENERADO por scripts/gen-barrel.mjs — no editar a mano.\n${lines.join("\n")}\n`
);
console.log(`gen-barrel: ${lines.length} componentes`);
