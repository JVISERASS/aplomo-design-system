import * as React from "react";
/** Conmutador segmentado, 2-4 opciones cortas. Si las opciones son datos (rangos, unidades), pasa data. */
export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md";
  data?: boolean;
}
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
