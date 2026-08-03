import * as React from "react";
/** Menu desplegable (capa flotante). El contenedor padre necesita position:relative. */
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  items: Array<{ value?: string; label?: string; icon?: string; shortcut?: string; tone?: "default" | "danger"; divider?: boolean }>;
  onSelect?: (value: string) => void;
  onClose?: () => void;
  anchor?: "left" | "right";
}
export function Menu(props: MenuProps): JSX.Element | null;
