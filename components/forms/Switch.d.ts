import * as React from "react";
/** Interruptor de ajuste. Deliberadamente grafito, no cobalto: no compite con la accion principal. */
export interface SwitchProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** controlado; si se omite, el interruptor gestiona su propio estado */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
