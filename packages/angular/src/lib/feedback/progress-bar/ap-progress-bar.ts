import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from "@angular/core";
import { ApDataValue } from "../../data/data-value/ap-data-value";

export type ProgressBarTone = "default" | "ok" | "error";

/**
 * Progreso determinado (0-100). Grafito por defecto; el color solo aparece si la operacion ha
 * fallado (`error`) o ha terminado con exito (`ok`).
 *
 * Para operaciones largas prefiere ApOperationLog, que ya incluye una barra de este tipo.
 */
@Component({
  selector: "ap-progress-bar",
  imports: [ApDataValue],
  templateUrl: "./ap-progress-bar.html",
  styleUrl: "./ap-progress-bar.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-tone]": "tone()",
  },
})
export class ApProgressBar {
  readonly value = input(0, { transform: numberAttribute });
  readonly label = input<string>();
  readonly showValue = input(true, { transform: booleanAttribute });
  readonly tone = input<ProgressBarTone>("default");
  /** alto de la pista, en px */
  readonly height = input(4, { transform: numberAttribute });

  protected readonly pct = computed(() => Math.max(0, Math.min(100, this.value())));
}
