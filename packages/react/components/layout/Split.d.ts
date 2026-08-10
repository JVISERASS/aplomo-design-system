import * as React from "react";
/** Division listado + detalle. Con collapsed, la zona derecha no ocupa espacio (margen negativo animado). */
export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode;
  right?: React.ReactNode;
  rightWidth?: string;
  collapsed?: boolean;
}
export function Split(props: SplitProps): JSX.Element;
