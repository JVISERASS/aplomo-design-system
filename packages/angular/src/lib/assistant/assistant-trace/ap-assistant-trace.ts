import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  booleanAttribute,
  computed,
  input,
  signal,
} from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";
import { ApDataValue } from "../../data/data-value/ap-data-value";

export interface AssistantTraceStep {
  label: string;
  ms?: number;
  status?: "ok" | "running" | "error";
}

/**
 * Traza de trabajo del asistente: que ha consultado y cuanto ha tardado. Cada paso es dato
 * (consulta y duracion en MONO 1). Plegable; sustituye a cualquier animacion de "pensando":
 * el movimiento explica el trabajo, no lo decora. Sin esto, el asistente no es auditable.
 */
@Component({
  selector: "ap-assistant-trace",
  imports: [ApIcon, ApDataValue],
  templateUrl: "./ap-assistant-trace.html",
  styleUrl: "./ap-assistant-trace.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAssistantTrace implements OnInit {
  readonly steps = input<AssistantTraceStep[]>([]);
  readonly running = input(false, { transform: booleanAttribute });
  readonly defaultOpen = input(false, { transform: booleanAttribute });

  protected readonly open = signal(false);
  protected readonly done = computed(
    () => this.steps().filter((step) => step.status !== "running").length,
  );

  /**
   * `defaultOpen` solo siembra el estado inicial, igual que el `useState(defaultOpen)` de React:
   * cambiarlo despues no vuelve a plegar la traza. La siembra va en `ngOnInit` y no en el
   * inicializador de campo porque los inputs todavia no estan asignados durante la construccion
   * (leerlos ahi devuelve siempre el valor por defecto del `input()`, nunca el que ata el
   * consumidor), y `ngOnInit` corre despues de fijar los inputs y antes del primer render.
   */
  ngOnInit(): void {
    this.open.set(this.defaultOpen());
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }
}
