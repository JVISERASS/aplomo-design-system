import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";

export type MenuAnchor = "left" | "right";

export interface MenuItem {
  value?: string;
  label?: string;
  icon?: string;
  shortcut?: string;
  tone?: "default" | "danger";
  divider?: boolean;
}

/**
 * Menu desplegable (capa flotante); los atajos de teclado son datos (MONO 1). El contenedor
 * padre necesita `position: relative` para que el panel se ancle donde toca.
 */
@Component({
  selector: "ap-menu",
  imports: [ApIcon],
  templateUrl: "./ap-menu.html",
  styleUrl: "./ap-menu.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-anchor]": "anchor()",
  },
})
export class ApMenu {
  readonly open = input(false, { transform: booleanAttribute });
  readonly items = input.required<MenuItem[]>();
  readonly anchor = input<MenuAnchor>("right");
  readonly select = output<string>();
  readonly close = output<void>();

  protected pick(item: MenuItem): void {
    if (item.value !== undefined) this.select.emit(item.value);
    this.close.emit();
  }
}
