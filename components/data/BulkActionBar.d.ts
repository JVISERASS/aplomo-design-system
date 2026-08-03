import * as React from "react";
/** Barra flotante de acciones sobre la seleccion. Grafito 900 invertido: no compite con el acento. */
export interface BulkActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  onClear?: () => void;
  actions?: Array<{ label: string; onClick?: () => void; tone?: "default" | "danger" }>;
}
export function BulkActionBar(props: BulkActionBarProps): JSX.Element;
