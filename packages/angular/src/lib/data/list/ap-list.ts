import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from "@angular/core";
import { ApDataValue } from "../data-value/ap-data-value";

export type ListTone = "neutral" | "ok" | "warn" | "error";

export interface ListItem {
  id?: string;
  title: string;
  subtitle?: string;
  ref?: string;
  meta?: string;
  tone?: ListTone;
}

/**
 * Lista de filas con franja de estado de 2px a la izquierda. Para cuando la tabla es
 * excesiva. Usala cuando cada fila tiene titulo + subtitulo, no columnas comparables.
 */
@Component({
  selector: "ap-list",
  imports: [ApDataValue],
  templateUrl: "./ap-list.html",
  styleUrl: "./ap-list.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-selectable]": 'selectable() ? "" : null',
  },
})
export class ApList {
  readonly items = input.required<ListItem[]>();
  /**
   * Ojo: la comparacion es `selectedId() === it.id`, calcada del original React. Si no pasas
   * `selectedId` y los items tampoco traen `id`, `undefined === undefined` marca todas las
   * filas como seleccionadas — igual que en React. Da `id` a los items o pasa `selectedId`.
   */
  readonly selectedId = input<string>();
  /** equivale a pasar `onSelect` en React: las filas se pintan como interactivas (CONVENTIONS 10.1) */
  readonly selectable = input(false, { transform: booleanAttribute });
  readonly select = output<ListItem>();

  /** Stagger de entrada: el original topaba el indice en 7 filas (7*60ms maximo). */
  protected delay(index: number): string {
    return `${Math.min(index, 7) * 60}ms`;
  }
}
