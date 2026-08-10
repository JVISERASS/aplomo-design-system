import { ChangeDetectionStrategy, Component, computed, input, numberAttribute } from "@angular/core";

/**
 * Iniciales en grafito. Sin foto, sin color por usuario: la identidad no es un dato decorativo.
 */
@Component({
  selector: "ap-avatar",
  template: "{{ initials() }}",
  styleUrl: "./ap-avatar.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.title]": "name()",
    "[style.width.px]": "size()",
    "[style.height.px]": "size()",
    "[style.font-size.px]": "fontSize()",
  },
})
export class ApAvatar {
  readonly name = input.required<string>();
  readonly size = input(24, { transform: numberAttribute });

  protected readonly initials = computed(() =>
    String(this.name())
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w.charAt(0).toUpperCase())
      .join(""),
  );

  /**
   * Unico trozo del `font` shorthand de React que depende de size(). El resto
   * (weight, line-height, family) va en el CSS: si el shorthand entero viajara en
   * [style.font], al ser estilo inline ganaria a la hoja del componente y su reset
   * implicito dejaria `font-variation-settings` en `normal`, matando el eje MONO.
   */
  protected readonly fontSize = computed(() => Math.round(this.size() * 0.42));
}
