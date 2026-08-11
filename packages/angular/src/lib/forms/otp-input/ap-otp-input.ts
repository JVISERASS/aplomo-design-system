import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  booleanAttribute,
  computed,
  forwardRef,
  input,
  model,
  numberAttribute,
  signal,
  viewChildren,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * Codigo de un solo uso: celdas independientes, MONO 1 y tabular-nums. Avanza y retrocede solo.
 *
 * Codigo de verificacion (2FA). Una celda por digito, MONO 1; acepta pegado del codigo completo.
 *
 * Implementa ControlValueAccessor sobre el codigo entero: el valor es el string completo
 * ("482913"), no una celda, asi que funciona con [(ngModel)] y formControlName ademas de con
 * el two-way [(value)].
 */
@Component({
  selector: "ap-otp-input",
  templateUrl: "./ap-otp-input.html",
  styleUrl: "./ap-otp-input.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApOtpInput), multi: true },
  ],
  host: {
    "[attr.data-invalid]": 'error() ? "" : null',
    "[attr.data-disabled]": 'isDisabled() ? "" : null',
  },
})
export class ApOtpInput implements ControlValueAccessor {
  readonly length = input(6, { transform: numberAttribute });
  readonly value = model<string>("");
  readonly label = input<string>();
  readonly error = input<string>();
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Deshabilitado por el formulario (setDisabledState) frente a deshabilitado por input. */
  private readonly disabledByForm = signal(false);
  protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

  /**
   * Las celdas visibles. React partia el valor (`String(value).slice(0,length).split("")`) y
   * leia `chars[i]||""`; aqui se rellena hasta `length` con cadenas vacias, que para `join("")`
   * valen exactamente lo mismo que los huecos del array disperso de React.
   *
   * El `String(...)` se conserva: protege de un `writeValue(482913)` numerico venido de un
   * FormControl, igual que hacia la version React.
   */
  protected readonly cells = computed<readonly string[]>(() => {
    const length = this.length();
    const chars = String(this.value()).slice(0, length).split("");
    return Array.from({ length }, (_, index) => chars[index] || "");
  });

  /** Una referencia por casilla, en orden de DOM: es lo que mueve el foco. */
  private readonly boxes = viewChildren<ElementRef<HTMLInputElement>>("box");

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  protected handleInput(index: number, event: Event): void {
    const typed = (event.target as HTMLInputElement).value;
    const next = this.cells().slice();

    // Se queda con el ULTIMO digito de lo tecleado y descarta todo lo que no sea cifra.
    const digit = typed.replace(/\D/g, "").slice(-1) || "";
    next[index] = digit;

    const joined = next.join("").slice(0, this.length());
    this.value.set(joined);
    this.onChange(joined);
    this.syncBoxes();

    if (digit) this.focusCell(index + 1);
  }

  protected handleKeydown(index: number, event: KeyboardEvent): void {
    const cells = this.cells();
    if (event.key === "Backspace" && !cells[index]) this.focusCell(index - 1);
    if (event.key === "ArrowLeft") this.focusCell(index - 1);
    if (event.key === "ArrowRight") this.focusCell(index + 1);
  }

  /** El pegado no se reparte casilla a casilla: sustituye el codigo entero, como en React. */
  protected handlePaste(event: ClipboardEvent): void {
    const text = (event.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, this.length());
    if (!text) return;

    event.preventDefault();
    this.value.set(text);
    this.onChange(text);
  }

  /** Fuera de rango (index -1 o index === length) no hay casilla y no pasa nada, como en React. */
  private focusCell(index: number): void {
    this.boxes()[index]?.nativeElement.focus();
  }

  /**
   * En React el `<input>` es controlado: cada render reescribe el DOM aunque el valor no haya
   * cambiado, asi que una letra tecleada desaparece sola. El binding `[value]` de Angular solo
   * escribe cuando cambia la expresion, y hay dos casos en los que no cambia y el DOM si:
   *
   * - se teclea algo que no es una cifra: el modelo la rechaza y la casilla seguiria mostrandola;
   * - se teclea en una casilla salteada ("1" + digito en la cuarta): el codigo se compacta y el
   *   digito aparece en otra casilla, dejando la tecleada con su valor viejo.
   *
   * Se reescriben a mano las casillas que difieren. La guarda `!==` evita tocar el punto de
   * insercion de las que ya estan bien.
   */
  private syncBoxes(): void {
    const cells = this.cells();
    this.boxes().forEach((box, index) => {
      const expected = cells[index] || "";
      if (box.nativeElement.value !== expected) box.nativeElement.value = expected;
    });
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
