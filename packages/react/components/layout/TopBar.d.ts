import * as React from "react";
/** Barra superior de aplicacion con marca, contexto e identidad. Parte del shell: no se anima. */
export interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  user?: { name: string; meta?: string };
}
export function TopBar(props: TopBarProps): JSX.Element;
