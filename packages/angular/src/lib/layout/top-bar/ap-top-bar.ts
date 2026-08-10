import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { ApAvatar } from "../../core/avatar/ap-avatar";
import { ApDataValue } from "../../data/data-value/ap-data-value";

/** identidad mostrada a la derecha de la barra */
export interface TopBarUser {
  name: string;
  meta?: string;
}

/**
 * Barra superior de 48px: marca a la izquierda, contexto en el centro, identidad a la
 * derecha.
 */
@Component({
  selector: "ap-top-bar",
  imports: [ApAvatar, ApDataValue],
  templateUrl: "./ap-top-bar.html",
  styleUrl: "./ap-top-bar.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApTopBar {
  readonly user = input<TopBarUser>();
}
