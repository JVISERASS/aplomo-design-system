import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input, model, numberAttribute, output } from "@angular/core";
import { ApDataValue } from "../data-value/ap-data-value";
import { ApIconButton } from "../../core/icon-button/ap-icon-button";
import { ApSelect, SelectOption } from "../../forms/select/ap-select";

const PAGE_SIZE_OPTIONS: SelectOption[] = [
  { value: "40", label: "40 por pagina" },
  { value: "80", label: "80 por pagina" },
  { value: "200", label: "200 por pagina" },
];

/**
 * Paginacion de listado: rango visible, tamano de pagina y dos flechas. Nada de numeros de
 * pagina. Va dentro del Panel, bajo la tabla.
 */
@Component({
  selector: "ap-pagination",
  imports: [ApDataValue, ApIconButton, ApSelect],
  templateUrl: "./ap-pagination.html",
  styleUrl: "./ap-pagination.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPagination {
  readonly from = input(1, { transform: numberAttribute });
  readonly to = input(40, { transform: numberAttribute });
  readonly total = input(0, { transform: numberAttribute });
  /** dos vias: bindealo con [(pageSize)] (model() no admite `transform`, no lo pongas como atributo pelado) */
  readonly pageSize = model(40);
  readonly loading = input(false, { transform: booleanAttribute });

  readonly prev = output<void>();
  readonly next = output<void>();

  protected readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  protected readonly range = computed(() => `${this.from()}–${this.to()}`);
  protected readonly pageSizeValue = computed(() => String(this.pageSize()));
  protected readonly prevDisabled = computed(() => this.from() <= 1);
  protected readonly nextDisabled = computed(() => this.to() >= this.total());

  protected handlePageSizeChange(value: string): void {
    const next = Number(value);
    if (!Number.isNaN(next)) this.pageSize.set(next);
  }
}
