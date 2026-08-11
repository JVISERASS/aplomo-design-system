import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  booleanAttribute,
  computed,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { ApCheckbox } from "../../forms/checkbox/ap-checkbox";

export type DataTableAlign = "left" | "right" | "center";
export type DataTableTone = "default" | "muted";
export type DataTableSortDir = "asc" | "desc";

/** Estado de orden controlado: lo decide el consumidor, la tabla solo lo pinta. */
export interface DataTableSort {
  key: string;
  dir: DataTableSortDir;
}

/**
 * Fila: `id` obligatorio (es la clave del `@for` y la del elemento compartido) y el resto de
 * campos libres, leidos por `column.key`.
 */
export interface DataTableRow {
  id: string;
  [key: string]: unknown;
}

export interface DataTableColumn {
  key: string;
  label: string;
  /** ancho de rejilla CSS, p.ej. "180px", "minmax(160px,1fr)" */
  width?: string;
  align?: DataTableAlign;
  /** la columna contiene datos => MONO 1 + tabular-nums */
  data?: boolean;
  tone?: DataTableTone;
  /** cabecera pulsable para ordenar */
  sortable?: boolean;
  /** marca la celda cuyo identificador viaja al panel de detalle (firma 3) */
  shared?: boolean;
  /**
   * Texto de la celda. En React devolvia un `ReactNode`; aqui devuelve `string`, porque un
   * `input()` no puede recibir JSX. Para una celda rica (un Badge, un Chip) usa `cellTemplate`.
   */
  render?: (row: DataTableRow) => string;
  /**
   * Celda rica: `<ng-template let-row>…</ng-template>` del consumidor. Gana a `render`.
   * Mismo patron que `AuditTimelineEntry.children`: es la convencion del port para un
   * `ReactNode` que viaja dentro de un array de datos, donde `<ng-content>` no alcanza.
   */
  cellTemplate?: TemplateRef<{ $implicit: DataTableRow }>;
}

/** Lo que emite `selectRow`: la fila y la celda `shared` de esa fila (o null si no la hay). */
export interface DataTableRowSelection {
  row: DataTableRow;
  /** el argumento que espera `SharedValue.capture(id, el)`; tolera null */
  element: HTMLElement | null;
}

/** Lo que emite `rowRef`: `element` es el nodo al montarse y null al desmontarse. */
export interface DataTableRowRef {
  id: string;
  element: HTMLElement | null;
}

/**
 * Equivalente del `ref` de callback que React ponia en la celda `shared`:
 *
 * ```jsx
 * ref={c.shared ? el => { cells.current[r.id] = el; rowRef && rowRef(r.id, el); } : undefined}
 * ```
 *
 * Se aplica a TODAS las celdas y recibe el id de la fila solo cuando la columna lleva
 * `shared: true` (null en el resto), porque una directiva no se puede aplicar de forma
 * condicional sin duplicar el marcado de la celda. Emite una sola vez al montar (con el
 * elemento) y otra al desmontar (con null), igual que el ref de React.
 *
 * Es una pieza interna de `ApDataTable`: se exporta porque el compilador de la libreria exige
 * que toda dependencia de un componente publico sea publica.
 */
@Directive({ selector: "[apDataTableSharedCell]" })
export class ApDataTableSharedCell implements OnInit, OnDestroy {
  /** id de la fila si la columna es `shared`; null en cualquier otra celda */
  readonly apDataTableSharedCell = input.required<string | null>();

  readonly cellRef = output<DataTableRowRef>();

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  ngOnInit(): void {
    const id = this.apDataTableSharedCell();
    if (id !== null) this.cellRef.emit({ id, element: this.element });
  }

  ngOnDestroy(): void {
    const id = this.apDataTableSharedCell();
    if (id !== null) this.cellRef.emit({ id, element: null });
  }
}

/**
 * Tabla densa: filas de 40px, separador de 1px, orden por columna y navegacion con teclado
 * (↑↓ ↵ Esc).
 *
 * Listado denso. Columnas de datos con `data: true`; `sortable: true` en las que se ordenan;
 * `shared: true` en la del identificador que viaja al detalle. Da foco a la tabla para navegar:
 * ↑↓ mueve el cursor (barra grafito), ↵ abre el detalle, Esc lo cierra.
 *
 * Tres desviaciones de la API React, todas forzadas por Angular:
 * - `onSort` se llama `sortColumn`, no `sort`: el input controlado ya ocupa ese nombre.
 * - `rowRef` deja de ser una funcion-prop y pasa a ser un output `{ id, element }`.
 * - `column.render` devuelve `string`; para celdas ricas se anade `column.cellTemplate`.
 */
