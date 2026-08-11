#!/usr/bin/env node
// Genera el set de iconos que Aplomo incrusta, a partir del paquete `lucide`.
//
// Por que se genera en vez de depender de `lucide` en tiempo de ejecucion: el paquete pesa
// 21 MB descomprimido y expone 2.021 iconos. Como `name` es dinamico (`<ap-icon [name]="x">`),
// ningun bundler puede hacer tree-shaking, asi que un consumidor se llevaria el set entero por
// usar un boton. Incrustando solo lo que el sistema necesita, el coste es de unos pocos KB.
//
// `lucide` es devDependency: no aparece en ningun paquete publicado.
//
// Uso:  node scripts/gen-icons.mjs

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { icons } = createRequire(import.meta.url)("lucide");

// Lista explicita y revisable a proposito: si se deduce por grep, un renombrado silencioso
// deja de generar un icono y nadie se entera hasta que aparece un hueco en pantalla.
const USADOS = {
  // --- los que pintan los propios componentes ---
  "check": "Checkbox marcado, CopyValue copiado",
  "minus": "Checkbox indeterminado",
  "copy": "CopyValue en reposo",
  "x": "Toast y Chip: cerrar / quitar",
  "chevron-down": "Select, Accordion y AssistantTrace abiertos",
  "chevron-right": "Accordion y AssistantTrace cerrados",
  "chevron-left": "Pagination",
  "search": "CommandPalette y SearchField",
  "upload": "FileDrop",
  "file": "FileDrop, lista de ficheros",
  "paperclip": "Composer, adjuntar",
  "circle-dashed": "AssistantTrace, paso en ejecucion",
  "circle-x": "AssistantTrace, paso con error",
  "circle-check": "AssistantTrace, paso completado",
  "check-circle-2": "InlineAlert tono ok",
  "alert-triangle": "InlineAlert tono warn",
  "octagon-alert": "InlineAlert tono error",
  "info": "InlineAlert tono info",
  "more-horizontal": "menus de fila",

  // --- los que usan las stories y los kits de interfaz ---
  "activity": "", "alert-circle": "", "bell": "", "calendar": "", "columns-3": "",
  "cpu": "", "database": "", "download": "", "edit-2": "", "file-text": "",
  "filter": "", "git-commit-horizontal": "", "heart": "", "history": "", "link": "",
  "lock": "", "log-out": "", "mail": "", "menu": "", "package": "", "pause": "",
  "plus": "", "refresh-cw": "", "save": "", "server": "", "settings": "", "shield": "",
  "terminal": "", "trash-2": "", "trending-up": "", "users": "",
  "clipboard-paste": "", "scissors": "",
};

const pascal = (name) =>
  name.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");

const nombres = Object.keys(USADOS).sort();
const faltan = nombres.filter((n) => !icons[pascal(n)]);

if (faltan.length) {
  console.error(
    `\n✖ estos nombres no existen en lucide y renderizarian un hueco vacio:\n` +
      faltan.map((n) => `    ${n}`).join("\n") +
      `\n\n  Lucide renombra iconos entre versiones. Busca el nombre actual en https://lucide.dev\n`
  );
  process.exit(1);
}

const entradas = nombres
  .map((n) => `  "${n}": ${JSON.stringify(icons[pascal(n)])},`)
  .join("\n");

const cabecera = `// AUTO-GENERADO por scripts/gen-icons.mjs — no editar a mano.
//
// Set de iconos que Aplomo incrusta, extraido de lucide (licencia ISC, https://lucide.dev).
// Se incrusta en vez de depender de lucide en tiempo de ejecucion porque \`name\` es dinamico
// y ningun bundler podria hacer tree-shaking del set completo (2.021 iconos, 21 MB).
//
// Para usar cualquier otro icono de lucide, registralo desde la aplicacion: ver registerApIcons.
`;

// --- Angular ---
writeFileSync(
  resolve(root, "packages/angular/src/lib/core/icon/icon-data.ts"),
  `${cabecera}
/** Un icono es la lista de elementos SVG que lo componen: ["path", { d: "…" }]. */
export type ApIconNode = readonly [string, Record<string, string | number>][];

export const AP_ICONS: Record<string, ApIconNode> = {
${entradas}
};
`
);

// --- React ---
writeFileSync(
  resolve(root, "packages/react/components/core/icon-data.js"),
  `${cabecera}
export const AP_ICONS = {
${entradas}
};
`
);

const bytes = JSON.stringify(nombres.map((n) => icons[pascal(n)])).length;
console.log(`gen-icons: ${nombres.length} iconos incrustados (~${(bytes / 1024).toFixed(1)} KB de datos)`);
