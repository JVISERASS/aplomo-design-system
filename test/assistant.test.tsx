import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { AssistantTrace, Citation, Composer, Message } from "../src";

afterEach(() => cleanup());

describe("assistant", () => {
  it("<AssistantTrace> monta", () => {
    const { container } = render(
      <AssistantTrace steps={[{ label: "test" }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<Citation> monta", () => {
    const { container } = render(<Citation label="test" />);
    expect(container).toBeTruthy();
  });

  it("<Composer> monta", () => {
    const { container } = render(<Composer />);
    expect(container).toBeTruthy();
  });

  it("<Message> monta", () => {
    const { container } = render(<Message>test message</Message>);
    expect(container).toBeTruthy();
  });
});
