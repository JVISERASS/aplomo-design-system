import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from "@angular/core";

export type SparklineTone = "default" | "ok" | "warn" | "error";

interface SparklineGeometry {
  path: string;
  last: { x: number; y: number } | null;
}

/** Serie compacta en linea. Grafito; el color solo entra si el ultimo punto esta fuera de umbral. */
@Component({
  selector: "ap-sparkline",
  templateUrl: "./ap-sparkline.html",
  styleUrl: "./ap-sparkline.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSparkline {
  readonly data = input<number[]>([]);
  readonly width = input(120, { transform: numberAttribute });
  readonly height = input(28, { transform: numberAttribute });
  readonly tone = input<SparklineTone>("default");
  /** marca el ultimo punto con un cuadrado de 3px */
  readonly showLast = input(true, { transform: booleanAttribute });

  protected readonly color = computed(() => {
    const tone = this.tone();
    return tone === "error"
      ? "var(--ap-error)"
      : tone === "warn"
        ? "var(--ap-warn)"
        : tone === "ok"
          ? "var(--ap-ok)"
          : "var(--ap-gray-500)";
  });

  protected readonly geometry = computed<SparklineGeometry>(() => {
    const data = this.data();
    const n = data.length;
    if (!n) return { path: "", last: null };

    const width = this.width();
    const height = this.height();
    const max = Math.max(...data);
    const min = Math.min(...data);
    const span = max - min || 1;
    const x = (i: number): number => (i / (n - 1 || 1)) * (width - 2) + 1;
    const y = (v: number): number => height - 1 - ((v - min) / span) * (height - 2);

    const path = data.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1)).join(" ");
    const last = { x: x(n - 1) - 1.5, y: y(data[n - 1]) - 1.5 };
    return { path, last };
  });
}
