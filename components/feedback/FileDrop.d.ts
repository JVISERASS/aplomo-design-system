import * as React from "react";
/** Subida de archivos (importar servicios, certificados). El tamano de cada archivo es dato: MONO 1. */
export interface FileDropProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  accept?: string;
  /** lista ya aceptada: {name, size} */
  files?: Array<{ name: string; size?: string }>;
  onFiles?: (files: File[]) => void;
  onRemove?: (file: any) => void;
}
export function FileDrop(props: FileDropProps): JSX.Element;
