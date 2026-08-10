import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { cssLength } from "../../shared/css-length";

/**
 * Pagina sin sesion ni shell: acceso, error, mantenimiento. Contenido en una columna estrecha,
 * marca arriba y pie de estado abajo. Fondo hundido, tarjeta con borde de 1px y cero sombra.
 */
@Component({
  selector: "ap-centered-page",
  templateUrl: "./ap-centered-page.html",
  styleUrl: "./ap-centered-page.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCenteredPage {
  /** ancho de la columna central, 380 por defecto */
  readonly width = input<number | string>(380);

  protected readonly widthStyle = computed(() => cssLength(this.width()));
}
