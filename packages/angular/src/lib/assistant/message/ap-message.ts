import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { ApAvatar } from "../../core/avatar/ap-avatar";

export type MessageRole = "user" | "assistant";

/**
 * Turno de conversacion con el asistente. La persona va en tarjeta gris; el sistema, a sangre
 * sobre blanco: la respuesta es contenido, no un globo de chat. Prosa a 15/1.65 y maximo 68ch;
 * los datos citados van en ApDataValue. Nada de esquinas de burbuja, colas ni colores por rol.
 */
@Component({
  selector: "ap-message",
  imports: [ApAvatar],
  templateUrl: "./ap-message.html",
  styleUrl: "./ap-message.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-role]": "role()",
    // `role` es el atributo de ARIA: sin esto, <ap-message role="assistant"> declararia un rol
    // inexistente. El valor semantico viaja en data-role (ver CONVENTIONS 10.2).
    "[attr.role]": "null",
  },
})
export class ApMessage {
  readonly role = input<MessageRole>("assistant");
  readonly author = input<string>();
  /** hora del turno, dato: MONO 1 */
  readonly at = input<string>();

  protected readonly mine = computed(() => this.role() === "user");
}
