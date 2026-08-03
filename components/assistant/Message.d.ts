import * as React from "react";
/** Turno de conversacion con el asistente. Prosa a 15/1.65 y maximo 68ch; los datos citados van en DataValue. */
export interface MessageProps extends React.HTMLAttributes<HTMLElement> {
  role?: "user" | "assistant";
  author?: string;
  /** hora del turno, dato: MONO 1 */
  at?: string;
  /** acciones o citas bajo el texto */
  footer?: React.ReactNode;
}
export function Message(props: MessageProps): JSX.Element;
