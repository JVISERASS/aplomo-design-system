import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { cssLength } from "../../shared/css-length";

/**
 * Esqueleto de carga: barra grafito sin brillo ni animacion decorativa. El movimiento lo
 * hace el cuajado del dato (ver ApDataValue), no este componente. Para bloques de prosa;
 * para datos, prefiere `loading` en ApDataValue.
 */
@Component({
  selector: "ap-skeleton",
  template: "",
  styleUrl: "./ap-skeleton.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[style.width]": "widthPx()",
    "[style.height]": "heightPx()",
  },
})
export class ApSkeleton {
  readonly width = input<number | string>(64);
  readonly height = input<number | string>(12);

  protected readonly widthPx = computed(() => cssLength(this.width()));
  protected readonly heightPx = computed(() => cssLength(this.height()));
}
