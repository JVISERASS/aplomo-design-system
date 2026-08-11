import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";

/** Una fila de la paleta. `data: true` pone su rotulo en MONO 1: es un identificador, no prosa. */
export interface CommandPaletteItem {
  id?: string;
  label: string;
  hint?: string;
  icon?: string;
  data?: boolean;
  action?: string;
}

/**
 * Paleta de comandos (⌘K). Navegacion real de una consola: referencia, region o accion.
 *
 * Teclado completo (⌘K, ↑↓, ↵, Esc). Los identificadores de la lista van en MONO 1
 * (`data: true`). El atajo global que la ABRE lo registra la pantalla; el componente solo
 * gestiona ↑↓ / ↵ / Esc mientras esta abierta.
 *
 * Tres decisiones de puerto que conviene conocer:
 *
 * - El React devolvia `null` con `open=false`. El `@if (open())` de la plantilla hace lo mismo,
 *   pero el host —que es el velo— existe siempre, asi que `display: none` sin `data-open` es lo
 *   que impide que una capa `fixed` vacia se coma los clics de la pantalla. A diferencia de
 *   `ap-dialog`, aqui no hay contenido proyectado que preservar, asi que se puede desmontar.
 * - El listener de teclado lo declara el host (`(document:keydown)`), no `window.addEventListener`:
 *   Angular gestiona el alta y la baja con el ciclo de vida del componente, asi que no hay fuga
 *   posible. Como el listener vive mientras vive el componente y no solo mientras esta abierta,
 *   `onKey` sale antes si `!open()`, exactamente como el `if(!open) return` del efecto React.
 * - `index` NO es un estado de hover disfrazado (esos se resuelven en CSS, ver CONVENTIONS 6):
 *   es el cursor del teclado, y el raton lo mueve con `mouseenter` para que ↵ abra siempre la
 *   fila que esta resaltada. Por eso sigue siendo una señal y no una pseudo-clase.
 */
@Component({
  selector: "ap-command-palette",
  imports: [ApIcon],
  templateUrl: "./ap-command-palette.html",
  styleUrl: "./ap-command-palette.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-open]": 'open() ? "" : null',
    // El velo cierra al clic; el panel para la propagacion en la plantilla.
    "(click)": "close.emit()",
    "(document:keydown)": "onKey($event)",
  },
})
export class ApCommandPalette {
  readonly open = input(false, { transform: booleanAttribute });
  readonly items = input.required<CommandPaletteItem[]>();
  readonly placeholder = input("Referencia, region o accion");

  readonly close = output<void>();
  readonly select = output<CommandPaletteItem>();

  protected readonly query = signal("");
  /** cursor del teclado dentro de `hits()` */
  protected readonly index = signal(0);

  /**
   * Filtra por `label` + `hint` y corta a 8 DESPUES de filtrar, en ese orden: el limite es de
   * resultados mostrados, no de items examinados.
   */
  protected readonly hits = computed(() => {
    const needle = this.query().toLowerCase();
    return this.items()
      .filter((item) => `${item.label} ${item.hint ?? ""}`.toLowerCase().includes(needle))
      .slice(0, 8);
  });

  private readonly field = viewChild<ElementRef<HTMLInputElement>>("field");
  private readonly injector = inject(Injector);

  constructor() {
    effect(() => {
      // Unica dependencia: `open`. Cada apertura devuelve la paleta a su estado de partida.
      if (!this.open()) return;
      this.query.set("");
      this.index.set(0);

      // El `setTimeout(0)` del React solo existia para enfocar despues del montaje. Aqui la
      // espera correcta es el siguiente render: para entonces el `@if` ya ha creado el campo, la
      // consulta `field()` lo ve y el host tiene `data-open`, que es la condicion para que
      // `focus()` haga algo (un elemento en `display: none` no es enfocable). `afterNextRender`
      // es ademas la guarda de servidor: en SSR devuelve un no-op y nunca llega a ejecutarse.
      afterNextRender(() => this.field()?.nativeElement.focus(), { injector: this.injector });
    });
  }

  protected onQuery(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.index.set(0);
  }

  protected pick(item: CommandPaletteItem): void {
    this.select.emit(item);
    this.close.emit();
  }

  protected onKey(event: KeyboardEvent): void {
    if (!this.open()) return;

    if (event.key === "Escape") this.close.emit();

    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.index.update((v) => Math.min(v + 1, this.hits().length - 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.index.update((v) => Math.max(v - 1, 0));
    }

    if (event.key === "Enter") {
      // Sin fila bajo el cursor no se hace nada NI se cancela el evento, igual que el original.
      const hit: CommandPaletteItem | undefined = this.hits()[this.index()];
      if (!hit) return;
      event.preventDefault();
      this.pick(hit);
    }
  }
}
