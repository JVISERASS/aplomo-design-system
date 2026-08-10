import { ChangeDetectionStrategy, Component, computed, input, model } from "@angular/core";
import { ApDataValue } from "../../data/data-value/ap-data-value";

export interface TabItem {
  value: string;
  label: string;
  count?: number;
}

export type TabEntry = string | TabItem;

interface NormalizedTab {
  id: string;
  label: string;
  count?: number;
  selected: boolean;
}

/**
 * Pestanas de seccion. El indicador es grafito, no cobalto: el acento se reserva. Los
 * contadores son datos (MONO 1).
 */
@Component({
  selector: "ap-tabs",
  imports: [ApDataValue],
  templateUrl: "./ap-tabs.html",
  styleUrl: "./ap-tabs.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: "tablist",
  },
})
export class ApTabs {
  readonly tabs = input.required<TabEntry[]>();
  readonly value = model<string>("");

  protected readonly normalizedTabs = computed<NormalizedTab[]>(() => {
    const value = this.value();
    return this.tabs().map((t) => {
      const id = typeof t === "string" ? t : t.value;
      return {
        id,
        label: typeof t === "string" ? t : t.label,
        count: typeof t === "string" ? undefined : t.count,
        selected: value === id,
      };
    });
  });
}
