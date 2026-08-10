import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  input,
  numberAttribute,
  output,
} from "@angular/core";

/**
 * Capa flotante: 400ms, elevacion 2, radius 8px. Fondo del velo grafito 900 al 32%.
 * Dialogo de confirmacion. El unico sitio donde el rojo puede ir relleno es su boton
 * destructivo confirmado.
 */
@Component({
  selector: "ap-dialog",
  templateUrl: "./ap-dialog.html",
  styleUrl: "./ap-dialog.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: "presentation",
    "[attr.data-open]": 'open() ? "" : null',
    "[attr.title]": "null",
    "(click)": "close.emit()",
  },
})
export class ApDialog {
  readonly open = input(false, { transform: booleanAttribute });
  readonly title = input<string>();
  readonly description = input<string>();
  readonly width = input(440, { transform: numberAttribute });
  readonly close = output<void>();
}
