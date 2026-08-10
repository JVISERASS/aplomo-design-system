import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from "@angular/core";

export type BarSeriesTone = "default" | "warn" | "error";

/**
 * Serie temporal en barras con eje inferior de 1px. La ultima barra va en grafito 700:
 * es "ahora".
 */
@Component({
  selector: "ap-bar-series",
  templateUrl: "./ap-bar-series.html",
  styleUrl: "./ap-bar-series.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBarSeries {
  readonly data = input<number[]>([]);
  readonly height = input(64, { transform: numberAttribute });
  readonly gap = input(3, { transform: numberAttribute });
  /** dos o tres marcas de tiempo: ["hace 24 h","ahora"] */
  readonly labels = input<string[]>();
  /** valor del objetivo, se dibuja como linea discontinua */
  readonly threshold = input<number>();
  readonly tone = input<BarSeriesTone>("default");
  /** en carga: barras al 4%, crecen al llegar los datos */
  readonly loading = input(false, { transform: booleanAttribute });

  protected readonly max = computed(() => Math.max(...this.data(), 1));

  protected readonly thresholdBottom = computed(() => {
    const threshold = this.threshold();
    return threshold === undefined ? 0 : (threshold / this.max()) * this.height();
  });

  private readonly toneColor = computed(() => {
    const tone = this.tone();
    return tone === "error" ? "var(--ap-error)" : tone === "warn" ? "var(--ap-warn)" : "var(--ap-gray-200)";
  });

  protected barHeight(value: number): string {
    return this.loading() ? "4%" : `${(value / this.max()) * 100}%`;
  }

  protected barColor(index: number): string {
    return index === this.data().length - 1 ? "var(--ap-gray-700)" : this.toneColor();
  }

  protected barDelay(index: number): number {
    return Math.min(index, 20) * 12;
  }

  protected barTitle(value: number): string {
    return String(value);
  }
}
