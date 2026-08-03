import * as React from "react";
/** Etiqueta breve al pasar el raton; 150ms, sin retardo teatral. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: React.ReactNode;
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): JSX.Element;
