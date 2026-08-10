import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BarSeries, ShareBar, Sparkline } from "../src";

afterEach(() => cleanup());

describe("charts", () => {
  it("<BarSeries> monta", () => {
    const { container } = render(<BarSeries data={[1, 2, 3]} />);
    expect(container).toBeTruthy();
  });

  it("<ShareBar> monta", () => {
    const { container } = render(
      <ShareBar segments={[{ label: "test", value: 50 }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<Sparkline> monta", () => {
    const { container } = render(<Sparkline data={[1, 2, 3]} />);
    expect(container).toBeTruthy();
  });
});
