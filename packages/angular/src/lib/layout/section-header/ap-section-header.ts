import { ChangeDetectionStrategy, Component, input } from "@angular/core";

/**
 * Cabecera de seccion dentro de una vista o panel: etiqueta en versalitas, meta y acciones.
 * Encabezado de subseccion: label en versalitas, title de 16px, meta en dato.
 *
 * Subseccion dentro de una vista.
 */
@Component({
  selector: "ap-section-header",
  templateUrl: "./ap-section-header.html",
  styleUrl: "./ap-section-header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // `title` es atributo global: sin esto el navegador pinta su tooltip nativo sobre toda la
    // cabecera. React lo sacaba del ...rest y nunca llegaba al DOM (ver CONVENTIONS 10.2).
    "[attr.title]": "null",
  },
})
export class ApSectionHeader {
  readonly label = input<string>();
  readonly title = input<string>();
  /** meta va en dato: MONO 1 y tabular-nums, pensado para un valor corto ("24 h", "128 filas") */
  readonly meta = input<string>();
}
