import type { Meta, StoryObj } from "@storybook/angular";
import { ApBulkActionBar } from "./ap-bulk-action-bar";

const meta: Meta<ApBulkActionBar> = {
  title: "Data/BulkActionBar",
  component: ApBulkActionBar,
};
export default meta;

type Story = StoryObj<ApBulkActionBar>;

export const Default: Story = {
  args: {
    count: 3,
    actions: [
      { label: "Drenar", onClick: () => console.log("Drain") },
      { label: "Retirar", tone: "danger", onClick: () => console.log("Remove") },
    ],
  },
};

export const SingleAction: Story = {
  args: {
    count: 1,
    actions: [{ label: "Eliminar", tone: "danger" }],
  },
};

export const NoActions: Story = {
  args: {
    count: 5,
    actions: [],
  },
};
