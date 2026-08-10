import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from "@angular/core";
import { ApIcon } from "../icon/ap-icon";

/**
 * Chip de filtro aplicado. radius 3px. Si el valor es un dato, pasa `data` para MONO 1.
 */
@Component({
  selector: "ap-chip",
  imports: [ApIcon],
  templateUrl: "./ap-chip.html",
  styleUrl: "./ap-chip.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-data]": 'data() ? "" : null',
    "[attr.data-removable]": 'showRemove() ? "" : null',
  },
})
export class ApChip {
  /** el contenido es un dato (cifra, id, fecha) => MONO 1 */
  readonly data = input(false, { transform: booleanAttribute });
  /** equivale a pasar `onRemove` en React: sin esto no hay boton de quitar (ver CONVENTIONS 10.1) */
  readonly showRemove = input(false, { transform: booleanAttribute });
  readonly remove = output<void>();
}
