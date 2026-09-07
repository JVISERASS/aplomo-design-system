import type { StorybookConfig } from "@storybook/angular";

/**
 * Extensiones opcionales de `ngx-markdown`. Las carga con `import()` dinamico y las declara
 * como peerDependencies opcionales, asi que no estan instaladas: ap-markdown no usa ninguna.
 *
 * Vite las ignora --el propio ngx-markdown marca el import con `@vite-ignore`-- y por eso ni
 * `ng build` ni el CI se enteran. Pero @storybook/angular construye con webpack, que si
 * intenta resolver el import dinamico en tiempo de compilacion y tumba el catalogo entero
 * con "Can't resolve 'marked-katex-extension'". Resolverlas a `false` hace que webpack emita
 * un modulo vacio en su lugar, que es exactamente lo que describe ser opcional.
 */
const PEERS_OPCIONALES_NGX_MARKDOWN = [
  "marked-katex-extension",
  "katex",
  "mermaid",
  "prismjs",
  "clipboard",
  "emoji-toolkit",
];

const config: StorybookConfig = {
  stories: [
    "../src/lib/**/*.stories.ts",
    "../markdown/**/*.stories.ts",
    "../kits/**/*.stories.ts",
  ],
  addons: [],
  framework: { name: "@storybook/angular", options: {} },
  webpackFinal: async (cfg) => {
    cfg.resolve ??= {};
    cfg.resolve.fallback = {
      ...cfg.resolve.fallback,
      ...Object.fromEntries(PEERS_OPCIONALES_NGX_MARKDOWN.map((p) => [p, false as const])),
    };
    return cfg;
  },
};

export default config;
