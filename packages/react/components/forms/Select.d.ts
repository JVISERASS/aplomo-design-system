import * as React from "react";
/** Desplegable nativo con chevron Lucide, mismo alto que el resto de controles (32px). */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
}
export function Select(props: SelectProps): JSX.Element;
