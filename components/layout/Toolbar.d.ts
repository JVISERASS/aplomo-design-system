import * as React from "react";
/** Barra de filtros/acciones de 48px con separador inferior de 1px. Parte del shell: no se anima al entrar. */
export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}
export function Toolbar(props: ToolbarProps): JSX.Element;
