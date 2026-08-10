import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Checkbox, DateRange, DurationInput, FormActions, FormSection, Input, OtpInput, Radio, SearchField, SegmentedControl, Select, Switch, Textarea, UnitInput } from "../src";

afterEach(() => cleanup());

describe("forms", () => {
  it("Checkbox monta", () => {
    const { container } = render(<Checkbox />);
    expect(container).toBeTruthy();
  });

  it("DateRange monta", () => {
    const { container } = render(<DateRange />);
    expect(container).toBeTruthy();
  });

  it("DurationInput monta", () => {
    const { container } = render(<DurationInput />);
    expect(container).toBeTruthy();
  });

  it("FormActions monta", () => {
    const { container } = render(<FormActions />);
    expect(container).toBeTruthy();
  });

  it("FormSection monta", () => {
    const { container } = render(<FormSection title="Settings" />);
    expect(container).toBeTruthy();
  });

  it("Input monta", () => {
    const { container } = render(<Input />);
    expect(container).toBeTruthy();
  });

  it("OtpInput monta", () => {
    const { container } = render(<OtpInput />);
    expect(container).toBeTruthy();
  });

  it("Radio monta", () => {
    const { container } = render(<Radio options={["Option 1", "Option 2"]} />);
    expect(container).toBeTruthy();
  });

  it("SearchField monta", () => {
    const { container } = render(<SearchField />);
    expect(container).toBeTruthy();
  });

  it("SegmentedControl monta", () => {
    const { container } = render(<SegmentedControl options={["A", "B"]} />);
    expect(container).toBeTruthy();
  });

  it("Select monta", () => {
    const { container } = render(<Select />);
    expect(container).toBeTruthy();
  });

  it("Switch monta", () => {
    const { container } = render(<Switch />);
    expect(container).toBeTruthy();
  });

  it("Textarea monta", () => {
    const { container } = render(<Textarea />);
    expect(container).toBeTruthy();
  });

  it("UnitInput monta", () => {
    const { container } = render(<UnitInput unit="ms" />);
    expect(container).toBeTruthy();
  });
});
