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

export type SelectOption = string | { value: string; label: string };

/**
 * Desplegable nativo con chevron Lucide, mismo alto que el resto de controles (32px).
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName
 * ademas de con el two-way [(value)].
 */
@Component({
  selector: "ap-select",
  imports: [ApIcon],
  templateUrl: "./ap-select.html",
  styleUrl: "./ap-select.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApSelect), multi: true },
  ],
  host: {
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
  },
})
export class ApSelect implements ControlValueAccessor {
  readonly value = model<string>("");
  readonly label = input<string>();
  readonly options = input<SelectOption[]>([]);
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected optionValue(option: SelectOption): string {
    return typeof option === "string" ? option : option.value;
  }

  protected optionLabel(option: SelectOption): string {
    return typeof option === "string" ? option : option.label;
  }

  /**
   * El binding [value] del <select> se aplica antes de que @for cree las <option>, asi que
   * por si solo dejaria seleccionada la primera opcion. Cada <option> fija ademas su propia
   * selectedness, que es lo que React hace por dentro al renderizar un select controlado.
   */
  protected isSelected(option: SelectOption): boolean {
    return this.value() === this.optionValue(option);
  }

  protected handleChange(event: Event): void {
    const next = (event.target as HTMLSelectElement).value;
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
