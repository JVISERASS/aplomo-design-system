import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ApInput } from "../lib/forms/input/ap-input";

@Component({
  imports: [ApInput],
  template: `<ap-input label="Referencia" [(value)]="value" />`,
})
class InputHost {
  readonly value = signal("svc-01");
}

@Component({
  imports: [ApInput, ReactiveFormsModule],
  template: `<ap-input [formControl]="control" />`,
})
class ReactiveHost {
  readonly control = new FormControl("inicial");
}

describe("forms", () => {
  it("ApInput monta y refleja el valor", async () => {
    const fixture = TestBed.createComponent(InputHost);
    fixture.detectChanges();
    await fixture.whenStable();
    const input = fixture.nativeElement.querySelector("input") as HTMLInputElement;
    expect(input.value).toBe("svc-01");
  });

  it("ApInput funciona como ControlValueAccessor", async () => {
    const fixture = TestBed.createComponent(ReactiveHost);
    fixture.detectChanges();
    await fixture.whenStable();
    const input = fixture.nativeElement.querySelector("input") as HTMLInputElement;
    expect(input.value).toBe("inicial");

    input.value = "editado";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.control.value).toBe("editado");

    fixture.componentInstance.control.disable();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(input.disabled).toBe(true);
  });
});
