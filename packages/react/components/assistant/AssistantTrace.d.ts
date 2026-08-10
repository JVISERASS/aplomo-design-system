import * as React from "react";
/** Que ha consultado el asistente para responder. Cada paso es dato: consulta y duracion en MONO 1. */
export interface AssistantTraceProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Array<{ label: string; ms?: number; status?: "ok" | "running" | "error" }>;
  running?: boolean;
  defaultOpen?: boolean;
}
export function AssistantTrace(props: AssistantTraceProps): JSX.Element;
