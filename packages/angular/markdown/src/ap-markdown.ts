import { isPlatformBrowser } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  ViewEncapsulation,
  booleanAttribute,
  effect,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import { MarkdownComponent } from "ngx-markdown";

/**
 * Cadencia maxima de reparseo mientras la respuesta llega. Cada cambio de `data` obliga a
 * `ngx-markdown` a reparsear, resanear y reescribir el documento ENTERO, asi que sin este techo
 * una respuesta larga reescribe el DOM decenas de veces por segundo y el usuario pierde la
 * seleccion de texto en cada fragmento.
 */
const CADENCIA_STREAMING_MS = 80;

/**
 * Markdown con la tipografia del sistema. Prosa a 15/1.65 y maximo 68ch, como `ap-prose`; el
 * codigo en el eje MONO de Recursive, que es la misma familia y no una monoespaciada ajena.
 *
 * Pensado para la respuesta de un asistente dentro de `ap-message`. Como ese contenido no es de
 * fiar, el saneado va en dos capas y la primera vive en `provideApMarkdown()`, que hay que
 * registrar en la raiz de la aplicacion.
 *
 * Sin resaltado de sintaxis: los bloques son monocromos a proposito, que es lo coherente con una
 * paleta minima y lo que hacen siete de los ocho design systems grandes.
 */
@Component({
  selector: "ap-markdown",
  imports: [MarkdownComponent],
  templateUrl: "./ap-markdown.html",
  styleUrl: "./ap-markdown.css",
  // El HTML lo inyecta ngx-markdown por `innerHTML`, y ese contenido NO recibe los atributos
  // `_ngcontent-*`: una hoja con encapsulacion emulada no lo alcanzaria nunca. Todos los
  // selectores van prefijados por `.ap-markdown`, asi que el alcance real es el mismo.
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "ap-markdown",
    // Permite a la hoja marcar el ultimo bloque mientras la respuesta sigue llegando.
    "[attr.data-streaming]": 'streaming() ? "" : null',
  },
})
export class ApMarkdown {
  /** el markdown a pintar */
  readonly data = input<string>("");
  /** la respuesta sigue llegando: acota la cadencia de reparseo */
  readonly streaming = input(false, { transform: booleanAttribute });
  readonly ready = output<void>();

  private readonly enNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  /** lo que se pinta de verdad: `data()` pasado por el techo de cadencia */
  protected readonly texto = signal("");

  constructor() {
    let ultimoRender = 0;

    effect((onCleanup) => {
      const entrada = this.data();

      // Sin streaming —y siempre en servidor, donde no hay nada que acumular— se pinta tal cual.
      if (!this.streaming() || !this.enNavegador) {
        this.texto.set(entrada);
        return;
      }

      const espera = CADENCIA_STREAMING_MS - (Date.now() - ultimoRender);
      if (espera <= 0) {
        ultimoRender = Date.now();
        this.texto.set(entrada);
        return;
      }

      // `ultimoRender` solo avanza cuando se pinta de verdad, asi que la espera se acorta sola
      // y el ultimo fragmento nunca se queda sin dibujar.
      const temporizador = setTimeout(() => {
        ultimoRender = Date.now();
        this.texto.set(entrada);
      }, espera);
      onCleanup(() => clearTimeout(temporizador));
    });
  }
}
