import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Avatar, Badge, Button, Chip, CopyValue, Divider, Icon, IconButton, Spinner } from "../src";

afterEach(() => cleanup());

describe("core", () => {
  it("Avatar monta", () => {
    const { container } = render(<Avatar name="John Doe" />);
    expect(container).toBeTruthy();
  });

  it("Badge monta", () => {
    const { container } = render(<Badge>Nueva</Badge>);
    expect(container).toBeTruthy();
  });

  it("Button monta", () => {
    const { container } = render(<Button>Click</Button>);
    expect(container).toBeTruthy();
  });

  it("Chip monta", () => {
    const { container } = render(<Chip>Filtro</Chip>);
    expect(container).toBeTruthy();
  });

  it("CopyValue monta", () => {
    const { container } = render(<CopyValue value="abc123" />);
    expect(container).toBeTruthy();
  });

  it("Divider monta", () => {
    const { container } = render(<Divider />);
    expect(container).toBeTruthy();
  });

  it("Icon monta", () => {
    const { container } = render(<Icon name="search" />);
    expect(container).toBeTruthy();
  });

  it("IconButton monta", () => {
    const { container } = render(<IconButton icon="search" label="Buscar" />);
    expect(container).toBeTruthy();
  });

  it("Spinner monta", () => {
    const { container } = render(<Spinner />);
    expect(container).toBeTruthy();
  });
});
