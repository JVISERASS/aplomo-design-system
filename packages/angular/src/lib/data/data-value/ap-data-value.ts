import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  effect,
  input,
  signal,
} from "@angular/core";

export type DataTone = "muted" | "ok" | "warn" | "error";

/**
 * FIRMA 1 — la transicion del eje MONO. Cuando el valor cambia o termina de cargar,
 * font-variation-settings 'MONO' pasa de 0 a 1 en 250ms: el dato "se cuaja" en dato.
 *
 * El doble requestAnimationFrame es deliberado: garantiza que el navegador haya pintado
 * el estado inicial (MONO 0) antes de conmutar, que es lo que hace que la transicion se
 * vea en vez de saltar.
 */
@Component({
  selector: "ap-data-value",
  template: "{{ loading() ? placeholder() : value() }}",
  styleUrl: "./ap-data-value.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class.ap-settled]": "settled()",
    "[attr.data-tone]": "tone() ?? null",
    "[attr.aria-busy]": 'loading() ? "true" : null',
    "[style.font-size]": "size() ?? null",
    "[style.font-weight]": "weight() ?? null",
  },
})
export class ApDataValue {
  readonly value = input<string | number>("");
  readonly loading = input(false, { transform: booleanAttribute });
  /** cualquier longitud CSS: "var(--ap-size-23)", "14px" */
  readonly size = input<string>();
  readonly weight = input<string | number>();
  readonly tone = input<DataTone>();
  readonly placeholder = input("0000");

  protected readonly settled = signal(false);

  constructor() {
    effect((onCleanup) => {
      const loading = this.loading();
      this.value(); // dependencia: cualquier cambio de valor vuelve a cuajar el dato

      if (loading) {
        this.settled.set(false);
        return;
      }

      // Sin rAF (servidor, jsdom) no hay animacion que coreografiar: se cuaja de inmediato.
      if (typeof requestAnimationFrame === "undefined") {
        this.settled.set(true);
        return;
      }

      this.settled.set(false);
      let second = 0;
      const first = requestAnimationFrame(() => {
        second = requestAnimationFrame(() => this.settled.set(true));
      });

      onCleanup(() => {
        cancelAnimationFrame(first);
        cancelAnimationFrame(second);
      });
    });
  }
}
