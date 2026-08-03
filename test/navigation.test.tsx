import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Breadcrumb, CommandPalette, SideNav, Tabs } from "../src";

afterEach(() => cleanup());

describe("navigation", () => {
  it("<Breadcrumb> monta", () => {
    const { container } = render(
      <Breadcrumb items={["Home", "About"]} />
    );
    expect(container).toBeTruthy();
  });

  it("<CommandPalette> monta", () => {
    const { container } = render(
      <CommandPalette items={[{ label: "Search" }, { label: "Help" }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<SideNav> monta", () => {
    const { container } = render(
      <SideNav groups={[{ label: "Menu", items: [{ value: "home", label: "Home" }] }]} />
    );
    expect(container).toBeTruthy();
  });

  it("<Tabs> monta", () => {
    const { container } = render(
      <Tabs tabs={["Tab1", "Tab2"]} />
    );
    expect(container).toBeTruthy();
  });
});
