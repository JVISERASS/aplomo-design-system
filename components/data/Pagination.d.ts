import * as React from "react";
/** Pie de listado: rango, tamano de pagina y navegacion. Va dentro del Panel, bajo la tabla. */
export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: number;
  to?: number;
  total?: number;
  pageSize?: number;
  onPageSize?: (size: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  loading?: boolean;
}
export function Pagination(props: PaginationProps): JSX.Element;
