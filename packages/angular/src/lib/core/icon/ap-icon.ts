import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
} from "@angular/core";
import { AP_ICONS, type ApIconNode } from "./icon-data";

export type { ApIconNode };

const SVG_NS = "http://www.w3.org/2000/svg";

/** Set activo: arranca con los iconos que incrusta el sistema y crece con registerApIcons. */
const registro = new Map<string, ApIconNode>(Object.entries(AP_ICONS));

/**
 * Registra iconos adicionales, disponibles para cualquier `ap-icon` por su nombre.
 *
 * Aplomo incrusta solo los iconos que usa (unos 50). Para cualquier otro, importalo tu de
 * `lucide` —asi tu bundler solo se lleva los que nombras— y registralo al arrancar la app:
 *
 * ```ts
 * import { Rocket, Wrench } from "lucide";
 * import { registerApIcons } from "@jviserass/aplomo-angular";
 *
 * registerApIcons({ rocket: Rocket, wrench: Wrench });
 * ```
 */
export function registerApIcons(iconos: Record<string, ApIconNode>): void {
  for (const [nombre, nodo] of Object.entries(iconos)) registro.set(nombre, nodo);
}

/** Nombres disponibles ahora mismo. Util para diagnosticar un icono que no aparece. */
export function apIconNames(): string[] {
  return [...registro.keys()].sort();
}

/**
 * Icono del sistema. Los trazos son de [Lucide](https://lucide.dev) (ISC), incrustados en el
 * paquete: no hay peticion de red ni dependencia de un script externo.
 *
 * Un nombre no registrado deja un hueco vacio del tamano pedido, en vez de romper el layout.
 */
@Component({
  selector: "ap-icon",
  template: "",
  styleUrl: "./ap-icon.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "aria-hidden": "true",
    "[style.width.px]": "size()",
    "[style.height.px]": "size()",
  },
})
export class ApIcon {
  readonly name = input.required<string>();
  readonly size = input(16, { transform: numberAttribute });
  readonly strokeWidth = input(1.5, { transform: numberAttribute });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly nodo = computed(() => registro.get(this.name()));

  constructor() {
    effect(() => {
      const nodo = this.nodo();
      const size = this.size();
      const strokeWidth = this.strokeWidth();
      const el = this.host.nativeElement;

      // El host no tiene plantilla: Angular no gestiona ningun nodo aqui, asi que escribirlo
      // a mano no puede colisionar con su reconciliacion.
      el.textContent = "";
      if (!nodo || typeof document === "undefined") return;

      const svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("xmlns", SVG_NS);
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("width", String(size));
      svg.setAttribute("height", String(size));
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", String(strokeWidth));
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.style.display = "block";

      for (const [tag, attrs] of nodo) {
        const hijo = document.createElementNS(SVG_NS, tag);
        for (const [k, v] of Object.entries(attrs)) hijo.setAttribute(k, String(v));
        svg.appendChild(hijo);
      }

      el.appendChild(svg);
    });
  }
}
