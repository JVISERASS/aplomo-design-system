import { ChangeDetectionStrategy, Component, input, model } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";
import { ApDataValue } from "../../data/data-value/ap-data-value";

export interface SideNavItem {
  value: string;
  label: string;
  icon?: string;
  count?: number;
}

export interface SideNavGroup {
  label: string;
  items: SideNavItem[];
}

/**
 * Navegacion lateral de 232px, agrupada, sobre fondo hundido. El item activo es grafito 100,
 * nunca cobalto.
 *
 * `brand` y `footer` se proyectan con `[apBrand]` y `[apFooter]`; el contenedor colapsa solo
 * (`:empty`) cuando no se usan, igual que en `ap-message`.
 */
@Component({
  selector: "ap-side-nav",
  imports: [ApIcon, ApDataValue],
  templateUrl: "./ap-side-nav.html",
  styleUrl: "./ap-side-nav.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSideNav {
  readonly groups = input.required<SideNavGroup[]>();
  readonly value = model<string>("");

  protected isSelected(item: SideNavItem): boolean {
    return this.value() === item.value;
  }

  protected select(item: SideNavItem): void {
    this.value.set(item.value);
  }
}
