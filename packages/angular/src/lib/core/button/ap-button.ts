import { ChangeDetectionStrategy, Component, booleanAttribute, input } from "@angular/core";

/** primary solo una vez por pantalla; danger es de contorno salvo con solid */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";

/**
 * Boton de accion. Un dato dentro de la etiqueta va envuelto en ApDataValue
 * ("Desplegar <ap-data-value value="4.18.2"/>").
 * El acento cobalto queda reservado a UNA sola accion primaria por pantalla.
 *
 * El host es el propio <button>: asi `disabled`, `form`, `aria-*` y `(click)` son nativos.
 */
@Component({
  selector: "button[apButton]",
  template: "<ng-content />",
  styleUrl: "./ap-button.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.type]": "type()",
    "[attr.data-variant]": "variant()",
    "[attr.data-size]": "size()",
    "[attr.data-solid]": 'solid() ? "" : null',
  },
})
export class ApButton {
  readonly variant = input<ButtonVariant>("secondary");
  readonly size = input<ButtonSize>("md");
  /** solo para el boton de confirmacion de un dialogo destructivo: rojo relleno */
  readonly solid = input(false, { transform: booleanAttribute });
  /** el nativo por defecto es "submit"; Aplomo mantiene "button" como en la version React */
  readonly type = input<ButtonType>("button");
}
