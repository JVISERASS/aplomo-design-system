import { ChangeDetectionStrategy, Component, computed, input, numberAttribute } from "@angular/core";
import { ApDataValue } from "../data-value/ap-data-value";

/**
 * Consumo frente a un limite, en celdas (20 por defecto). Ambar a partir del 75%, rojo a
 * partir del 90%. Se lee de un vistazo cuanto queda, no cuanto se ha usado. Para limites de
 * plan, cuotas de API, almacenamiento.
 */
@Component({
  selector: "ap-quota",
  imports: [ApDataValue],
  templateUrl: "./ap-quota.html",
  styleUrl: "./ap-quota.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApQuota {
  readonly used = input(0, { transform: numberAttribute });
  readonly total = input(100, { transform: numberAttribute });
  readonly label = input<string>();
  readonly unit = input<string>();
  readonly cells = input(20, { transform: numberAttribute });

  protected readonly pct = computed(() =>
    this.total() ? Math.max(0, Math.min(100, (this.used() / this.total()) * 100)) : 0,
  );
  protected readonly onCount = computed(() => Math.round((this.pct() / 100) * this.cells()));
  protected readonly tone = computed(() =>
    this.pct() >= 90 ? "var(--ap-error)" : this.pct() >= 75 ? "var(--ap-warn)" : "var(--ap-gray-600)",
  );
  protected readonly cellRange = computed(() => Array.from({ length: this.cells() }));
  protected readonly unitSuffix = computed(() => `/ ${this.total()}${this.unit() ? ` ${this.unit()}` : ""}`);

  protected cellColor(index: number): string {
    return index < this.onCount() ? this.tone() : "var(--ap-gray-100)";
  }
}
