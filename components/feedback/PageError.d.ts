import * as React from "react";
/**
 * Pagina de error completa (404, 403, 500, 503). Va dentro de CenteredPage.
 * Copia por defecto en espanol: sin disculpas, sin humor, con salida.
 */
export interface PageErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: "404" | "403" | "500" | "503" | string;
  title?: string;
  detail?: string;
  /** identificador tecnico del fallo, copiable por el usuario */
  requestId?: string;
  /** fin previsto de la ventana, solo en 503 */
  eta?: string;
  actions?: React.ReactNode;
}
export function PageError(props: PageErrorProps): JSX.Element;
