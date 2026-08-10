import * as React from "react";
/** Medidor de 10 celdas en caracteres de bloque. Alternativa textual a la barra de progreso, para tablas densas. */
export interface AsciiMeterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 0-100 */
  value?: number;
  cells?: number;
  showValue?: boolean;
  tone?: "default" | "ok" | "warn" | "error";
}
export function AsciiMeter(props: AsciiMeterProps): JSX.Element;
