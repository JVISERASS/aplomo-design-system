import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";

export type InlineAlertTone = "info" | "ok" | "warn" | "error";

const ICON_BY_TONE: Record<InlineAlertTone, string> = {
  ok: "check-circle-2",
  warn: "alert-triangle",
  error: "octagon-alert",
  info: "info",
};

/**
 * Aviso en linea: tinte palido de fondo + color en el texto e icono. Nunca relleno saturado.
 * Sin cierre animado ni rebotes.
 */
@Component({
  selector: "ap-inline-alert",
  imports: [ApIcon],
  templateUrl: "./ap-inline-alert.html",
  styleUrl: "./ap-inline-alert.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-tone]": "tone()",
    "[attr.title]": "null",
  },
})
export class ApInlineAlert {
  readonly tone = input<InlineAlertTone>("info");
  readonly title = input<string>();

  protected readonly icon = computed(() => ICON_BY_TONE[this.tone()]);
}
