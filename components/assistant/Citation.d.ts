import * as React from "react";
/** Referencia citada por el asistente (servicio, despliegue, incidencia). Siempre navegable. */
export interface CitationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  hint?: string;
  /** icono Lucide del tipo de recurso */
  icon?: string;
}
export function Citation(props: CitationProps): JSX.Element;
