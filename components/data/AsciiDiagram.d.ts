import * as React from "react";
/**
 * Diagrama de texto monoespaciado (topologia, flujo, cronologia). Sustituye a cualquier ilustracion:
 * el sistema no dibuja, escribe. Contenido entre llaves de plantilla, sangria exacta.
 */
export interface AsciiDiagramProps extends React.HTMLAttributes<HTMLElement> {
  /** etiqueta en versalitas encima del bloque */
  label?: string;
  size?: string | number;
  tone?: "default" | "muted";
  children?: React.ReactNode;
}
export function AsciiDiagram(props: AsciiDiagramProps): JSX.Element;
