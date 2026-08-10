import * as React from "react";
/** Cifra de cabecera. Los tiles se separan por borde de 1px, nunca por tarjetas con sombra. */
export interface MetricTileProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value?: React.ReactNode;
  unit?: string;
  delta?: React.ReactNode;
  deltaTone?: "default" | "muted" | "ok" | "warn" | "error";
  loading?: boolean;
}
export function MetricTile(props: MetricTileProps): JSX.Element;
