import * as React from "react";
/** Aviso breve con accion reversible ("Deshacer"). Regla: si la accion dura mas de 2 s, va en OperationLog. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  toasts: Array<{ id: string; message: string; action?: string }>;
  onDismiss?: (id: string) => void;
  onAction?: (toast: any) => void;
}
export function Toast(props: ToastProps): JSX.Element;
