import * as React from "react";
/** Aviso en linea: tinte palido + color en el texto e icono. Sin cierre animado ni rebotes. */
export interface InlineAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "ok" | "warn" | "error";
  title?: React.ReactNode;
}
export function InlineAlert(props: InlineAlertProps): JSX.Element;
