import * as React from "react";

/** Un icono es la lista de elementos SVG que lo componen: ["path", { d: "…" }]. */
export type ApIconNode = ReadonlyArray<readonly [string, Record<string, string | number>]>;

/**
 * Icono del sistema. Los trazos son de Lucide (ISC), incrustados en el paquete: no hay
 * peticion de red ni dependencia de un script externo. Trazo 1.5, tamano 16 por defecto,
 * hereda `currentColor`.
 *
 * Un nombre no registrado deja un hueco vacio del tamano pedido, en vez de romper el layout.
 */
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** nombre del icono en kebab-case de Lucide */
  name: string;
  size?: number;
  strokeWidth?: number;
}
export function Icon(props: IconProps): JSX.Element;

/**
 * Registra iconos adicionales. Aplomo incrusta solo los que usa; para cualquier otro,
 * importalo tu de `lucide` —asi tu bundler solo se lleva los que nombras— y registralo:
 *
 * ```ts
 * import { Rocket } from "lucide";
 * import { registerApIcons } from "@jviserass/aplomo";
 * registerApIcons({ rocket: Rocket });
 * ```
 */
export function registerApIcons(iconos: Record<string, ApIconNode>): void;

/** Nombres disponibles ahora mismo. Util para diagnosticar un icono que no aparece. */
export function apIconNames(): string[];
