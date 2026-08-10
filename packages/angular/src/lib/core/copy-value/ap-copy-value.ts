import { ChangeDetectionStrategy, Component, computed, input, signal } from "@angular/core";
import { ApIcon } from "../icon/ap-icon";

/**
 * Identificador copiable. Todo id, clave o ruta deberia serlo: es la accion mas repetida de
 * una guardia. Un clic copia al portapapeles y confirma con el tic durante 1,2 s.
 */
@Component({
  selector: "ap-copy-value",
  imports: [ApIcon],
  templateUrl: "./ap-copy-value.html",
  styleUrl: "./ap-copy-value.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCopyValue {
  readonly value = input.required<string | number>();
  readonly size = input<string | number>("var(--ap-size-13)");
  readonly weight = input<number>();
  /** texto accesible y tooltip nativo */
  readonly label = input<string>("Copiar");

  protected readonly done = signal(false);

  /** React deja que fontSize numerico se convierta en px automaticamente; aqui se hace explicito. */
  protected readonly fontSize = computed(() => {
    const size = this.size();
    return typeof size === "number" ? `${size}px` : size;
  });

  protected copy(): void {
    const text = String(this.value());
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    this.done.set(true);
    setTimeout(() => this.done.set(false), 1200);
  }
}
