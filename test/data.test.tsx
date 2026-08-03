import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import {
  AsciiDiagram,
  AsciiMeter,
  AuditTimeline,
  BulkActionBar,
  ColumnManager,
  ConfigDiff,
  DataTable,
  DataValue,
  KeyValue,
  List,
  LogStream,
  Matrix,
  MetricTile,
  Pagination,
  Quota,
  Skeleton,
} from "../src";

afterEach(() => cleanup());

describe("data", () => {
  it("<AsciiDiagram> monta", () => {
    const { container } = render(<AsciiDiagram />);
    expect(container).toBeTruthy();
  });

  it("<AsciiMeter> monta", () => {
    const { container } = render(<AsciiMeter />);
    expect(container).toBeTruthy();
  });

  it("<AuditTimeline> monta", () => {
    const { container } = render(
      <AuditTimeline
        entries={[
          { at: "2024-01-01", title: "Created", actor: "admin" },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<BulkActionBar> monta", () => {
    const { container } = render(<BulkActionBar />);
    expect(container).toBeTruthy();
  });

  it("<ColumnManager> monta", () => {
    const { container } = render(
      <ColumnManager
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<ConfigDiff> monta", () => {
    const { container } = render(
      <ConfigDiff
        changes={[
          { key: "port", from: "8080", to: "3000" },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<DataTable> monta", () => {
    const { container } = render(
      <DataTable
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Name" },
        ]}
        rows={[
          { id: "1", name: "Alice" },
          { id: "2", name: "Bob" },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<DataValue> monta", () => {
    const { container } = render(<DataValue />);
    expect(container).toBeTruthy();
  });

  it("<KeyValue> monta", () => {
    const { container } = render(<KeyValue label="Status" />);
    expect(container).toBeTruthy();
  });

  it("<List> monta", () => {
    const { container } = render(
      <List
        items={[
          { title: "Item 1" },
          { title: "Item 2", subtitle: "Description" },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<LogStream> monta", () => {
    const { container } = render(
      <LogStream
        lines={[
          { at: "10:30", text: "Server started" },
          { at: "10:31", level: "INFO", text: "Listening on port 3000" },
        ]}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<Matrix> monta", () => {
    const { container } = render(
      <Matrix
        rows={["East", "West", "North"]}
        columns={["Jan", "Feb", "Mar"]}
        values={{
          "East|Jan": 10,
          "West|Feb": 20,
          "North|Mar": 15,
        }}
      />
    );
    expect(container).toBeTruthy();
  });

  it("<MetricTile> monta", () => {
    const { container } = render(<MetricTile label="Revenue" />);
    expect(container).toBeTruthy();
  });

  it("<Pagination> monta", () => {
    const { container } = render(<Pagination />);
    expect(container).toBeTruthy();
  });

  it("<Quota> monta", () => {
    const { container } = render(<Quota />);
    expect(container).toBeTruthy();
  });

  it("<Skeleton> monta", () => {
    const { container } = render(<Skeleton />);
    expect(container).toBeTruthy();
  });
});
