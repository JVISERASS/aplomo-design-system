import * as React from "react";
/** Separador de 1px, horizontal o vertical, con etiqueta en versalitas opcional. */
export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  direction?: "horizontal" | "vertical";
  spacing?: string;
}
export function Divider(props: DividerProps): JSX.Element;
