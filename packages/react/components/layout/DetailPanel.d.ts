import * as React from "react";
/** Panel de detalle lateral (capa flotante): 400ms, elevacion 2. Aloja el identificador que viaja desde la fila. */
export interface DetailPanelProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  onClose?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}
export function DetailPanel(props: DetailPanelProps): JSX.Element;
