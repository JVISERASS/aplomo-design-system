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

export type RadioOption = string | { value: string; label: string; hint?: string };
export type RadioDirection = "row" | "column";

interface NormalizedRadioOption {
  value: string;
  label: string;
  hint: string | null;
}

/**
 * Grupo de opciones excluyentes con punto de 8px; el punto marcado es cobalto y cuenta para
 * la regla de dos usos. Cada opcion admite una `hint` opcional. Para 2-3 opciones cortas
 * prefiere SegmentedControl.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName ademas
 * del two-way [(value)].
 */
@Component({
  selector: "ap-radio",
  templateUrl: "./ap-radio.html",
  styleUrl: "./ap-radio.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApRadio), multi: true },
  ],
  host: {
    role: "radiogroup",
    "[attr.data-direction]": "direction()",
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
  },
})
export class ApRadio implements ControlValueAccessor {
  readonly options = input.required<RadioOption[]>();
  readonly value = model<string>("");
  readonly name = input<string>();
  readonly direction = input<RadioDirection>("column");
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  protected readonly normalizedOptions = computed<NormalizedRadioOption[]>(() =>
    this.options().map((option) =>
      typeof option === "string"
        ? { value: option, label: option, hint: null }
        : { value: option.value, label: option.label, hint: option.hint ?? null },
    ),
  );

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected handleChange(value: string): void {
    this.value.set(value);
    this.onChange(value);
  }

  writeValue(value: string | null): void {
    this.value.set(value ?? "");
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
