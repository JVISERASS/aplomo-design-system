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
import { cssLength } from "../../shared/css-length";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * Campo numerico con unidad fija. El valor y la unidad son dato: MONO 1 + tabular-nums.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName
 * ademas de con el two-way [(value)].
 */
@Component({
  selector: "ap-unit-input",
  templateUrl: "./ap-unit-input.html",
  styleUrl: "./ap-unit-input.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApUnitInput), multi: true },
  ],
  host: {
    "[attr.data-invalid]": 'error() ? "" : null',
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
    // En React `width` iba en el mismo objeto que `...style`, y el `style` del consumidor lo
    // pisaba: en el host un binding de componente cede ante el `style` de la plantilla, igual.
    "[style.width]": "widthPx()",
  },
})
export class ApUnitInput implements ControlValueAccessor {
  readonly value = model<string>("");
  readonly label = input<string>();
  /** unidad mostrada, p.ej. "ms" */
  readonly unit = input.required<string>();
  readonly hint = input<string>();
  readonly error = input<string>();
  readonly width = input<number | string>(140);
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  protected readonly message = computed(() => this.error() ?? this.hint());

  protected readonly widthPx = computed(() => cssLength(this.width()));

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected handleInput(event: Event): void {
    const next = (event.target as HTMLInputElement).value;
    this.value.set(next);
    this.onChange(next);
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
