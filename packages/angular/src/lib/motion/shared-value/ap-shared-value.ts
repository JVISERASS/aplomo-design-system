import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  input,
} from "@angular/core";

/** Lo que se guarda del origen de un viaje: donde estaba, a que tamano, y cuando. */
interface SharedOrigin {
  rect: DOMRect;
  size: number;
  t: number;
}

/**
 * El origen lo captura quien pulsa la fila y lo consume OTRA instancia distinta, montada
 * despues en la cabecera del detalle. Ese estado no pertenece a ningun componente, asi que
 * vive en un Map a nivel de modulo igual que en React, y no en un servicio inyectable:
 * `ApSharedValue.capture()` se llama desde manejadores sueltos (ApDataTable, los ui_kits)
 * que no tienen contexto de inyeccion.
 */
const origins = new Map<string, SharedOrigin>();

/**
 * FIRMA 3 — elemento compartido. El identificador de la fila VIAJA a la cabecera del panel de
 * detalle. Captura el rect de origen con `ApSharedValue.capture(key, el)` al hacer clic en la
 * fila, y monta `<ap-shared-value [sharedKey]="key">` en el destino: hace FLIP (translate +
 * escala tipografica) en 400ms.
 *
 * Solo para el identificador, nunca para bloques enteros.
 */
@Component({
  selector: "ap-shared-value",
  template: "<ng-content />",
  styleUrl: "./ap-shared-value.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApSharedValue {
  /** misma clave en origen (`capture`) y destino */
  readonly sharedKey = input.required<string>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /**
   * Marca el origen del viaje: se llama desde el manejador del clic, ANTES de que el destino
   * exista. Por eso es estatica y no un metodo de instancia ni un servicio: en ese momento no
   * hay ninguna instancia a la que pedirselo.
   *
   * Acepta ademas `undefined` (React solo contemplaba `null`) porque en Angular las referencias
   * a elementos vienen de `viewChild`/`viewChildren`, que devuelven `undefined` mientras no
   * existen. Es un ensanchamiento: toda llamada valida en React lo sigue siendo aqui.
   */
  static capture(key: string, el: HTMLElement | null | undefined): void {
    // Sin elemento no hay rect; sin `getComputedStyle` no hay navegador (el original petaba).
    if (!el || typeof getComputedStyle === "undefined") return;
    const rect = el.getBoundingClientRect();
    origins.set(key, { rect, size: parseFloat(getComputedStyle(el).fontSize), t: Date.now() });
  }

  constructor() {
    effect(() => {
      const key = this.sharedKey();
      const el = this.host.nativeElement;

      // Guarda de servidor. Sin DOM ni Web Animations (SSR, jsdom) el destino aparece
      // directamente en su sitio, que es la degradacion correcta para una animacion.
      if (typeof window === "undefined" || typeof el.animate !== "function") return;

      // Sin origen, o con un origen rancio, no hay viaje: la ventana son 800ms desde el clic.
      const from = origins.get(key);
      if (!from || Date.now() - from.t > 800) return;

      // El destino se mide ya montado y con el texto puesto: el efecto corre despues de que
      // la vista padre haya proyectado el contenido, y getBoundingClientRect fuerza el layout.
      const to = el.getBoundingClientRect();
      if (!to.width) return;

      const dx = from.rect.left - to.left;
      const dy = from.rect.top + from.rect.height / 2 - (to.top + to.height / 2);
      const s = from.size / parseFloat(getComputedStyle(el).fontSize);

      el.animate(
        [
          {
            transform: `translate(${dx}px,${dy}px) scale(${s})`,
            transformOrigin: "left center",
            opacity: 0.6,
          },
          { transform: "none", transformOrigin: "left center", opacity: 1 },
        ],
        { duration: 400, easing: "cubic-bezier(0.2,0,0,1)" },
      );

      // Un origen se consume una sola vez: si el destino se remonta, ya no vuelve a viajar.
      origins.delete(key);
    });
  }
}
