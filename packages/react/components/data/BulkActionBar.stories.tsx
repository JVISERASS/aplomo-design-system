import type { Meta, StoryObj } from "@storybook/react-vite";
import { BulkActionBar } from "./BulkActionBar";

const meta: Meta<typeof BulkActionBar> = {
  title: "Data/BulkActionBar",
  component: BulkActionBar,
};
export default meta;

type Story = StoryObj<typeof BulkActionBar>;

export const Default: Story = {
  args: {
    count: 3,
    onClear: () => console.log("Cleared"),
    actions: [
      { label: "Drenar", onClick: () => console.log("Drain") },
      { label: "Retirar", tone: "danger", onClick: () => console.log("Remove") },
    ],
  },
};

export const SingleAction: Story = {
  args: {
    count: 1,
    onClear: () => console.log("Cleared"),
    actions: [
      { label: "Eliminar", tone: "danger" },
    ],
  },
};

export const NoActions: Story = {
  args: {
    count: 5,
    onClear: () => console.log("Cleared"),
    actions: [],
  },
};
