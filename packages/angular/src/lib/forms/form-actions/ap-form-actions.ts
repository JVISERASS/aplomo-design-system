import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from "@angular/core";
import { ApButton } from "../../core/button/ap-button";
import { ApDataValue } from "../../data/data-value/ap-data-value";

/**
 * Barra de guardado pegada al fondo. Solo aparece cuando hay cambios y dice cuantos.
 *
 * Entra desde abajo en 250ms al primer cambio y desaparece al guardar.
 */
@Component({
  selector: "ap-form-actions",
  imports: [ApButton, ApDataValue],
  templateUrl: "./ap-form-actions.html",
  styleUrl: "./ap-form-actions.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-dirty]": 'dirty() ? "" : null',
  },
})
export class ApFormActions {
  readonly dirty = input(false, { transform: booleanAttribute });
  /** numero de campos modificados */
  readonly count = input<number>();
  readonly saving = input(false, { transform: booleanAttribute });
  readonly saveLabel = input<string>("Guardar cambios");

  readonly save = output<void>();
  readonly discard = output<void>();
}
