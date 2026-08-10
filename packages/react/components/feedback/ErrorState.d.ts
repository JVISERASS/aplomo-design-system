import * as React from "react";
/** Estado de error de carga con reintento. El codigo del fallo es dato: MONO 1. */
export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** codigo tecnico, p.ej. "HTTP 503" o "TIMEOUT 30 s" */
  code?: string;
  detail?: string;
  onRetry?: () => void;
}
export function ErrorState(props: ErrorStateProps): JSX.Element;
