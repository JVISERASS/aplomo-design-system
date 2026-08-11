// Construye _ds_bundle.js: el bundle global que consumen los ui_kits, que son HTML estatico
// sin paso de compilacion.
//
// Existia como artefacto committeado sin forma de regenerarlo, asi que cualquier cambio en un
// componente lo dejaba obsoleto en silencio. Esto lo reconstruye desde el codigo fuente.
//
// React no se empaqueta: los kits lo cargan aparte y el bundle lo toma del global, igual que
// hacia el artefacto original (905 llamadas a React.createElement).

import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const NAMESPACE = "AplomoDesignSystem_c0efc3";

// Shim que resuelve "react" al global que cargan los kits, para que el bundle no lo incluya.
const shimDir = mkdtempSync(join(tmpdir(), "aplomo-umd-"));
const shim = join(shimDir, "react-global.js");
writeFileSync(
  shim,
  `const React = globalThis.React;
if (!React) throw new Error("[Aplomo] _ds_bundle.js necesita que React este cargado antes.");
export default React;
export const {
  createElement, Fragment, Children, cloneElement, isValidElement, createContext, forwardRef, memo,
  useState, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useContext, useReducer, useId
} = React;
`
);

try {
  const rutas = readFileSync(resolve(root, "src/index.ts"), "utf8")
    .split("\n")
    .filter((l) => l.startsWith("export * from"))
    .map((l) => l.match(/"\.\.\/(.+)"/)[1]);

  const manifiesto = {
    format: 4,
    namespace: NAMESPACE,
    components: rutas.map((p) => ({ name: p.split("/").pop(), sourcePath: `${p}.jsx` })),
  };

  await build({
    entryPoints: [resolve(root, "src/index.ts")],
    outfile: resolve(root, "_ds_bundle.js"),
    bundle: true,
    format: "iife",
    globalName: NAMESPACE,
    platform: "browser",
    target: "es2020",
    // El tsconfig del paquete pide el runtime automatico ("react-jsx"), que importaria
    // "react/jsx-runtime". Los kits solo tienen el global React, asi que aqui se fuerza el
    // runtime clasico, que emite React.createElement.
    tsconfigRaw: { compilerOptions: { jsx: "react" } },
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [
      {
        // Solo el especificador exacto "react": un alias normal capturaria tambien
        // "react/jsx-runtime" y lo resolveria contra un fichero, no un directorio.
        name: "react-desde-el-global",
        setup(b) {
          b.onResolve({ filter: /^react$/ }, () => ({ path: shim }));
        },
      },
    ],
    banner: { js: `/* @ds-bundle: ${JSON.stringify(manifiesto)} */` },
    legalComments: "none",
  });

  const salida = resolve(root, "_ds_bundle.js");
  const size = readFileSync(salida).length;
  console.log(`build-umd: _ds_bundle.js (${(size / 1024).toFixed(0)} KB, ${manifiesto.components.length} componentes)`);
} finally {
  rmSync(shimDir, { recursive: true, force: true });
}
