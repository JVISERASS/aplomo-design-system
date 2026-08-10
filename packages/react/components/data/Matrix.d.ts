import * as React from "react";
/** Matriz region × hora (u otra doble entrada). Intensidad en cinco grafitos; el valor va escrito en la celda. */
export interface MatrixProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: string[];
  columns: string[];
  /** valores por clave "fila|columna" */
  values: Record<string, number>;
  legend?: boolean;
  unit?: string;
  loading?: boolean;
}
export function Matrix(props: MatrixProps): JSX.Element;
