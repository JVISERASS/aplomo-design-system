import { ChangeDetectionStrategy, Component, computed, input, numberAttribute } from "@angular/core";

/**
 * Bloque de formulario: titulo y explicacion a la izquierda, campos a la derecha.
 * La explicacion vive junto al campo, no en un tooltip.
 *
 * Formularios largos de configuracion o perfil.
 */
@Component({
  selector: "ap-form-section",
  templateUrl: "./ap-form-section.html",
  styleUrl: "./ap-form-section.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // `title` es atributo global: sin esto el navegador pinta su tooltip nativo sobre toda
    // la seccion. React lo sacaba del ...rest y nunca llegaba al DOM (ver CONVENTIONS 10.2).
    "[attr.title]": "null",
  },
})
export class ApFormSection {
  readonly title = input.required<string>();
  readonly description = input<string>();
  /** columnas de la rejilla de campos */
  readonly columns = input(2, { transform: numberAttribute });

  protected readonly gridColumns = computed(() => `repeat(${this.columns()}, minmax(0, 1fr))`);
}
