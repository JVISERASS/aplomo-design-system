import * as React from "react";
/** Estado en clave (dato): tinte palido de fondo + color en el texto, nunca relleno saturado. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "ok" | "warn" | "error" | "accent";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
