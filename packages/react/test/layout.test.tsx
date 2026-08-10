import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import {
  AppShell,
  CenteredPage,
  Columns,
  DetailPanel,
  PageHeader,
  Panel,
  Prose,
  SectionHeader,
  Split,
  Stack,
  Toolbar,
  TopBar,
} from "../src";

afterEach(() => cleanup());

describe("layout", () => {
  it("<AppShell> monta", () => {
    const { container } = render(
      <AppShell>
        <div>Content</div>
      </AppShell>
    );
    expect(container).toBeTruthy();
  });

  it("<CenteredPage> monta", () => {
    const { container } = render(
      <CenteredPage>
        <div>Content</div>
      </CenteredPage>
    );
    expect(container).toBeTruthy();
  });

  it("<Columns> monta", () => {
    const { container } = render(
      <Columns>
        <div>Column 1</div>
        <div>Column 2</div>
      </Columns>
    );
    expect(container).toBeTruthy();
  });

  it("<DetailPanel> monta", () => {
    const { container } = render(
      <DetailPanel>
        <div>Detail content</div>
      </DetailPanel>
    );
    expect(container).toBeTruthy();
  });

  it("<PageHeader> monta", () => {
    const { container } = render(
      <PageHeader>
        <div>Header content</div>
      </PageHeader>
    );
    expect(container).toBeTruthy();
  });

  it("<Panel> monta", () => {
    const { container } = render(
      <Panel>
        <div>Panel content</div>
      </Panel>
    );
    expect(container).toBeTruthy();
  });

  it("<Prose> monta", () => {
    const { container } = render(
      <Prose>
        <p>Prose content</p>
      </Prose>
    );
    expect(container).toBeTruthy();
  });

  it("<SectionHeader> monta", () => {
    const { container } = render(
      <SectionHeader>
        <div>Section header</div>
      </SectionHeader>
    );
    expect(container).toBeTruthy();
  });

  it("<Split> monta", () => {
    const { container } = render(
      <Split>
        <div>Split content</div>
      </Split>
    );
    expect(container).toBeTruthy();
  });

  it("<Stack> monta", () => {
    const { container } = render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(container).toBeTruthy();
  });

  it("<Toolbar> monta", () => {
    const { container } = render(
      <Toolbar>
        <div>Toolbar content</div>
      </Toolbar>
    );
    expect(container).toBeTruthy();
  });

  it("<TopBar> monta", () => {
    const { container } = render(
      <TopBar>
        <div>TopBar content</div>
      </TopBar>
    );
    expect(container).toBeTruthy();
  });
});
