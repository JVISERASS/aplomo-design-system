import { ChangeDetectionStrategy, Component, input, numberAttribute } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";
import { ApDataValue } from "../../data/data-value/ap-data-value";

export type StepsDirection = "row" | "column";
export type StepItem = string | { label: string; meta?: string };

/**
 * Pasos de un proceso (despliegue canario, alta de servicio), en fila o en columna. El paso
 * activo es grafito 900, no acento; el paso hecho se marca con un tic sobre grafito 900.
 */
@Component({
  selector: "ap-steps",
  imports: [ApIcon, ApDataValue],
  templateUrl: "./ap-steps.html",
  styleUrl: "./ap-steps.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-direction]": "direction()",
  },
})
export class ApSteps {
  readonly steps = input.required<StepItem[]>();
  /** indice del paso en curso */
  readonly current = input(0, { transform: numberAttribute });
  readonly direction = input<StepsDirection>("row");

  protected stepLabel(step: StepItem): string {
    return typeof step === "string" ? step : step.label;
  }

  protected stepMeta(step: StepItem): string | undefined {
    return typeof step === "string" ? undefined : step.meta;
  }
}
