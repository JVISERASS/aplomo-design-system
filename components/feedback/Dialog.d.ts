import * as React from "react";
/** Dialogo de confirmacion. El unico sitio donde el rojo puede ir relleno es su boton destructivo confirmado. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
}
export function Dialog(props: DialogProps): JSX.Element | null;