@Component({
  selector: "ap-data-table",
  imports: [ApCheckbox, NgTemplateOutlet, ApDataTableSharedCell],
  templateUrl: "./ap-data-table.html",
  styleUrl: "./ap-data-table.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: "table",
    "(keydown)": "onKey($event)",
    "[attr.tabindex]": "keyboard() ? 0 : null",
  },
})
export class ApDataTable {
  readonly columns = input<DataTableColumn[]>([]);
  readonly rows = input<DataTableRow[]>([]);
  readonly selectedId = input<string>();
  readonly selectable = input(false, { transform: booleanAttribute });
  /** ids marcados; la casilla de la cabecera se deriva de su longitud */
  readonly checked = input<string[]>([]);
  /** estado de orden controlado */
  readonly sort = input<DataTableSort>();
  /** navegacion con teclado, activada por defecto */
  readonly keyboard = input(true, { transform: booleanAttribute });

  /** `onSelectRow(row, sharedEl)`: un output emite un solo valor, asi que viajan juntos. */
  readonly selectRow = output<DataTableRowSelection>();
  /** id de la fila marcada, o el literal `"all"` desde la casilla de la cabecera */
  readonly check = output<string>();
  /**
   * `onSort`. No puede llamarse `sort` (lo ocupa el input) y tampoco `sortChange`: eso
   * habilitaria un `[(sort)]` que asignaria una clave `string` a un input `DataTableSort`.
   * Emite la clave de la columna pulsada; el consumidor decide asc/desc.
   */
  readonly sortColumn = output<string>();
  /**
   * `rowRef`. En React era una funcion-prop que el ref de la celda `shared` invocaba con
   * `(id, el)`. Aqui es un output con la misma informacion: `element` es el nodo al montar la
   * celda y null al desmontarla. Solo emite para las columnas con `shared: true`.
   */
  readonly rowRef = output<DataTableRowRef>();
  readonly escape = output<void>();

  /** Cursor de teclado. -1 = sin cursor, que es distinto de "fila 0". */
  protected readonly cursor = signal(-1);

  /**
   * Registro de la celda `shared` por fila. Es un Map normal y no una signal a proposito: solo
   * se lee dentro de manejadores de eventos, nunca desde la plantilla, asi que escribirlo
   * mientras Angular monta las filas no invalida ninguna vista.
   */
  private readonly cells = new Map<string, HTMLElement>();

  /** La rejilla, identica en la cabecera y en cada fila. La casilla ocupa 36px fijos. */
  protected readonly grid = computed(
    () =>
      (this.selectable() ? "36px " : "") +
      this.columns()
        .map((c) => c.width || "1fr")
        .join(" "),
  );

  protected readonly allChecked = computed(() => {
    const checked = this.checked();
    return checked.length > 0 && checked.length === this.rows().length;
  });

  protected readonly someChecked = computed(() => {
    const checked = this.checked();
    return checked.length > 0 && checked.length < this.rows().length;
  });

  /**
   * ↑↓ mueven el cursor, ↵ abre la fila bajo el cursor y Esc avisa al consumidor. Desde "sin
   * cursor" (-1), ↓ va a la primera fila y ↑ a la ultima. Sin filas no hace nada, ni siquiera
   * con Esc: es el comportamiento de la version React.
   */
  protected onKey(event: KeyboardEvent): void {
    const rows = this.rows();
    if (!this.keyboard() || !rows.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.cursor.update((v) => Math.min((v < 0 ? -1 : v) + 1, rows.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.cursor.update((v) => Math.max((v < 0 ? rows.length : v) - 1, 0));
    } else if (event.key === "Enter" && this.cursor() >= 0) {
      event.preventDefault();
      const row = rows[this.cursor()];
      if (row) this.emitSelect(row);
    } else if (event.key === "Escape") {
      this.escape.emit();
    }
  }

  protected emitSelect(row: DataTableRow): void {
    this.selectRow.emit({ row, element: this.cells.get(row.id) ?? null });
  }

  /** Alta y baja de la celda `shared`, en el mismo orden que el ref de React. */
  protected handleCellRef(ref: DataTableRowRef): void {
    if (ref.element) this.cells.set(ref.id, ref.element);
    else this.cells.delete(ref.id);
    this.rowRef.emit(ref);
  }

  protected headerClick(column: DataTableColumn): void {
    if (column.sortable) this.sortColumn.emit(column.key);
  }

  protected isSorted(column: DataTableColumn): boolean {
    const sort = this.sort();
    return sort !== undefined && sort.key === column.key;
  }

  /** ▼ solo en la columna activa y descendente; el resto de cabeceras ordenables llevan ▲. */
  protected sortGlyph(column: DataTableColumn): string {
    return this.isSorted(column) && this.sort()?.dir === "desc" ? "▼" : "▲";
  }

  /**
   * Texto de la celda. `null` y `undefined` se pintan como hueco vacio, igual que React con un
   * valor ausente; el resto pasa por String().
   */
  protected cellText(row: DataTableRow, column: DataTableColumn): string {
    if (column.render) return column.render(row);
    const raw = row[column.key];
    return raw === null || raw === undefined ? "" : String(raw);
  }

  /** Stagger de entrada: el original topaba el indice en 7 filas (7*60ms maximo). */
  protected delay(index: number): string {
    return `${Math.min(index, 7) * 60}ms`;
  }
}
