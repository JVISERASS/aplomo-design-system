import * as React from "react";
/** Lista con franja de estado. Usala cuando cada fila tiene titulo + subtitulo, no columnas comparables. */
export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: Array<{ id?: string; title: string; subtitle?: string; ref?: string; meta?: string; tone?: "neutral" | "ok" | "warn" | "error" }>;
  selectedId?: string;
  onSelect?: (item: any) => void;
}
export function List(props: ListProps): JSX.Element;
