import type { Meta, StoryObj } from "@storybook/react";
import { ColumnManager } from "./ColumnManager";

const meta: Meta<typeof ColumnManager> = {
  title: "Data/ColumnManager",
  component: ColumnManager,
};
export default meta;

type Story = StoryObj<typeof ColumnManager>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => console.log("Closed"),
    columns: [
      { key: "ref", label: "Referencia", locked: true },
      { key: "region", label: "Región" },
      { key: "version", label: "Versión" },
    ],
    hidden: ["version"],
    onToggle: (key) => console.log("Toggled:", key),
    anchor: "left",
  },
};

export const AnchorRight: Story = {
  args: {
    open: true,
    onClose: () => console.log("Closed"),
    columns: [
      { key: "id", label: "ID", locked: true },
      { key: "status", label: "Estado" },
      { key: "date", label: "Fecha" },
    ],
    hidden: [],
    onToggle: (key) => console.log("Toggled:", key),
    anchor: "right",
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onClose: () => console.log("Closed"),
    columns: [
      { key: "name", label: "Nombre", locked: true },
      { key: "type", label: "Tipo" },
    ],
  },
};
