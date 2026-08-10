import * as React from "react";
/**
 * Navegacion lateral de 232px, agrupada, sobre fondo hundido. El item activo es grafito 100, nunca cobalto.
 */
export interface SideNavProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  groups: Array<{ label: string; items: Array<{ value: string; label: string; icon?: string; count?: number }> }>;
  value?: string;
  onChange?: (value: string) => void;
  footer?: React.ReactNode;
}
export function SideNav(props: SideNavProps): JSX.Element;
