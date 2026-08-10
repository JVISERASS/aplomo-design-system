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
import { ApInput } from "../input/ap-input";

/**
 * Campo de busqueda de barra de herramientas: Input con icono search y ancho fijo de 260px.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName
 * ademas de con el two-way [(value)].
 */
@Component({
  selector: "ap-search-field",
  imports: [ApInput],
  template:
    '<ap-input icon="search" [value]="value()" (valueChange)="handleChange($event)" [placeholder]="placeholder()" [disabled]="isDisabled()" (focusout)="onTouched()" />',
  styleUrl: "./ap-search-field.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApSearchField), multi: true },
  ],
})
export class ApSearchField implements ControlValueAccessor {
  readonly value = model<string>("");
  readonly placeholder = input("Buscar");
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected handleChange(next: string): void {
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
