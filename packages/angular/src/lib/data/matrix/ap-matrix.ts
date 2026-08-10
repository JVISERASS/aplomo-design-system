import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input } from "@angular/core";
import { ApDataValue } from "../data-value/ap-data-value";

const SHADES: readonly string[] = [
  "var(--ap-gray-50)",
  "var(--ap-gray-100)",
  "var(--ap-gray-200)",
  "var(--ap-gray-400)",
  "var(--ap-gray-600)",
];

/**
 * Matriz de intensidad: escala de grafito en cinco pasos, leyenda obligatoria, sin paleta de
 * colores. Doble entrada — region x franja horaria, servicio x region — con el valor escrito
 * dentro de cada celda.
 */
@Component({
  selector: "ap-matrix",
  imports: [ApDataValue],
  templateUrl: "./ap-matrix.html",
  styleUrl: "./ap-matrix.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApMatrix {
  readonly rows = input<string[]>([]);
  readonly columns = input<string[]>([]);
  /** valores por clave "fila|columna" */
  readonly values = input<Record<string, number>>({});
  readonly legend = input(true, { transform: booleanAttribute });
  readonly unit = input<string>();
  readonly loading = input(false, { transform: booleanAttribute });

  protected readonly shades = SHADES;

  protected readonly max = computed(() => {
    const nums = Object.values(this.values()).filter((v): v is number => typeof v === "number");
    return Math.max(1, ...nums);
  });

  protected readonly gridTemplate = computed(
    () => `120px repeat(${this.columns().length},minmax(28px,1fr))`,
  );

  protected readonly legendMin = computed(() => `0${this.unit() ? ` ${this.unit()}` : ""}`);
  protected readonly legendMax = computed(() => `${this.max()}${this.unit() ? ` ${this.unit()}` : ""}`);

  private cellValue(row: string, column: string): number | undefined {
    return this.values()[`${row}|${column}`];
  }

  protected cellTitle(row: string, column: string): string {
    const v = this.cellValue(row, column);
    return `${row} · ${column}: ${v === undefined ? "—" : v}`;
  }

  protected cellBackground(row: string, column: string): string {
    if (this.loading()) return "var(--ap-gray-50)";
    const v = this.cellValue(row, column);
    if (typeof v !== "number") return "var(--ap-surface)";
    return this.shades[Math.min(4, Math.floor((v / this.max()) * 5))];
  }

  protected cellColor(row: string, column: string): string {
    const v = this.cellValue(row, column);
    return typeof v === "number" && v / this.max() > 0.6 ? "var(--ap-text-inverse)" : "var(--ap-text-secondary)";
  }

  protected cellText(row: string, column: string): string {
    if (this.loading()) return "";
    const v = this.cellValue(row, column);
    return v === undefined ? "" : String(v);
  }
}
