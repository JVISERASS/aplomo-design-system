import * as React from "react";
/** Reparto de un total (version por region, trafico por cliente) en una barra segmentada de grafitos. */
export interface ShareBarProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: Array<{ label: string; value: number; tone?: "default" | "error" }>;
  height?: number;
  showLegend?: boolean;
  loading?: boolean;
}
export function ShareBar(props: ShareBarProps): JSX.Element;
