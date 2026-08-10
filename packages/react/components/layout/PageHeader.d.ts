import * as React from "react";
/** Cabecera de vista: antetitulo en versalitas, titulo display en sentence case, meta en datos. */
export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
}
export function PageHeader(props: PageHeaderProps): JSX.Element;
