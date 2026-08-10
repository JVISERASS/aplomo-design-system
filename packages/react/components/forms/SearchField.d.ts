import * as React from "react";
/** Campo de busqueda de barra de herramientas: Input con icono search y ancho fijo de 260px. */
export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
export function SearchField(props: SearchFieldProps): JSX.Element;
