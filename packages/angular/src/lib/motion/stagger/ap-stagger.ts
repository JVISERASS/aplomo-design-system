import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  inject,
  input,
  numberAttribute,
} from "@angular/core";

/**
 * FIRMA 2 — entrada coreografiada, una sola vez. La estructura no se anima; solo el contenido
 * entra en cascada: opacidad 0->1, translateY 8px->0, 60ms de desfase, maximo 8 escalonados.
 *
 * Envuelve el CONTENIDO de una vista al cargarla (nunca el shell ni las cabeceras). Escalona
 * hasta 8 hermanos y suelta el resto de golpe. No lo uses en hover, ni en cada cambio de
 * estado, ni en el shell.
 *
 * ```html
 * <ap-stagger style="display: grid; gap: var(--ap-space-4)">
 *   <ap-metric-tile label="Latencia p95" value="128" unit="ms" />
 *   <ap-list [items]="rows" />
 *   <p>Ultima sincronizacion hace 4 min.</p>
 * </ap-stagger>
 * ```
 *
 * Tres desviaciones respecto al original, todas forzadas por el modelo de proyeccion de
 * Angular (no hay equivalente de `React.Children.toArray`: los hijos son nodos del DOM que
 * pertenecen a la plantilla del consumidor, no una lista que este componente pueda mapear):
 *
 * - **Desaparece `as`.** El host `<ap-stagger>` ES el contenedor. El `display`, el `gap` y el
 *   rol semantico los pone el consumidor sobre el host (`style="display:grid"`, `role="list"`),
 *   igual que en React se pasaban por `style` y `...rest`. El host es `display: block`, que es
 *   lo que hacia el `<div>` por defecto de `as`.
 * - **No hay envoltorio por hijo.** React metia cada hijo en un `<div class="ap-rise">`; aqui
 *   la clase y el `--ap-delay` se estampan sobre los propios hijos proyectados. Mismo resultado
 *   con hijos de bloque, que es el caso de uso (filas, paneles, tablas). Con un hijo en linea
 *   (`<span>`) se pierde el translateY —`transform` no aplica a cajas inline— y solo queda el
 *   fundido: envuelvelo tu en un bloque si te hace falta. Los nodos de texto sueltos tampoco se
 *   animan, porque no son elementos.
 * - **Se estampa una sola vez**, tras el primer render, como el original: coreografia la carga
 *   de una vista y nada mas. Los hijos que aparezcan despues (datos que llegan tarde, un `@if`
 *   que se abre) no se animan. Es deliberado; no hay `MutationObserver`.
 */
@Component({
  selector: "ap-stagger",
  template: "<ng-content />",
  styleUrl: "./ap-stagger.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApStagger {
  /** desfase entre hermanos en ms (60 por defecto) */
  readonly step = input(60, { transform: numberAttribute });
  /** maximo de elementos escalonados (8): del octavo en adelante todos comparten el ultimo desfase */
  readonly max = input(8, { transform: numberAttribute });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    // afterNextRender y no effect(): hay que esperar a que el contenido proyectado exista en el
    // DOM, y ademas asi se ejecuta una unica vez. El callback corre despues del primer render,
    // cuando los inputs ya traen el valor del consumidor: no se lee ningun signal input dentro
    // del constructor (CONVENTIONS §9). Fase `write` porque solo escribimos DOM, sin medir.
    afterNextRender({
      write: () => {
        // Guarda de servidor: afterNextRender ya no corre en el servidor, pero cualquier
        // plataforma sin DOM que lo ejecutase se sale aqui en vez de romper.
        if (typeof document === "undefined") return;

        const step = this.step();
        const max = this.max();
        const children = this.host.nativeElement.children;

        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          // `.ap-rise` y su keyframe viven en tokens/base.css y son globales. Por eso se pueden
          // estampar sobre contenido proyectado, al que el CSS encapsulado de este componente
          // no llega.
          child.classList.add("ap-rise");
          // Identico al original: Math.min(i, max - 1) * step. Sin sanear `max`, para que un
          // `max` raro se comporte aqui exactamente como se comportaba en React.
          child.style.setProperty("--ap-delay", `${Math.min(i, max - 1) * step}ms`);
        }
      },
    });
  }
}
