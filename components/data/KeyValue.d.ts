import * as React from "react";
/** Fila etiqueta/valor del panel de detalle. La etiqueta es prosa (MONO 0); el valor, dato (MONO 1) salvo que pases data=false. */
export interface KeyValueProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value?: React.ReactNode;
  /** false cuando el valor es prosa (una descripcion, un nombre de persona) */
  data?: boolean;
  loading?: boolean;
}
export function KeyValue(props: KeyValueProps): JSX.Element;
