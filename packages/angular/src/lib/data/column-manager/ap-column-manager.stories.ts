import type { Meta, StoryObj } from "@storybook/angular";
import { ApColumnManager } from "./ap-column-manager";

const meta: Meta<ApColumnManager> = {
  title: "Data/ColumnManager",
  component: ApColumnManager,
};
export default meta;

type Story = StoryObj<ApColumnManager>;

export const Default: Story = {
  args: {
    open: true,
    columns: [
      { key: "ref", label: "Referencia", locked: true },
      { key: "region", label: "Región" },
      { key: "version", label: "Versión" },
    ],
    hidden: ["version"],
    anchor: "left",
  },
};

export const AnchorRight: Story = {
  args: {
    open: true,
    columns: [
      { key: "id", label: "ID", locked: true },
      { key: "status", label: "Estado" },
      { key: "date", label: "Fecha" },
    ],
    hidden: [],
    anchor: "right",
  },
};

export const Closed: Story = {
  args: {
    open: false,
    columns: [
      { key: "name", label: "Nombre", locked: true },
      { key: "type", label: "Tipo" },
    ],
  },
};
