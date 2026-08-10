import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";

/**
 * Cita a un recurso real del producto (servicio, despliegue, incidencia): la fuente de una
 * afirmacion del asistente. La referencia es dato; siempre navegable, el clic lleva al recurso.
 *
 * El `onClick` de React no se porta como output: el `<button>` vive dentro del host, asi que su
 * clic nativo burbujea hasta `<ap-citation>` y `(click)="…"` funciona tal cual. Declarar un
 * output llamado `click` haria que Angular atase el listener nativo del host *y* ademas
 * suscribiese el output sobre el mismo elemento, y el consumidor recibiria cada clic dos veces:
 * es exactamente la razon por la que el contrato prohibe llamar `change` a un output.
 */
@Component({
  selector: "ap-citation",
  imports: [ApIcon],
  templateUrl: "./ap-citation.html",
  styleUrl: "./ap-citation.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCitation {
  readonly label = input.required<string>();
  readonly hint = input<string>();
  /** icono Lucide del tipo de recurso */
  readonly icon = input<string>("server");
}
