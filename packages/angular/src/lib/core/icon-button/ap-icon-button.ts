import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input } from "@angular/core";
import { ApIcon } from "../icon/ap-icon";

export type IconButtonSize = "sm" | "md" | "lg";

/**
 * Boton solo-icono (Lucide, trazo 1.5) para barras de herramientas y filas.
 * Requiere `label`: es el texto accesible y el tooltip nativo, no un adorno opcional.
 *
 * El host es el propio <button>: asi `disabled`, `form`, `aria-*` y `(click)` son nativos.
 */
@Component({
  selector: "button[apIconButton]",
  imports: [ApIcon],
  template: `<ap-icon [name]="icon()" [size]="iconSize()" />`,
  styleUrl: "./ap-icon-button.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    type: "button",
    "[attr.aria-label]": "label()",
    "[attr.title]": "label()",
    "[attr.data-size]": "size()",
    "[attr.data-selected]": 'selected() ? "" : null',
  },
})
export class ApIconButton {
  /** nombre de icono Lucide, p.ej. "search" */
  readonly icon = input.required<string>();
  /** texto accesible + tooltip nativo */
  readonly label = input.required<string>();
  readonly size = input<IconButtonSize>("md");
  readonly selected = input(false, { transform: booleanAttribute });

  protected readonly iconSize = computed(() => (this.size() === "sm" ? 14 : 16));
}
