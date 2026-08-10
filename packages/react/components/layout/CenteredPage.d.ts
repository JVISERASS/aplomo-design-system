import * as React from "react";
/** Armazon de pantalla completa sin navegacion: login, 2FA, 404, 500, mantenimiento. */
export interface CenteredPageProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: React.ReactNode;
  /** ancho de la columna central, 380 por defecto */
  width?: number | string;
  footer?: React.ReactNode;
}
export function CenteredPage(props: CenteredPageProps): JSX.Element;
