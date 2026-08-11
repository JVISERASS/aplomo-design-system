import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  booleanAttribute,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { ApIcon } from "../../core/icon/ap-icon";
import { ApDataValue } from "../../data/data-value/ap-data-value";

/** Archivo ya aceptado: el tamano llega formateado por quien lo pinta ("48 kB"). */
export interface FileDropItem {
  name: string;
  size?: string;
}

/**
 * Zona de subida: borde discontinuo de 1px, sin iconos grandes ni ilustracion.
 * Subida de archivos (importar servicios, certificados). El tamano de cada archivo es
 * dato: MONO 1.
 *
 * Los tres eventos de arrastre viven en el <button> de la plantilla, no en el host: la zona
 * que reacciona al arrastre es exactamente la que se pinta con el borde discontinuo, y el
 * `hint` y la lista de archivos quedan fuera de ella, igual que en la version React.
 *
 * `over` no es un hover disfrazado: es el estado real del arrastre, que ninguna pseudo-clase
 * expresa, asi que se queda como signal (CONVENTIONS 6). El `<input type="file">` esta
 * oculto y se dispara por codigo desde el click de la zona.
 */
@Component({
  selector: "ap-file-drop",
  imports: [ApIcon, ApDataValue],
  templateUrl: "./ap-file-drop.html",
  styleUrl: "./ap-file-drop.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApFileDrop {
  readonly label = input("Arrastra un archivo o pulsa para elegir");
  readonly hint = input<string>();
  /** filtro del dialogo nativo, tal cual lo entiende el atributo: ".csv", "text/csv" */
  readonly accept = input<string>();
  /** lista ya aceptada que pinta el componente; no es lo que emite `filesSelected` */
  readonly files = input<FileDropItem[]>([]);

  /**
   * El `onFiles` de React. No puede llamarse `files`: ese nombre ya lo ocupa el input de la
   * lista pintada. Tampoco `filesChange`, que insinuaria un `[(files)]` de dos vias que aqui
   * seria mentira: entran `FileDropItem[]` ya formateados y sale `File[]` del navegador.
   */
  readonly filesSelected = output<File[]>();

  /** equivale a pasar `onRemove` en React: sin esto no hay boton de quitar (ver CONVENTIONS 10.1) */
  readonly showRemove = input(false, { transform: booleanAttribute });
  readonly remove = output<FileDropItem>();

  /** Hay un arrastre encima de la zona. Estado real, no hover: ver la nota de la clase. */
  protected readonly over = signal(false);

  private readonly picker = viewChild.required<ElementRef<HTMLInputElement>>("picker");

  /**
   * Abre el dialogo nativo. El input esta siempre en la plantilla, nunca dentro de un bloque
   * condicional, asi que el viewChild puede ser `required` sin riesgo.
   */
  protected openPicker(): void {
    this.picker().nativeElement.click();
  }

  /** El preventDefault no es decorativo: sin el, el navegador no admite la soltada. */
  protected handleDragOver(event: DragEvent): void {
    event.preventDefault();
    this.over.set(true);
  }

  protected handleDrop(event: DragEvent): void {
    event.preventDefault();
    this.over.set(false);
    this.emitFiles(event.dataTransfer?.files ?? null);
  }

  protected handlePick(event: Event): void {
    this.emitFiles((event.target as HTMLInputElement).files);
  }

  /** Calcado del `take` de React: emite siempre, aunque la soltada no traiga ningun archivo. */
  private emitFiles(list: FileList | null): void {
    this.filesSelected.emit(list ? Array.from(list) : []);
  }
}
