import type { Meta, StoryObj } from "@storybook/angular";
import { ApFrozenState } from "./ap-frozen-state";

const meta: Meta<ApFrozenState> = {
  title: "Feedback/FrozenState",
  component: ApFrozenState,
};
export default meta;

type Story = StoryObj<ApFrozenState>;

export const Default: Story = {
  args: {
    frozen: true,
    since: "hace 4 min",
  },
};

export const WithReason: Story = {
  args: {
    frozen: true,
    since: "hace 2 min",
    reason: "Pausa del agregador",
  },
};

export const HistoricView: Story = {
  args: {
    frozen: true,
    since: "hace 1 hora",
    reason: "Vista histórica",
  },
};

export const NotFrozen: Story = {
  args: {
    frozen: false,
  },
};
