import * as React from "react";
/** Elemento compartido: el identificador viaja de la fila a la cabecera del detalle en 400ms. */
export interface SharedValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** misma clave en origen (capture) y destino */
  sharedKey: string;
  children?: React.ReactNode;
}
export function SharedValue(props: SharedValueProps): JSX.Element & {
  capture(key: string, el: HTMLElement | null): void;
};
