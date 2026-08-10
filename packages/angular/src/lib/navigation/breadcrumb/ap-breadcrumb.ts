import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";

/** Segmento de Breadcrumb con marca de dato explicita. */
export interface BreadcrumbItem {
  label: string;
  /** el segmento es un identificador (cifra, id) => MONO 1 */
  data?: boolean;
}

export type BreadcrumbEntry = string | BreadcrumbItem;

interface NormalizedBreadcrumbItem {
  label: string;
  data: boolean;
  last: boolean;
}

/**
 * Ruta de navegacion separada por barra. Los segmentos que son identificadores llevan
 * `data: true` (MONO 1).
 */
@Component({
  selector: "ap-breadcrumb",
  templateUrl: "./ap-breadcrumb.html",
  styleUrl: "./ap-breadcrumb.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApBreadcrumb {
  readonly items = input.required<BreadcrumbEntry[]>();

  protected readonly normalizedItems = computed<NormalizedBreadcrumbItem[]>(() => {
    const items = this.items();
    const lastIndex = items.length - 1;
    return items.map((it, i) => ({
      label: typeof it === "string" ? it : it.label,
      data: typeof it !== "string" && !!it.data,
      last: i === lastIndex,
    }));
  });
}
