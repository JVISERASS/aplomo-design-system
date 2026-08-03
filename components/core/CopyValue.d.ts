import * as React from "react";
/** Dato copiable (identificador, clave, ruta): un clic copia y confirma con el tic durante 1,2 s. */
export interface CopyValueProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string | number;
  size?: string | number;
  weight?: number;
}
export function CopyValue(props: CopyValueProps): JSX.Element;
