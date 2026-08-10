import { ChangeDetectionStrategy, Component, booleanAttribute, input } from "@angular/core";

export type StackDirection = "row" | "column";

/**
 * Pila vertical u horizontal con gap de la escala de 4px. Sustituye a los margenes suelto a
 * suelto: toda separacion entre hermanos se hace con Stack o Columns, nunca con margin.
 */
@Component({
  selector: "ap-stack",
  template: "<ng-content />",
  styleUrl: "./ap-stack.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-direction]": "direction()",
    "[attr.data-wrap]": 'wrap() ? "" : null',
    "[style.gap]": "gap()",
    "[style.align-items]": "align() ?? null",
    "[style.justify-content]": "justify() ?? null",
  },
})
export class ApStack {
  readonly direction = input<StackDirection>("column");
  readonly gap = input<string>("var(--ap-space-3)");
  /** cualquier valor valido de align-items */
  readonly align = input<string>();
  /** cualquier valor valido de justify-content */
  readonly justify = input<string>();
  readonly wrap = input(false, { transform: booleanAttribute });
}
