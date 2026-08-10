import * as React from "react";
/** Envuelve un panel cuyos datos ya no se actualizan (pausa, fallo del agregador, vista historica). */
export interface FrozenStateProps extends React.HTMLAttributes<HTMLDivElement> {
  frozen?: boolean;
  /** antiguedad de la ultima lectura, p.ej. "hace 4 min" */
  since?: string;
  reason?: string;
  onResume?: () => void;
}
export function FrozenState(props: FrozenStateProps): JSX.Element;
