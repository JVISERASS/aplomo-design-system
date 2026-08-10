import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from "@angular/core";

export type AsciiMeterTone = "default" | "ok" | "warn" | "error";

/**
 * Medidor en caracteres: 10 celdas por defecto. El relleno es dato, no decoracion.
 *
 * Alternativa textual a la barra de progreso, para celdas de tabla y listas densas.
 */
@Component({
  selector: "ap-ascii-meter",
  templateUrl: "./ap-ascii-meter.html",
  styleUrl: "./ap-ascii-meter.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-tone]": "tone()",
  },
})
export class ApAsciiMeter {
  /** 0-100 */
  readonly value = input(0, { transform: numberAttribute });
  readonly cells = input(10, { transform: numberAttribute });
  readonly showValue = input(true, { transform: booleanAttribute });
  readonly tone = input<AsciiMeterTone>("default");

  protected readonly pct = computed(() => Math.max(0, Math.min(100, this.value())));
  protected readonly on = computed(() => Math.round((this.pct() / 100) * this.cells()));
  protected readonly bar = computed(
    () => "█".repeat(this.on()) + "░".repeat(this.cells() - this.on()),
  );
}
