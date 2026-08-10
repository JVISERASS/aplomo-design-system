import * as React from "react";
/** Opciones excluyentes con punto de 8px. Para 2-3 opciones cortas prefiere SegmentedControl. */
export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<string | { value: string; label: string; hint?: string }>;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  direction?: "row" | "column";
  disabled?: boolean;
}
export function Radio(props: RadioProps): JSX.Element;
