import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";
import { ApDataValue } from "../../data/data-value/ap-data-value";

/**
 * Datos congelados: lo que se ve ya no esta en vivo. Atenua el contenido y lo dice con su
 * antiguedad. Envuelve un panel cuyos datos ya no se actualizan (pausa, fallo del agregador,
 * vista historica).
 */
@Component({
  selector: "ap-frozen-state",
  imports: [ApIcon, ApDataValue],
  templateUrl: "./ap-frozen-state.html",
  styleUrl: "./ap-frozen-state.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-frozen]": 'frozen() ? "" : null',
  },
})
export class ApFrozenState {
  readonly frozen = input(false, { transform: booleanAttribute });
  /** antiguedad de la ultima lectura, p.ej. "hace 4 min" */
  readonly since = input<string>();
  readonly reason = input("Datos congelados");
  /** equivale a pasar `onResume` en React: sin esto no hay boton de reanudar (ver CONVENTIONS 10.1) */
  readonly showResume = input(false, { transform: booleanAttribute });
  readonly resume = output<void>();
}
