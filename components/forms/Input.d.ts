import * as React from "react";
/** Campo de texto de 32px. Si el campo captura un dato (id, importe, fecha), pasa data para MONO 1. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** icono Lucide a la izquierda */
  icon?: string;
  /** el valor es un dato => MONO 1 + tabular-nums */
  data?: boolean;
}
export function Input(props: InputProps): JSX.Element;
