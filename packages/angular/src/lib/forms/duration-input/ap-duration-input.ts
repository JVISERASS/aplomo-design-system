import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  forwardRef,
  input,
  model,
  signal,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export type DurationUnit = "s" | "min" | "h" | "d";

const UNITS: readonly DurationUnit[] = ["s", "min", "h", "d"];

/**
 * Duracion: cifra + unidad seleccionable. Sustituye al texto libre "5 min".
 *
 * Ventanas, esperas y tiempos de drenaje.
 *
 * Implementa ControlValueAccessor sobre el par { value, unit } completo: `writeValue` y el
 * `onChange` registrado transportan ambos campos a la vez, igual que el `onChange` de la
 * version React, que siempre emite `{value, unit}` junto aunque solo cambie uno de los dos.
 */
@Component({
  selector: "ap-duration-input",
  templateUrl: "./ap-duration-input.html",
  styleUrl: "./ap-duration-input.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApDurationInput), multi: true },
  ],
  host: {
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
    // En React `width` iba en el mismo objeto que `...style`, y el `style` del consumidor lo
    // pisaba: en el host un binding de componente cede ante el `style` de la plantilla, igual.
    "[style.width]": "widthStyle()",
  },
})
export class ApDurationInput implements ControlValueAccessor {
  readonly label = input<string>();
  readonly value = model<number | string>(0);
  readonly unit = model<DurationUnit>("min");
  readonly hint = input<string>();
  /** React lo reenviaba al <input> interno con {...rest}; aqui hace falta declararlo */
  readonly placeholder = input<string>();
  readonly width = input<number | string>(176);
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly units = UNITS;

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  protected readonly valueText = computed(() => String(this.value()));

  protected readonly widthStyle = computed(() => {
    const width = this.width();
    return typeof width === "number" ? `${width}px` : width;
  });

  private onChange: (next: { value: number | string; unit: DurationUnit }) => void = () => {};
  protected onTouched: () => void = () => {};

  protected handleInput(event: Event): void {
    const next = (event.target as HTMLInputElement).value;
    this.value.set(next);
    this.onChange({ value: next, unit: this.unit() });
  }

  protected selectUnit(unit: DurationUnit): void {
    this.unit.set(unit);
    this.onChange({ value: this.value(), unit });
  }

  writeValue(value: { value: number | string; unit: DurationUnit } | null): void {
    this.value.set(value?.value ?? 0);
    this.unit.set(value?.unit ?? "min");
  }

  registerOnChange(fn: (next: { value: number | string; unit: DurationUnit }) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledByForm.set(isDisabled);
  }
}
