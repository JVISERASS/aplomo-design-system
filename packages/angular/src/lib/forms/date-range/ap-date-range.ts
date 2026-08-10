import { ChangeDetectionStrategy, Component, computed, forwardRef, input, model, signal } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ApIcon } from "../../core/icon/ap-icon";

interface DateRangePreset {
  id: string;
  label: string;
}

const PRESETS: readonly DateRangePreset[] = [
  { id: "1h", label: "1 h" },
  { id: "24h", label: "24 h" },
  { id: "7d", label: "7 d" },
  { id: "30d", label: "30 d" },
];

/**
 * Rango temporal: presets a la izquierda y ventana absoluta a la derecha, siempre visible en MONO 1.
 *
 * Toda vista de metricas lo lleva en su barra de herramientas.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName ademas
 * de con el two-way [(value)].
 */
@Component({
  selector: "ap-date-range",
  imports: [ApIcon],
  templateUrl: "./ap-date-range.html",
  styleUrl: "./ap-date-range.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApDateRange), multi: true },
  ],
})
export class ApDateRange implements ControlValueAccessor {
  protected readonly presets = PRESETS;

  /** "1h" | "24h" | "7d" | "30d" | "custom" */
  readonly value = model<string>("24h");
  /** ventana absoluta a mostrar en el boton personalizado, p.ej. "2026-08-01 → 2026-08-03" */
  readonly absolute = input<string>();

  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabledByForm());

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected select(next: string): void {
    this.value.set(next);
    this.onChange(next);
    this.onTouched();
  }

  writeValue(value: string | null): void {
    this.value.set(value ?? "24h");
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledByForm.set(isDisabled);
  }
}
