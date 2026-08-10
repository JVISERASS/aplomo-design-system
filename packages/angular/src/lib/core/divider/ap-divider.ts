import { ChangeDetectionStrategy, Component, input } from "@angular/core";

export type DividerDirection = "horizontal" | "vertical";

/**
 * Separador de 1px. El borde es el separador del sistema; esta es su version explicita,
 * con etiqueta opcional.
 */
@Component({
  selector: "ap-divider",
  templateUrl: "./ap-divider.html",
  styleUrl: "./ap-divider.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApDivider {
  readonly label = input<string>();
  readonly direction = input<DividerDirection>("horizontal");
  readonly spacing = input("var(--ap-space-4)");
}
