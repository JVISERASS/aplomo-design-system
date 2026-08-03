import * as React from "react";
/** Selector de rango temporal con presets. Toda vista de metricas lo lleva en su barra de herramientas. */
export interface DateRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "1h" | "24h" | "7d" | "30d" | "custom" */
  value?: string;
  onChange?: (value: string) => void;
  /** ventana absoluta a mostrar en el boton personalizado, p.ej. "2026-08-01 → 2026-08-03" */
  absolute?: string;
}
export function DateRange(props: DateRangeProps): JSX.Element;
