import * as React from "react";
/** Serie compacta para celdas de tabla y cabeceras de metrica. Sin ejes, sin relleno, sin leyenda. */
export interface SparklineProps extends React.SVGAttributes<SVGElement> {
  data: number[];
  width?: number;
  height?: number;
  tone?: "default" | "ok" | "warn" | "error";
  /** marca el ultimo punto con un cuadrado de 3px */
  showLast?: boolean;
}
export function Sparkline(props: SparklineProps): JSX.Element;
