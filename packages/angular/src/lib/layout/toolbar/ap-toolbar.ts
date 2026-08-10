import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * Barra de filtros/acciones de 48px con separador inferior de 1px. Parte del shell: no se
 * anima al entrar.
 *
 * Sin inputs: `left` y `right` eran ReactNode y se proyectan con `[apLeft]` y `[apRight]`.
 * El contenedor derecho colapsa solo (`:empty`) cuando no se usa, igual que en `ap-message`.
 * El `{left||children}` de React no tiene equivalente en `ng-content`: aqui la zona izquierda
 * pinta `[apLeft]` y el contenido por defecto a la vez, asi que se usa uno u otro.
 */
@Component({
  selector: "ap-toolbar",
  templateUrl: "./ap-toolbar.html",
  styleUrl: "./ap-toolbar.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApToolbar {}
