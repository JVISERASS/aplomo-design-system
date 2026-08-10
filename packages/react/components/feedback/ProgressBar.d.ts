import * as React from "react";
/** Barra de progreso determinada (0-100). Para operaciones largas prefiere OperationLog, que la incluye. */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  label?: string;
  showValue?: boolean;
  tone?: "default" | "ok" | "error";
  height?: number;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
