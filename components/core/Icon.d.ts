import * as React from "react";
/** Icono Lucide. Trazo 1.5, tamano 16 por defecto, hereda currentColor. */
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** nombre del icono en kebab-case de Lucide */
  name: string;
  size?: number;
  strokeWidth?: number;
}
export function Icon(props: IconProps): JSX.Element;
