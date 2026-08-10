import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  input,
  numberAttribute,
} from "@angular/core";

/** Forma minima del UMD de Lucide que consume el componente. */
interface LucideGlobal {
  icons?: Record<string, unknown>;
  createElement?: (node: unknown) => SVGElement;
}

const pascal = (name: string): string =>
  String(name)
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

/**
 * Envoltorio del set Lucide (cargado por CDN en la pagina).
 *
 * El SVG se inyecta directamente en el host, cuya plantilla esta vacia: Angular no tiene
 * ningun nodo propio ahi que reconciliar, asi que ningun cambio de estado puede provocar
 * un removeChild sobre el nodo que inyecto lucide.
 *
 * Si lucide no esta cargado, reintenta 20 veces cada 100ms y luego degrada a un hueco
 * vacio en vez de romper.
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

  constructor() {
    effect((onCleanup) => {
      const name = this.name();
      const size = this.size();
      const strokeWidth = this.strokeWidth();
      const el = this.host.nativeElement;

      if (typeof window === "undefined") return;

      let alive = true;
      let tries = 0;
      let timer: ReturnType<typeof setTimeout> | undefined;

      const paint = (): void => {
        if (!alive) return;
        const lucide = (window as unknown as { lucide?: LucideGlobal }).lucide;
        if (!lucide?.icons || !lucide.createElement) {
          if (tries++ < 20) timer = setTimeout(paint, 100);
          return;
        }
        const node = lucide.icons[pascal(name)];
        el.textContent = "";
        if (!node) return;
        const svg = lucide.createElement(node);
        svg.setAttribute("width", String(size));
        svg.setAttribute("height", String(size));
        svg.setAttribute("stroke-width", String(strokeWidth));
        svg.style.display = "block";
        el.appendChild(svg);
      };

      paint();

      onCleanup(() => {
        alive = false;
        if (timer !== undefined) clearTimeout(timer);
        el.textContent = "";
      });
    });
  }
}
