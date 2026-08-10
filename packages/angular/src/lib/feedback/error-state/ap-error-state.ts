import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  input,
  output,
} from "@angular/core";
import { ApButton } from "../../core/button/ap-button";
import { ApDataValue } from "../../data/data-value/ap-data-value";

/**
 * Fallo de carga: dice que fallo, con su codigo, y ofrece reintentar. Sin ilustracion, sin
 * disculpas. El codigo del fallo es dato: MONO 1.
 */
@Component({
  selector: "ap-error-state",
  imports: [ApButton, ApDataValue],
  templateUrl: "./ap-error-state.html",
  styleUrl: "./ap-error-state.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.title]": "null",
  },
})
export class ApErrorState {
  readonly title = input("No se han podido cargar los datos");
  /** codigo tecnico, p.ej. "HTTP 503" o "TIMEOUT 30 s" */
  readonly code = input<string>();
  readonly detail = input<string>();
  /** equivale a pasar `onRetry` en React: sin esto no hay boton de reintentar (ver CONVENTIONS 10.1) */
  readonly showRetry = input(false, { transform: booleanAttribute });
  readonly retry = output<void>();
}
