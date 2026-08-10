import { ChangeDetectionStrategy, Component, input } from "@angular/core";

/**
 * Cabecera de vista: antetitulo en versalitas, titulo display en sentence case, meta en datos.
 *
 * Titulo siempre en sentence case, nunca Title Case.
 */
@Component({
  selector: "ap-page-header",
  templateUrl: "./ap-page-header.html",
  styleUrl: "./ap-page-header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // `title` es atributo global: sin esto el navegador pinta su tooltip nativo sobre toda la
    // cabecera. React lo sacaba del ...rest y nunca llegaba al DOM (ver CONVENTIONS 10.2).
    "[attr.title]": "null",
  },
})
export class ApPageHeader {
  readonly eyebrow = input<string>();
  readonly title = input<string>();
}
