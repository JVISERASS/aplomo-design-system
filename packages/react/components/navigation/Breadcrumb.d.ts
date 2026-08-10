import * as React from "react";
/** Ruta de navegacion separada por barra. Los segmentos que son identificadores llevan data: true (MONO 1). */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<string | { label: string; data?: boolean }>;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
