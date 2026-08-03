import * as React from "react";
/** Numero + unidad fija (ms, %, req/s). El numero se alinea a la derecha; la unidad va en una celda gris al borde. */
export interface UnitInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** unidad mostrada, p.ej. "ms" */
  unit: string;
  hint?: string;
  error?: string;
  width?: number | string;
}
export function UnitInput(props: UnitInputProps): JSX.Element;
