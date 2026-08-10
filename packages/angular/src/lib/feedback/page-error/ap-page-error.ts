import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { ApButton } from "../../core/button/ap-button";
import { ApDataValue } from "../../data/data-value/ap-data-value";

/** Codigo de pagina de error. Los cuatro literales tienen copia propia; cualquier otra cadena
 *  cae sin copia por defecto (title/detail quedan vacios salvo que el consumidor los pase). */
export type PageErrorCode = "404" | "403" | "500" | "503" | string;

interface PageErrorCopy {
  title: string;
  detail: string;
}

const COPY: Partial<Record<string, PageErrorCopy>> = {
  "404": {
    title: "Esta ruta no existe",
    detail:
      "Comprueba la referencia o vuelve al listado. Si has llegado desde un enlace guardado, el recurso puede haberse retirado.",
  },
  "403": {
    title: "No tienes acceso a este recurso",
    detail: "Tu rol no incluye esta region. Pide acceso a la persona responsable del servicio.",
  },
  "500": {
    title: "Algo ha fallado en el servidor",
    detail:
      "El fallo esta registrado con el identificador de abajo. Si persiste, adjuntalo al abrir la incidencia.",
  },
  "503": {
    title: "Servicio en mantenimiento",
    detail: "Ventana programada de mantenimiento. La consola vuelve a estar disponible al terminar.",
  },
};

/**
 * Pagina de error completa (404, 403, 500, 503). Va dentro de CenteredPage. Copia por defecto
 * en espanol: sin disculpas, sin humor, con salida.
 *
 * El codigo es el dato mas grande de la pantalla (48px, MONO 1); en 500 se pinta en rojo.
 *
 * "Siempre hay una salida": si el consumidor no proyecta nada en `[apActions]`, el bloque de
 * acciones cae al boton primario "Volver al listado", exactamente como el
 * `actions || <Button variant="primary">` del React original. Se resuelve con el contenido por
 * defecto de `<ng-content>` (soportado desde Angular 18), sin inventar ninguna prop.
 */
@Component({
  selector: "ap-page-error",
  imports: [ApButton, ApDataValue],
  templateUrl: "./ap-page-error.html",
  styleUrl: "./ap-page-error.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.title]": "null",
  },
})
export class ApPageError {
  readonly code = input<PageErrorCode>("404");
  readonly title = input<string>();
  readonly detail = input<string>();
  /** identificador tecnico del fallo, copiable por el usuario */
  readonly requestId = input<string>();
  /** fin previsto de la ventana, solo en 503 */
  readonly eta = input<string>();

  private readonly copy = computed(() => COPY[this.code()]);
  // `||` y no `??`: el original era `title||c.title`, asi que una cadena vacia tambien cae a la
  // copia por defecto.
  protected readonly resolvedTitle = computed(() => this.title() || this.copy()?.title);
  protected readonly resolvedDetail = computed(() => this.detail() || this.copy()?.detail);
}
