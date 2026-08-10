import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  booleanAttribute,
  input,
} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { ApBadge, type BadgeTone } from "../../core/badge/ap-badge";
import { ApDataValue } from "../data-value/ap-data-value";

export type AuditTimelineTone = BadgeTone;

export interface AuditTimelineEntry {
  id?: string;
  at: string;
  actor?: string;
  title: string;
  note?: string;
  tag?: string;
  tone?: AuditTimelineTone;
  /**
   * Contenido extra bajo la entrada (p.ej. un ConfigDiff), equivalente al `children` de la
   * entrada React. El consumidor lo provee como una `<ng-template let-entry>` de la que obtiene
   * un `TemplateRef` (por ejemplo con `@ViewChild`), porque un `input()` no puede recibir JSX.
   * Mismo patron que `AccordionItem.children` en `ap-accordion`: es la convencion del port para
   * un `ReactNode` que viaja dentro de un array de datos, donde `<ng-content>` no alcanza.
   */
  children?: TemplateRef<{ $implicit: AuditTimelineEntry }>;
}

/**
 * Cronologia de auditoria: quien, cuando, que. El eje es un borde de 1px, no una linea
 * decorativa.
 *
 * Auditoria de un servicio, despliegue o credencial. Admite un ConfigDiff (u otro contenido)
 * como `children` de la entrada.
 */
@Component({
  selector: "ap-audit-timeline",
  imports: [ApBadge, ApDataValue, NgTemplateOutlet],
  templateUrl: "./ap-audit-timeline.html",
  styleUrl: "./ap-audit-timeline.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAuditTimeline {
  readonly entries = input<AuditTimelineEntry[]>([]);
  readonly loading = input(false, { transform: booleanAttribute });
}
