import { ChangeDetectionStrategy, Component, input } from "@angular/core";

/** Etiqueta breve grafito 900 al pasar el raton; 150ms, sin retardo teatral. */
@Component({
  selector: "ap-tooltip",
  template: '<ng-content /><span role="tooltip" class="ap-tooltip-bubble">{{ label() }}</span>',
  styleUrl: "./ap-tooltip.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTooltip {
  readonly label = input.required<string>();
}
