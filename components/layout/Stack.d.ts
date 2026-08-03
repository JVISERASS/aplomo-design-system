import * as React from "react";
/** Pila con gap. Toda separacion entre hermanos se hace con Stack o Columns, nunca con margin. */
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: string;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: boolean;
}
export function Stack(props: StackProps): JSX.Element;
