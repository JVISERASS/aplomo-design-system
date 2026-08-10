import type { Meta, StoryObj } from "@storybook/react";
import { FrozenState } from "./FrozenState";

const meta: Meta<typeof FrozenState> = {
  title: "Feedback/FrozenState",
  component: FrozenState,
};
export default meta;

type Story = StoryObj<typeof FrozenState>;

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
