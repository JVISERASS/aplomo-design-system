import * as React from "react";
/** Log en vivo de una operacion o un nodo. Monoespaciada del sistema, no Recursive: aqui manda la rejilla. */
export interface LogStreamProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: Array<{ at: string; level?: "INFO" | "OK" | "WARN" | "ERROR"; text: string }>;
  height?: number;
  /** se mantiene pegado al final al llegar lineas */
  follow?: boolean;
}
export function LogStream(props: LogStreamProps): JSX.Element;
