import * as React from "react";
/** Mostrar u ocultar columnas del listado. El contenedor padre necesita position:relative. */
export interface ColumnManagerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  columns: Array<{ key: string; label: string; locked?: boolean }>;
  /** claves ocultas */
  hidden?: string[];
  onToggle?: (key: string) => void;
  anchor?: "left" | "right";
}
export function ColumnManager(props: ColumnManagerProps): JSX.Element | null;
