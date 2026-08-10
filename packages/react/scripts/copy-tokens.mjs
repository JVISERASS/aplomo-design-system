// Copia las hojas construidas por @jviserass/aplomo-tokens a dist/ para que el paquete
// publicado siga sirviendo "@jviserass/aplomo/styles.css" y "/tokens.css" por sí solo.
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tokensDist = resolve(root, "..", "tokens", "dist");

mkdirSync(resolve(root, "dist"), { recursive: true });
for (const file of ["aplomo.css", "tokens.css"]) {
  copyFileSync(resolve(tokensDist, file), resolve(root, "dist", file));
}
console.log("copy-tokens: dist/aplomo.css + dist/tokens.css");
