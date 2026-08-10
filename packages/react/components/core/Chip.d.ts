import * as React from "react";
/** Chip de filtro aplicado. radius 3px. Si el valor es un dato, pasa data para MONO 1. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: () => void;
  /** el contenido es un dato (cifra, id, fecha) => MONO 1 */
  data?: boolean;
  children?: React.ReactNode;
}
export function Chip(props: ChipProps): JSX.Element;
