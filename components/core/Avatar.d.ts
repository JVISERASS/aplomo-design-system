import * as React from "react";
/** Iniciales del usuario, cuadrado con radius 3px. Sin imagen y sin color por persona. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: number;
}
export function Avatar(props: AvatarProps): JSX.Element;
