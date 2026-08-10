import * as React from "react";
/** Barra de guardado. Entra desde abajo en 250ms al primer cambio y desaparece al guardar. */
export interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  dirty?: boolean;
  /** numero de campos modificados */
  count?: number;
  onSave?: () => void;
  onDiscard?: () => void;
  saving?: boolean;
  saveLabel?: string;
}
export function FormActions(props: FormActionsProps): JSX.Element;
