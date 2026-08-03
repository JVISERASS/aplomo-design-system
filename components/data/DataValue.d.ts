import * as React from "react";
/**
 * Todo dato (cifra, importe, fecha, identificador, ruta, version, porcentaje) se renderiza con
 * DataValue: MONO 1 + tabular-nums, y al llegar o cambiar cuaja desde MONO 0 en 250ms.
 */
export interface DataValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: React.ReactNode;
  /** en carga: MONO 0 + placeholder atenuado */
  loading?: boolean;
  /** texto de esqueleto mientras carga */
  placeholder?: string;
  size?: number | string;
  weight?: number;
  tone?: "default" | "muted" | "ok" | "warn" | "error";
}
export function DataValue(props: DataValueProps): JSX.Element;
