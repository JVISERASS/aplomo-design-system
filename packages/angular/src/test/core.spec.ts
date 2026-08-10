import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ApButton } from "../lib/core/button/ap-button";
import { ApIcon } from "../lib/core/icon/ap-icon";

@Component({
  imports: [ApButton],
  template: `<button apButton variant="primary">Acción</button>`,
})
class ButtonHost {}

@Component({
  imports: [ApIcon],
  template: `<ap-icon name="search" />`,
})
class IconHost {}

describe("core", () => {
  it("ApButton monta", async () => {
    const fixture = TestBed.createComponent(ButtonHost);
    fixture.detectChanges();
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector("button");
    expect(button).toBeTruthy();
    expect(button.getAttribute("data-variant")).toBe("primary");
    expect(button.getAttribute("type")).toBe("button");
  });

  it("ApIcon monta sin lucide cargado", async () => {
    const fixture = TestBed.createComponent(IconHost);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector("ap-icon")).toBeTruthy();
  });
});
