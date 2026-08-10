import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  booleanAttribute,
  computed,
  forwardRef,
  input,
  model,
  signal,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * Interruptor de ajuste. Deliberadamente grafito, no cobalto: no compite con la accion
 * principal.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName ademas
 * del two-way [(checked)].
 */
@Component({
  selector: "ap-switch",
  templateUrl: "./ap-switch.html",
  styleUrl: "./ap-switch.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApSwitch), multi: true },
  ],
  host: {
    "[attr.data-checked]": 'checked() ? "" : null',
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
  },
})
export class ApSwitch implements ControlValueAccessor, OnInit {
  /** estado inicial del interruptor no controlado: se siembra una sola vez al arrancar */
  readonly defaultChecked = input(false, { transform: booleanAttribute });
  readonly checked = model(false);
  readonly label = input<string>();
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  private onChange: (value: boolean) => void = () => {};
  protected onTouched: () => void = () => {};

  /**
   * La siembra no puede hacerse en el constructor: ahi el input todavia no tiene el valor del
   * consumidor y `defaultChecked()` devolveria siempre su `false` por defecto. La guarda
   * `!checked()` evita pisar un `[checked]` explicito; el valor del formulario (writeValue)
   * llega despues y manda sobre esta semilla.
   */
  ngOnInit(): void {
    if (this.defaultChecked() && !this.checked()) this.checked.set(true);
  }

  protected handleChange(event: Event): void {
    const next = (event.target as HTMLInputElement).checked;
    this.checked.set(next);
    this.onChange(next);
  }

  writeValue(value: boolean | null): void {
    this.checked.set(value ?? false);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledByForm.set(isDisabled);
  }
}
