import * as React from "react";
/** Encabezado de subseccion: label en versalitas, title de 16px, meta en dato. */
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  title?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
