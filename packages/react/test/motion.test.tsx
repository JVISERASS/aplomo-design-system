import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { SharedValue, Stagger } from "../src";

afterEach(() => cleanup());

describe("motion", () => {
  it("SharedValue monta", () => {
    const { container } = render(<SharedValue sharedKey="test" />);
    expect(container).toBeTruthy();
  });

  it("Stagger monta", () => {
    const { container } = render(<Stagger>Contenido</Stagger>);
    expect(container).toBeTruthy();
  });
});
