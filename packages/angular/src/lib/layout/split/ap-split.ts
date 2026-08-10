import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input } from "@angular/core";

/** Dos zonas con separador de 1px: listado a la izquierda, detalle a la derecha. */
@Component({
  selector: "ap-split",
  templateUrl: "./ap-split.html",
  styleUrl: "./ap-split.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-collapsed]": 'collapsed() ? "" : null',
  },
})
export class ApSplit {
  readonly rightWidth = input<string>("var(--ap-detail-w)");
  /** con collapsed, la zona derecha no ocupa espacio: margen derecho negativo animado */
  readonly collapsed = input(false, { transform: booleanAttribute });

  protected readonly rightMargin = computed(() =>
    this.collapsed() ? `calc(-1 * ${this.rightWidth()})` : "0px",
  );
}
