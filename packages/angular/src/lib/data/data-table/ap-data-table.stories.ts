import type { Meta, StoryObj } from "@storybook/angular";
import { ApDataTable } from "./ap-data-table";

const meta: Meta<ApDataTable> = {
  title: "Data/DataTable",
  component: ApDataTable,
};
export default meta;

type Story = StoryObj<ApDataTable>;

export const Default: Story = {
  args: {
    columns: [
      { key: "ref", label: "Referencia", width: "140px", data: true, shared: true },
      { key: "name", label: "Servicio", width: "minmax(160px, 1fr)" },
      { key: "p95", label: "p95", width: "76px", align: "right", data: true, sortable: true },
    ],
    rows: [
      { id: "svc-1", ref: "SVC-001", name: "API Gateway", p95: "45ms" },
      { id: "svc-2", ref: "SVC-002", name: "Database", p95: "128ms" },
      { id: "svc-3", ref: "SVC-003", name: "Cache", p95: "12ms" },
    ],
    selectedId: "svc-1",
    keyboard: true,
  },
};

export const Selectable: Story = {
  args: {
    columns: [
      { key: "id", label: "ID", width: "100px", data: true, shared: true },
      { key: "status", label: "Estado", width: "120px" },
      { key: "count", label: "Instancias", width: "100px", align: "right", data: true },
    ],
    rows: [
      { id: "r1", id_display: "RES-001", status: "Activo", count: "3" },
      { id: "r2", id_display: "RES-002", status: "Inactivo", count: "0" },
    ],
    selectable: true,
    checked: ["r1"],
  },
};

export const Sortable: Story = {
  args: {
    columns: [
      { key: "name", label: "Nombre", width: "180px", sortable: true },
      { key: "latency", label: "Latencia", width: "100px", data: true, sortable: true },
    ],
    rows: [
      { id: "n1", name: "Node Alpha", latency: "95ms" },
      { id: "n2", name: "Node Beta", latency: "42ms" },
    ],
    sort: { key: "latency", dir: "asc" },
  },
};
