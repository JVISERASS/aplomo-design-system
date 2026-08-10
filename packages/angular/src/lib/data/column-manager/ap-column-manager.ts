import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from "@angular/core";
import { ApCheckbox } from "../../forms/checkbox/ap-checkbox";

export interface ColumnManagerColumn {
  key: string;
  label: string;
  locked?: boolean;
}

export type ColumnManagerAnchor = "left" | "right";

/**
 * Gestor de columnas: capa flotante con la lista de columnas ocultables, anclada al
 * IconButton "Columnas". El contenedor padre necesita `position: relative`.
 */
@Component({
  selector: "ap-column-manager",
  imports: [ApCheckbox],
  templateUrl: "./ap-column-manager.html",
  styleUrl: "./ap-column-manager.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // "hidden" es tambien un atributo global de HTML: sin esto, un `<ap-column-manager hidden>`
    // literal ocultaria el componente entero via la hoja de estilos del user-agent (ver
    // CONVENTIONS 10.2). La visibilidad real la decide `open()` dentro de la plantilla.
    "[attr.hidden]": "null",
    "[attr.data-anchor]": "anchor()",
  },
})
export class ApColumnManager {
  readonly open = input(false, { transform: booleanAttribute });
  readonly columns = input.required<ColumnManagerColumn[]>();
  /** claves ocultas */
  readonly hidden = input<string[]>([]);
  readonly anchor = input<ColumnManagerAnchor>("right");

  readonly close = output<void>();
  readonly toggle = output<string>();
}
