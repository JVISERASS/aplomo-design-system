import type { Meta, StoryObj } from "@storybook/react";
import { Sparkline } from "./Sparkline";

const meta: Meta<typeof Sparkline> = {
  title: "Charts/Sparkline",
  component: Sparkline,
};
export default meta;

type Story = StoryObj<typeof Sparkline>;

export const Default: Story = {
  args: {
    data: [5, 8, 12, 9, 15, 11, 14, 18, 10, 16],
    width: 100,
    height: 40,
  },
};

export const ToneOk: Story = {
  args: {
    data: [2, 5, 8, 6, 9, 7, 10, 8, 11, 9],
    width: 80,
    height: 32,
    tone: "ok",
    showLast: true,
  },
};

export const ToneError: Story = {
  args: {
    data: [20, 18, 22, 19, 21, 25, 24, 26, 28, 30],
    width: 100,
    height: 40,
    tone: "error",
  },
};

export const ToneWarn: Story = {
  args: {
    data: [10, 15, 12, 18, 14, 20, 17, 22, 19, 25],
    width: 120,
    height: 48,
    tone: "warn",
    showLast: true,
  },
};
