import * as React from "react";
/** Consumo frente a un limite, en 20 celdas. Ambar a partir del 75%, rojo a partir del 90%. */
export interface QuotaProps extends React.HTMLAttributes<HTMLDivElement> {
  used?: number;
  total?: number;
  label?: string;
  unit?: string;
  cells?: number;
}
export function Quota(props: QuotaProps): JSX.Element;
