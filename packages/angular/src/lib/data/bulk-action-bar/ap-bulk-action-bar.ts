import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  numberAttribute,
  output,
} from "@angular/core";
import { ApDataValue } from "../data-value/ap-data-value";
import { ApIconButton } from "../../core/icon-button/ap-icon-button";

export type BulkActionBarActionTone = "default" | "danger";

export interface BulkActionBarAction {
  label: string;
  onClick?: () => void;
  tone?: BulkActionBarActionTone;
}

/**
 * Barra de acciones masivas: aparece al haber seleccion, capa flotante, 250ms.
 * Grafito 900 invertido: no compite con el acento.
 *
 * Aparece al marcar filas; va dentro del contenedor con scroll del listado.
 */
@Component({
  selector: "ap-bulk-action-bar",
  imports: [ApDataValue, ApIconButton],
  templateUrl: "./ap-bulk-action-bar.html",
  styleUrl: "./ap-bulk-action-bar.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-hidden]": '!on() ? "true" : "false"',
  },
})
export class ApBulkActionBar {
  readonly count = input(0, { transform: numberAttribute });
  readonly actions = input<BulkActionBarAction[]>([]);
  readonly clear = output<void>();

  protected readonly on = computed(() => this.count() > 0);
}
