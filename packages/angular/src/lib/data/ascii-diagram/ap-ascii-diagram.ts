import { ChangeDetectionStrategy, Component, input } from "@angular/core";

export type AsciiDiagramTone = "default" | "muted";

/**
 * Diagrama en texto: topologias, flujos, cronologias. MONO 1 puro, grafito, sin color.
 * Es la unica forma de "ilustracion" que admite el sistema: sigue siendo dato.
 *
 * Unico recurso "grafico" del sistema: se lee como dato, no como adorno. Reglas: solo
 * caracteres de caja (─ │ ┌ ┬ └ ▶) y bloques (█ ▓ ░); nunca emoji ni color; el contenido va
 * alineado a la rejilla de caracteres.
 *
 * OJO al proyectar el diagrama: Angular compila las plantillas con `preserveWhitespaces: false`,
 * y el colapso de espacios ocurre en la plantilla del CONSUMIDOR, no aqui (solo `pre`,
 * `textarea`, `template`, `script` y `style` quedan exentos, y `<ap-ascii-diagram>` no es
 * ninguno). Sin marcarlo, la sangria del ASCII se pierde. El consumidor debe escribir:
 *
 * ```html
 * <ap-ascii-diagram label="Topologia" ngPreserveWhitespaces>┌──┐
 * │  │
 * └──┘</ap-ascii-diagram>
 * ```
 */
@Component({
  selector: "ap-ascii-diagram",
  templateUrl: "./ap-ascii-diagram.html",
  styleUrl: "./ap-ascii-diagram.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-tone]": "tone()",
  },
})
export class ApAsciiDiagram {
  /** etiqueta en versalitas encima del bloque */
  readonly label = input<string>();
  /** cualquier longitud CSS: "var(--ap-size-12)", "14px" */
  readonly size = input<string>("var(--ap-size-12)");
  readonly tone = input<AsciiDiagramTone>("default");
}
