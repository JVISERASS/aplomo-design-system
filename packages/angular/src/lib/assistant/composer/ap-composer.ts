import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  booleanAttribute,
  computed,
  effect,
  input,
  model,
  output,
  viewChild,
} from "@angular/core";
import { ApButton } from "../../core/button/ap-button";
import { ApIcon } from "../../core/icon/ap-icon";

/**
 * Altura maxima del textarea antes de que empiece a hacer scroll.
 *
 * Vive a proposito en dos sitios, igual que en la version React: aqui la usa el effect que
 * mide, y en el CSS como `max-height: 160px`. El effect decide cuanto crece; el CSS acota
 * el resultado aunque el effect no llegue a correr (servidor, prerender, JS caido).
 */
const MAX_HEIGHT = 160;

/** Entrada del asistente: textarea que crece, atajos visibles y una sola accion primaria. */
@Component({
  selector: "ap-composer",
  imports: [ApButton, ApIcon],
  templateUrl: "./ap-composer.html",
  styleUrl: "./ap-composer.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApComposer {
  readonly value = model<string>("");
  readonly placeholder = input("Pregunta por un servicio, una region o un despliegue");
  readonly disabled = input(false, { transform: booleanAttribute });
  /** hay una respuesta en curso */
  readonly busy = input(false, { transform: booleanAttribute });
  readonly hint = input<string>();
  /** equivale a pasar `onAttach` en React: sin esto no hay boton de adjuntar (ver CONVENTIONS 10.1) */
  readonly showAttach = input(false, { transform: booleanAttribute });

  /** el texto enviado, no el evento */
  readonly send = output<string>();
  readonly attach = output<void>();

  private readonly control = viewChild<ElementRef<HTMLTextAreaElement>>("control");

  /**
   * La unica accion primaria de la pantalla solo esta viva con texto, sin respuesta en curso
   * y sin deshabilitar: `disabled || busy || !value.trim()` de la version React, negado.
   */
  protected readonly canSend = computed(
    () => !this.disabled() && !this.busy() && this.value().trim().length > 0,
  );

  constructor() {
    effect(() => {
      // La query se lee antes de cualquier salida: asi queda como dependencia y el effect
      // vuelve a correr por si mismo en cuanto la vista existe y el textarea aparece.
      const ref = this.control();
      const text = this.value();
      if (!ref) return;

      // Sin DOM (servidor, prerender) no hay scrollHeight que medir: el `max-height` del CSS
      // se queda como unica cota y el textarea sale con su altura de una fila.
      if (typeof window === "undefined") return;

      const el = ref.nativeElement;

      // Los effects de un componente se vacian despues de la plantilla que lo declara pero
      // antes de que se refresque la suya propia, asi que un `value` que llega de fuera
      // (el padre limpiando el composer tras enviar, por ejemplo) todavia no ha aterrizado
      // en el textarea cuando medimos. Se adelanta el valor para medir el contenido real y
      // no el anterior; cuando el binding [value] llegue escribira exactamente lo mismo, y
      // asignar a .value un texto identico no mueve el cursor.
      if (el.value !== text) el.value = text;

      // Encoger antes de medir: scrollHeight nunca baja por si solo de la altura ya fijada.
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, MAX_HEIGHT) + "px";
    });
  }

  protected handleInput(event: Event): void {
    this.value.set((event.target as HTMLTextAreaElement).value);
  }

  /** ↵ envia; ⇧↵ deja el salto de linea al navegador. */
  protected handleKeydown(event: KeyboardEvent): void {
    if (event.key !== "Enter" || event.shiftKey) return;
    // El preventDefault es incondicional, como en React: ↵ nunca mete un salto de linea,
    // ni con el composer ocupado ni con el campo vacio.
    event.preventDefault();
    this.submit();
  }

  protected submit(): void {
    if (!this.canSend()) return;
    this.send.emit(this.value());
  }
}
