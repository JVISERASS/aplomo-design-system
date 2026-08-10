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
import { ApIcon } from "../../core/icon/ap-icon";

/**
 * Campo de texto. `data` conmuta el eje MONO a 1 para identificadores y cifras.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName
 * ademas de con el two-way [(value)].
 */
@Component({
  selector: "ap-input",
  imports: [ApIcon],
  templateUrl: "./ap-input.html",
  styleUrl: "./ap-input.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApInput), multi: true },
  ],
  host: {
    "[attr.data-invalid]": 'error() ? "" : null',
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
  },
})
export class ApInput implements ControlValueAccessor {
  readonly value = model<string>("");
  readonly label = input<string>();
  readonly hint = input<string>();
  readonly error = input<string>();
  /** nombre de icono Lucide, a la izquierda del campo */
  readonly icon = input<string>();
  /** MONO 1 y tabular-nums: para identificadores, versiones y cifras */
  readonly data = input(false, { transform: booleanAttribute });
  readonly placeholder = input<string>();
  readonly type = input<string>("text");
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  protected readonly message = computed(() => this.error() ?? this.hint());

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
