import { ChangeDetectionStrategy, Component, booleanAttribute, input } from "@angular/core";

/**
 * Panel/tarjeta: fondo blanco, borde de 1px, radius 8px. Sin sombra: el borde hace el trabajo.
 *
 * Contenedor de contenido: borde 1px, radius 8px, cero sombra.
 */
@Component({
  selector: "ap-panel",
  templateUrl: "./ap-panel.html",
  styleUrl: "./ap-panel.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // `title` es atributo global: sin esto el navegador pinta su tooltip nativo sobre todo el
    // panel. React lo sacaba del ...rest y nunca llegaba al DOM (ver CONVENTIONS 10.2).
    "[attr.title]": "null",
    // El original pintaba la cabecera con `(title||actions)`. La rama `title` se resuelve aqui;
    // la de `actions`, en el CSS, porque las acciones son contenido proyectado.
    "[attr.data-titled]": 'title() ? "" : null',
  },
})
export class ApPanel {
  readonly title = input<string>();
  /** anade 16px de relleno interior (no lo uses si dentro va una tabla) */
  readonly padded = input(false, { transform: booleanAttribute });
}
