import * as React from "react";
/**
 * Contenedor de contenido: borde 1px, radius 8px, cero sombra.
 */
export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  /** anade 16px de relleno interior (no lo uses si dentro va una tabla) */
  padded?: boolean;
}
export function Panel(props: PanelProps): JSX.Element;
