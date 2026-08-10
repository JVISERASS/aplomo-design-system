import * as React from "react";
/** Columnas de contenido. Sin even, envuelven solas con un suelo de min px. */
export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  /** columnas exactas en vez de auto-fit */
  even?: boolean;
  /** ancho minimo de columna en px cuando auto-fit */
  min?: number;
  gap?: string;
  align?: React.CSSProperties["alignItems"];
}
export function Columns(props: ColumnsProps): JSX.Element;
