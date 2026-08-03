import * as React from "react";
/** Registro persistente de operaciones largas (drenar, desplegar, exportar). Reemplaza al toast. */
export interface OperationLogProps extends React.HTMLAttributes<HTMLDivElement> {
  operations: Array<{ id: string; title: string; progress?: number; detail?: string; status?: "running" | "ok" | "error" }>;
  onDismiss?: (id: string) => void;
}
export function OperationLog(props: OperationLogProps): JSX.Element | null;
