import { ChangeDetectionStrategy, Component, input } from "@angular/core";

/**
 * Vacio en tipografia plana: sin ilustracion, sin mascota, sin icono decorativo.
 * Estado vacio: solo texto y, como mucho, una accion secundaria. Prohibidas ilustraciones y
 * mascotas.
 */
@Component({
  selector: "ap-empty-state",
  templateUrl: "./ap-empty-state.html",
  styleUrl: "./ap-empty-state.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.title]": "null",
  },
})
export class ApEmptyState {
  readonly title = input.required<string>();
  readonly description = input<string>();
}
