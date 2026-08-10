import { ChangeDetectionStrategy, Component, input, numberAttribute } from "@angular/core";

/**
 * Indeterminado de menos de un segundo (guardar, confirmar). Para cargas de datos usa
 * Skeleton + el cuajado MONO.
 */
@Component({
  selector: "ap-spinner",
  templateUrl: "./ap-spinner.html",
  styleUrl: "./ap-spinner.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: "status",
    "[attr.aria-label]": 'label() || "Cargando"',
  },
})
export class ApSpinner {
  readonly size = input(14, { transform: numberAttribute });
  readonly label = input<string>();
}
