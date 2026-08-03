import * as React from "react";
/** Seccion de formulario en dos columnas: explicacion + campos. Separada por borde de 1px, sin tarjeta. */
export interface FormSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** columnas de la rejilla de campos */
  columns?: number;
}
export function FormSection(props: FormSectionProps): JSX.Element;
