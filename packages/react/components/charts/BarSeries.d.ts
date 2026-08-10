import * as React from "react";
/** Serie temporal en barras. Eje inferior de 1px, umbral opcional en linea discontinua, ultima barra destacada. */
export interface BarSeriesProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[];
  height?: number;
  gap?: number;
  /** dos o tres marcas de tiempo: ["hace 24 h","ahora"] */
  labels?: string[];
  /** valor del objetivo, se dibuja como linea discontinua */
  threshold?: number;
  tone?: "default" | "warn" | "error";
  /** en carga: barras al 4%, crecen al llegar los datos */
  loading?: boolean;
}
export function BarSeries(props: BarSeriesProps): JSX.Element;
