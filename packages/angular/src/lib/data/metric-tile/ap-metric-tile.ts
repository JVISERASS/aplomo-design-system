import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input } from "@angular/core";
import { ApDataValue, DataTone } from "../data-value/ap-data-value";

export type MetricTileDeltaTone = "default" | DataTone;

/**
 * Cifra de cabecera. Los tiles se separan por borde de 1px, nunca por tarjetas con sombra.
 */
@Component({
  selector: "ap-metric-tile",
  imports: [ApDataValue],
  templateUrl: "./ap-metric-tile.html",
  styleUrl: "./ap-metric-tile.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApMetricTile {
  readonly label = input.required<string>();
  readonly value = input<string | number>();
  readonly unit = input<string>();
  readonly delta = input<string | number>();
  readonly deltaTone = input<MetricTileDeltaTone>("muted");
  readonly loading = input(false, { transform: booleanAttribute });

  /** "default" no es un DataTone valido en ApDataValue: ahi no se pasa tone (color heredado). */
  protected readonly deltaDataTone = computed<DataTone | undefined>(() => {
    // El resultado de una llamada no se estrecha en TypeScript: hay que pasar por un const.
    const tone = this.deltaTone();
    return tone === "default" ? undefined : tone;
  });
}
