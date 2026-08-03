import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import {
  Accordion,
  Dialog,
  EmptyState,
  ErrorState,
  FileDrop,
  FrozenState,
  InlineAlert,
  Menu,
  OperationLog,
  PageError,
  ProgressBar,
  Steps,
  Toast,
  Tooltip,
} from "../src";

afterEach(() => cleanup());

describe("feedback", () => {
  it("<Accordion> monta", () => {
    const { container } = render(
      <Accordion items={[{ title: "Item 1" }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<Dialog> monta", () => {
    const { container } = render(<Dialog />);
    expect(container).toBeTruthy();
  });

  it("<EmptyState> monta", () => {
    const { container } = render(<EmptyState title="Empty" />);
    expect(container).toBeTruthy();
  });

  it("<ErrorState> monta", () => {
    const { container } = render(<ErrorState />);
    expect(container).toBeTruthy();
  });

  it("<FileDrop> monta", () => {
    const { container } = render(<FileDrop />);
    expect(container).toBeTruthy();
  });

  it("<FrozenState> monta", () => {
    const { container } = render(<FrozenState />);
    expect(container).toBeTruthy();
  });

  it("<InlineAlert> monta", () => {
    const { container } = render(<InlineAlert />);
    expect(container).toBeTruthy();
  });

  it("<Menu> monta", () => {
    const { container } = render(<Menu items={[{ label: "Menu Item" }]} />);
    expect(container).toBeTruthy();
  });

  it("<OperationLog> monta", () => {
    const { container } = render(
      <OperationLog operations={[{ id: "1", title: "Operation" }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<PageError> monta", () => {
    const { container } = render(<PageError />);
    expect(container).toBeTruthy();
  });

  it("<ProgressBar> monta", () => {
    const { container } = render(<ProgressBar />);
    expect(container).toBeTruthy();
  });

  it("<Steps> monta", () => {
    const { container } = render(<Steps steps={["Step 1"]} />);
    expect(container).toBeTruthy();
  });

  it("<Toast> monta", () => {
    const { container } = render(
      <Toast toasts={[{ id: "1", message: "Message" }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<Tooltip> monta", () => {
    const { container } = render(<Tooltip label="Tooltip text" />);
    expect(container).toBeTruthy();
  });
});
