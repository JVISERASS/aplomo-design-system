import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  type Signal,
  afterRenderEffect,
  booleanAttribute,
  inject,
  input,
  numberAttribute,
} from "@angular/core";

export type LogStreamLevel = "INFO" | "OK" | "WARN" | "ERROR";

export interface LogStreamLine {
  at: string;
  level?: LogStreamLevel;
  text: string;
}

/**
 * Lo que la fase de lectura le pasa a la de escritura: el scrollTop al que hay que saltar.
 * Es un objeto y no un numero pelado a proposito; el porque esta en `earlyRead`.
 */
interface LogStreamAnchor {
  top: number;
}

/**
 * Visor de log: monoespaciado real, marca de tiempo alineada y nivel en clave. Se ancla al final.
 *
 * Log en vivo de una operacion o un nodo. Monoespaciada del sistema, no Recursive: aqui manda
 * la rejilla.
 *
 * El anclaje vive en un `afterRenderEffect` y no en un `effect`: al llegar lineas nuevas hay
 * que medir el `scrollHeight` DESPUES de que el `@for` las haya pintado, y un `effect` corre
 * antes de que Angular toque el DOM (se anclaria al alto anterior, siempre una tanda por
 * detras). Ademas se parte en dos fases —`earlyRead` mide, `write` escribe— para no mezclar
 * lectura y escritura de layout, que es lo que pide la API.
 *
 * El elemento con scroll es el propio host: en React lo era el `<div>` raiz, que tambien
 * recibia el `style` y el `className` del consumidor. Manteniendolo en el host, un
 * `<ap-log-stream style="height:320px">` sigue redimensionando lo que hace scroll.
 */
@Component({
  selector: "ap-log-stream",
  templateUrl: "./ap-log-stream.html",
  styleUrl: "./ap-log-stream.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[style.height.px]": "height()",
  },
})
export class ApLogStream {
  readonly lines = input<LogStreamLine[]>([]);
  /** alto del visor en px; lo que no cabe hace scroll dentro */
  readonly height = input(200, { transform: numberAttribute });
  /** se mantiene pegado al final al llegar lineas */
  readonly follow = input(true, { transform: booleanAttribute });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    // `afterRenderEffect` no llega a registrarse en el servidor (devuelve una referencia
    // vacia), asi que la guarda de plataforma la pone ya la propia API.
    afterRenderEffect({
      earlyRead: (): LogStreamAnchor | null => {
        const follow = this.follow();
        // Dependencia explicita, no una lectura ociosa: replica el `[lines, follow]` del
        // useEffect de React. Cada tanda de lineas vuelve a anclar.
        this.lines();
        if (!follow) return null;

        // Objeto nuevo en cada pasada, y no el numero pelado: el valor de una fase viaja como
        // signal y `write` solo corre cuando ese signal cambia (Object.is). Con un numero, una
        // tanda que dejara el scrollHeight igual —mismo numero de lineas, otro texto— no
        // volveria a anclar, y el useEffect de React si lo hacia.
        return { top: this.host.nativeElement.scrollHeight };
      },
      write: (anchor: Signal<LogStreamAnchor | null>): void => {
        const next = anchor();
        if (next === null) return;

        this.host.nativeElement.scrollTop = next.top;
      },
    });
  }
}
