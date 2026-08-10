import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ApDataValue } from "../lib/data/data-value/ap-data-value";

@Component({
  imports: [ApDataValue],
  template: `<ap-data-value [value]="value()" [loading]="loading()" tone="ok" />`,
})
class DataValueHost {
  readonly value = signal("4.18.2");
  readonly loading = signal(false);
}

describe("data", () => {
  it("ApDataValue monta y pinta el valor", async () => {
    const fixture = TestBed.createComponent(DataValueHost);
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector("ap-data-value") as HTMLElement;
    expect(el.textContent?.trim()).toBe("4.18.2");
    expect(el.getAttribute("data-tone")).toBe("ok");
  });

  it("ApDataValue muestra el placeholder mientras carga", async () => {
    const fixture = TestBed.createComponent(DataValueHost);
    fixture.componentInstance.loading.set(true);
    await fixture.whenStable();
    const el = fixture.nativeElement.querySelector("ap-data-value") as HTMLElement;
    expect(el.textContent?.trim()).toBe("0000");
    expect(el.getAttribute("aria-busy")).toBe("true");
  });
});
