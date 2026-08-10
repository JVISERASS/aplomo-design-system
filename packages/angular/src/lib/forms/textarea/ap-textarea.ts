import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  forwardRef,
  input,
  model,
  numberAttribute,
  signal,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * Campo de texto largo (notas de incidencia, motivo de un cambio): prosa, ancho maximo de
 * lectura, nunca datos.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName ademas
 * del two-way [(value)].
 */
@Component({
  selector: "ap-textarea",
  templateUrl: "./ap-textarea.html",
  styleUrl: "./ap-textarea.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApTextarea), multi: true },
  ],
  host: {
    "[attr.data-invalid]": 'error() ? "" : null',
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
  },
})
export class ApTextarea implements ControlValueAccessor {
  readonly value = model<string>("");
  readonly label = input<string>();
  readonly hint = input<string>();
  readonly error = input<string>();
  readonly rows = input(4, { transform: numberAttribute });
  readonly placeholder = input<string>();
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  protected readonly message = computed(() => this.error() ?? this.hint());

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected handleInput(event: Event): void {
    const next = (event.target as HTMLTextAreaElement).value;
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
