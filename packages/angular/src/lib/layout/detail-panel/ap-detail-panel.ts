import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input, output } from "@angular/core";
import { ApIconButton } from "../../core/icon-button/ap-icon-button";

/**
 * Capa lateral: entra en 400ms desde la derecha, elevacion 2 (es capa flotante).
 * Aloja el identificador que viaja desde la fila.
 */
@Component({
  selector: "ap-detail-panel",
  imports: [ApIconButton],
  templateUrl: "./ap-detail-panel.html",
  styleUrl: "./ap-detail-panel.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-open]": 'open() ? "" : null',
    // El host es el item flex de la fila de AppShell, o sea el papel que en React hacia el
    // <aside> raiz: el ancho y el margen negativo tienen que ir aqui, no en el <aside> interno,
    // o el panel no reserva su hueco ni lo cede al cerrarse.
    "[style.width]": "width()",
    "[style.margin-right]": "marginRight()",
  },
})
export class ApDetailPanel {
  readonly open = input(false, { transform: booleanAttribute });
  readonly width = input<string>("var(--ap-detail-w)");
  readonly close = output<void>();

  /** cerrado, el panel no ocupa sitio: margen derecho negativo de su propio ancho */
  protected readonly marginRight = computed(() =>
    this.open() ? "0px" : `calc(-1 * ${this.width()})`,
  );
}
