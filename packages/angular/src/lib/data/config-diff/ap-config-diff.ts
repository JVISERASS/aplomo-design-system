import { ChangeDetectionStrategy, Component, input } from "@angular/core";

export interface ConfigDiffChange {
  key: string;
  from: string;
  to: string;
}

/**
 * Diff de configuracion: clave, valor anterior tachado, valor nuevo. Todo dato, todo MONO 1.
 * Antes / despues de un cambio de configuracion auditado. Tintes palidos, nunca rellenos
 * saturados.
 */
@Component({
  selector: "ap-config-diff",
  templateUrl: "./ap-config-diff.html",
  styleUrl: "./ap-config-diff.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApConfigDiff {
  readonly changes = input.required<ConfigDiffChange[]>();
}
