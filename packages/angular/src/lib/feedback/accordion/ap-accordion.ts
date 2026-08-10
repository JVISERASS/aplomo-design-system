import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  input,
  signal,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { ApIcon } from "../../core/icon/ap-icon";

/**
 * Una seccion del acordeon. `children` es la plantilla del panel: equivalente Angular del
 * `ReactNode` que React aceptaba dentro de cada elemento del array `items`.
 */
export interface AccordionItem {
  id?: string;
  title: string;
  meta?: string;
  children?: TemplateRef<unknown>;
}

/**
 * Acordeon de resumen: cabecera de 40px, contenido con borde superior. Sin animacion de altura.
 * Secciones plegables con contador o meta a la derecha (dato: MONO 1).
 */
@Component({
  selector: "ap-accordion",
  imports: [ApIcon, NgTemplateOutlet],
  templateUrl: "./ap-accordion.html",
  styleUrl: "./ap-accordion.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAccordion implements OnInit {
  readonly items = input.required<AccordionItem[]>();
  /** ids abiertos al montar */
  readonly defaultOpen = input<string[]>([]);

  protected readonly openIds = signal<string[]>([]);

  ngOnInit(): void {
    this.openIds.set(this.defaultOpen());
  }

  protected itemId(item: AccordionItem): string {
    return item.id || item.title;
  }

  protected isOpen(item: AccordionItem): boolean {
    return this.openIds().includes(this.itemId(item));
  }

  protected toggle(id: string): void {
    const current = this.openIds();
    this.openIds.set(current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  }
}
