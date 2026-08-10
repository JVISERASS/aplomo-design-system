import * as React from "react";
/** Indicador indeterminado, sólo para esperas cortas de una accion. No es el patron de carga de datos. */
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  label?: string;
}
export function Spinner(props: SpinnerProps): JSX.Element;
