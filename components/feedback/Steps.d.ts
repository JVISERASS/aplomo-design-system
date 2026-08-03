import * as React from "react";
/** Pasos de un proceso, en fila o en columna. El paso hecho se marca con tic sobre grafito 900. */
export interface StepsProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: Array<string | { label: string; meta?: string }>;
  /** indice del paso en curso */
  current?: number;
  direction?: "row" | "column";
}
export function Steps(props: StepsProps): JSX.Element;
