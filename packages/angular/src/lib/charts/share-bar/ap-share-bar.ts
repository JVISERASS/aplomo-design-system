import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
} from "@angular/core";
import { ApDataValue } from "../../data/data-value/ap-data-value";

export type ShareBarTone = "default" | "error";

export interface ShareBarSegment {
  label: string;
  value: number;
  tone?: ShareBarTone;
}

const SHADES: readonly string[] = [
  "var(--ap-gray-700)",
  "var(--ap-gray-500)",
  "var(--ap-gray-300)",
  "var(--ap-gray-200)",
  "var(--ap-gray-100)",
];

/** Reparto de un total en una sola barra segmentada. Escala de grafito, no una paleta. */
@Component({
  selector: "ap-share-bar",
  imports: [ApDataValue],
  templateUrl: "./ap-share-bar.html",
  styleUrl: "./ap-share-bar.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApShareBar {
  readonly segments = input<ShareBarSegment[]>([]);
  readonly height = input(8, { transform: numberAttribute });
  readonly showLegend = input(true, { transform: booleanAttribute });
  readonly loading = input(false, { transform: booleanAttribute });

  protected readonly total = computed(() => this.segments().reduce((sum, s) => sum + s.value, 0) || 1);

  protected segmentWidth(value: number): string {
    return this.loading() ? "0%" : `${(value / this.total()) * 100}%`;
  }

  protected segmentColor(segment: ShareBarSegment, index: number): string {
    return segment.tone === "error" ? "var(--ap-error)" : SHADES[index % SHADES.length];
  }

  protected segmentDelay(index: number): number {
    return index * 60;
  }

  protected segmentPercent(value: number): string {
    return `${Math.round((value / this.total()) * 100)}%`;
  }
}
