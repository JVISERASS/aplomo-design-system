import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from "@angular/core";

/** Rejilla de columnas con gap de la escala. even reparte a partes iguales; si no, auto-fit con suelo. */
@Component({
  selector: "ap-columns",
  template: "<ng-content />",
  styleUrl: "./ap-columns.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[style.grid-template-columns]": "gridTemplateColumns()",
    "[style.gap]": "gap()",
    "[style.align-items]": "align()",
  },
})
export class ApColumns {
  readonly count = input(2, { transform: numberAttribute });
  /** columnas exactas en vez de auto-fit */
  readonly even = input(false, { transform: booleanAttribute });
  /** ancho minimo de columna en px cuando auto-fit */
  readonly min = input(200, { transform: numberAttribute });
  readonly gap = input<string>("var(--ap-space-4)");
  /** cualquier valor valido de align-items */
  readonly align = input<string>("start");

  protected readonly gridTemplateColumns = computed(() =>
    this.even()
      ? `repeat(${this.count()}, minmax(0, 1fr))`
      : `repeat(auto-fit, minmax(${this.min()}px, 1fr))`,
  );
}
