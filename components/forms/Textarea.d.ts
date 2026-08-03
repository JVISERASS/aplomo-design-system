import * as React from "react";
/** Campo de texto largo (notas de incidencia, motivo de un cambio). */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}
export function Textarea(props: TextareaProps): JSX.Element;
