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

export type SegmentedControlOption = string | { value: string; label: string };
export type SegmentedControlSize = "sm" | "md";

/**
 * Conmutador de 2-4 opciones cortas. Grafito: el seleccionado es fondo activo, no acento.
 *
 * Implementa ControlValueAccessor, asi que funciona con [(ngModel)] y formControlName
 * ademas de con el two-way [(value)].
 */
@Component({
  selector: "ap-segmented-control",
  templateUrl: "./ap-segmented-control.html",
  styleUrl: "./ap-segmented-control.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ApSegmentedControl),
      multi: true,
    },
  ],
  host: {
    role: "tablist",
    "[attr.data-size]": "size()",
    "[attr.data-data]": 'data() ? "" : null',
  },
})
export class ApSegmentedControl implements ControlValueAccessor {
  readonly options = input.required<SegmentedControlOption[]>();
  readonly value = model<string>("");
  readonly size = input<SegmentedControlSize>("md");
  /** las opciones son dato (rangos, unidades): activa MONO 1 en las etiquetas */
  readonly data = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState): SegmentedControl no expone `disabled`. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabledByForm());

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected optionValue(option: SegmentedControlOption): string {
    return typeof option === "string" ? option : option.value;
  }

  protected optionLabel(option: SegmentedControlOption): string {
    return typeof option === "string" ? option : option.label;
  }

  protected isSelected(option: SegmentedControlOption): boolean {
    return this.value() === this.optionValue(option);
  }

  protected handleSelect(option: SegmentedControlOption): void {
    const next = this.optionValue(option);
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
