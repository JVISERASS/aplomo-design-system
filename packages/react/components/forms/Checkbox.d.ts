import * as React from "react";
/** Casilla de 16px, radius 3px. Estado marcado es el unico sitio ademas del boton primario donde puede aparecer cobalto — cuenta para la regla de dos. */
export interface CheckboxProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** controlado; si se omite, la casilla gestiona su propio estado */
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
