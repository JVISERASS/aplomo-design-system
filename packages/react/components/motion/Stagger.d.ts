import * as React from "react";
/** Envuelve el CONTENIDO de una vista al cargarla (nunca el shell ni las cabeceras). Escalona hasta 8 hermanos y suelta el resto de golpe. */
export interface StaggerProps extends React.HTMLAttributes<HTMLElement> {
  /** desfase entre hermanos en ms (60 por defecto) */
  step?: number;
  /** maximo de elementos escalonados (8) */
  max?: number;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Stagger(props: StaggerProps): JSX.Element;
