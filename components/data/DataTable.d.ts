import * as React from "react";

export interface DataTableColumn {
  key: string;
  label: string;
  /** ancho de rejilla CSS, p.ej. "180px", "minmax(160px,1fr)" */
  width?: string;
  align?: "left" | "right" | "center";
  /** la columna contiene datos => MONO 1 + tabular-nums */
  data?: boolean;
  tone?: "default" | "muted";
  /** cabecera pulsable para ordenar */
  sortable?: boolean;
  /** marca la celda cuyo identificador viaja al panel de detalle (firma 3) */
  shared?: boolean;
  render?: (row: any) => React.ReactNode;
}

/** Tabla densa de listado: cabecera 32px, filas 40px, orden por columna, cursor de teclado (↑↓ ↵ Esc). */
export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: DataTableColumn[];
  rows: Array<{ id: string; [k: string]: any }>;
  selectedId?: string;
  /** (fila, elementoDelIdentificador) — el segundo argumento sirve para SharedValue.capture */
  onSelectRow?: (row: any, sharedEl?: HTMLElement | null) => void;
  selectable?: boolean;
  checked?: string[];
  onCheck?: (id: string | "all") => void;
  rowRef?: (id: string, el: HTMLElement | null) => void;
  /** estado de orden controlado */
  sort?: { key: string; dir: "asc" | "desc" };
  onSort?: (key: string) => void;
  /** navegacion con teclado, activada por defecto */
  keyboard?: boolean;
  onEscape?: () => void;
}
export function DataTable(props: DataTableProps): JSX.Element;
