import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { ApDataValue } from "../../data/data-value/ap-data-value";
import { ApIcon } from "../../core/icon/ap-icon";

export type OperationLogStatus = "running" | "ok" | "error";

export interface OperationLogEntry {
  id: string;
  title: string;
  progress?: number;
  detail?: string;
  status?: OperationLogStatus;
}

/**
 * Registro persistente de operaciones largas (drenar, desplegar, exportar): sobrevive a la
 * navegacion, no es un toast que desaparece. Se queda en pantalla hasta que el usuario la
 * descarta.
 */
@Component({
  selector: "ap-operation-log",
  imports: [ApDataValue, ApIcon],
  templateUrl: "./ap-operation-log.html",
  styleUrl: "./ap-operation-log.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.data-empty]": 'operations().length ? null : ""',
  },
})
export class ApOperationLog {
  readonly operations = input.required<OperationLogEntry[]>();
  readonly dismiss = output<string>();
}
