import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  outExtension({ format }) {
    return { js: format === "cjs" ? ".cjs" : ".js" };
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.resolveExtensions = [".tsx", ".ts", ".jsx", ".js", ".json"];
  },
});
