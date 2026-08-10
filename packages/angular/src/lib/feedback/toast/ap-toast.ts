import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";

export type ToastItem = { id: string; message: string; action?: string };

/**
 * Confirmacion breve y reversible ("Deshacer"). Para operaciones que tardan mas de 2s usa
 * ApOperationLog en su lugar: este componente desaparece solo.
 */
@Component({
  selector: "ap-toast",
  imports: [ApIcon],
  templateUrl: "./ap-toast.html",
  styleUrl: "./ap-toast.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApToast {
  readonly toasts = input.required<ToastItem[]>();
  readonly dismiss = output<string>();
  readonly action = output<ToastItem>();
}
