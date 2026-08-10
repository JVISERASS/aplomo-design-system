import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * Prosa larga: 15px / 1.65, maximo 68ch, text-wrap pretty. Unico sitio con medida de lectura.
 *
 * Texto largo dentro de producto (notas de version, descripcion de incidencia, documentacion
 * embebida).
 */
@Component({
  selector: "ap-prose",
  template: "<ng-content />",
  styleUrl: "./ap-prose.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApProse {}
