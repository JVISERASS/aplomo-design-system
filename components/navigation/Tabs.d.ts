import * as React from "react";
/** Pestanas de seccion. El indicador es grafito, no cobalto: el acento se reserva. Los contadores son datos (MONO 1). */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Array<string | { value: string; label: string; count?: number }>;
  value?: string;
  onChange?: (value: string) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
