import * as React from "react";

/**
 * Boton de accion. Un dato dentro de la etiqueta va envuelto en DataValue ("Desplegar <DataValue value=\"4.18.2\"/>").
 * El acento cobalto queda reservado a UNA sola accion primaria por pantalla.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary solo una vez por pantalla; danger es de contorno salvo con solid */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  /** solo para el boton de confirmacion de un dialogo destructivo: rojo relleno */
  solid?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
