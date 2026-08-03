import * as React from "react";
/** Boton solo-icono para barras de herramientas y filas. Siempre con label accesible. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** nombre de icono Lucide, p.ej. "search" */
  icon: string;
  /** texto accesible + tooltip nativo */
  label: string;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
