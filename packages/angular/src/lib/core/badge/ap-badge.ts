import { ChangeDetectionStrategy, Component, input } from "@angular/core";

/** el contenido es un estado en clave (dato): siempre MONO 1, nunca prosa. */
export type BadgeTone = "neutral" | "ok" | "warn" | "error" | "accent";

/**
 * Estado en clave => es DATO: MONO 1.
 */
@Component({
  selector: "ap-badge",
  template: "<ng-content />",
  styleUrl: "./ap-badge.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-tone]": "tone()",
  },
})
export class ApBadge {
  readonly tone = input<BadgeTone>("neutral");
}
