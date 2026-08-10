import * as React from "react";
/** Duracion con unidad conmutable (s / min / h / d). Evita el texto libre en ventanas y tiempos de espera. */
export interface DurationInputProps {
  label?: string;
  value?: number | string;
  unit?: "s" | "min" | "h" | "d";
  onChange?: (next: { value: number | string; unit: string }) => void;
  hint?: string;
  width?: number | string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function DurationInput(props: DurationInputProps): JSX.Element;
