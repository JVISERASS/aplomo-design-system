import { ChangeDetectionStrategy, Component, booleanAttribute, input } from "@angular/core";
import { ApDataValue } from "../data-value/ap-data-value";

/**
 * Fila etiqueta/valor del panel de detalle. La etiqueta es prosa (MONO 0); el valor, dato
 * (MONO 1) salvo que pases `data=false`.
 */
@Component({
  selector: "ap-key-value",
  imports: [ApDataValue],
  templateUrl: "./ap-key-value.html",
  styleUrl: "./ap-key-value.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApKeyValue {
  readonly label = input.required<string>();
  readonly value = input<string | number>();
  /** false cuando el valor es prosa (una descripcion, un nombre de persona) */
  readonly data = input(true, { transform: booleanAttribute });
  readonly loading = input(false, { transform: booleanAttribute });
}
