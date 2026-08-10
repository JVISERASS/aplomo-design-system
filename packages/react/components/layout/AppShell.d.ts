import * as React from "react";
/** Armazon de pantalla completa: topbar + SideNav + main + panel lateral. */
export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  topbar?: React.ReactNode;
  nav?: React.ReactNode;
  /** panel lateral derecho, normalmente un DetailPanel */
  aside?: React.ReactNode;
}
export function AppShell(props: AppShellProps): JSX.Element;
