import type { Meta, StoryObj } from "@storybook/angular";
import { ApBarSeries } from "./ap-bar-series";

const meta: Meta<ApBarSeries> = {
  title: "Charts/BarSeries",
  component: ApBarSeries,
};
export default meta;

type Story = StoryObj<ApBarSeries>;

export const Default: Story = {
  args: {
    data: [12, 19, 8, 25, 14, 22, 18, 30],
    height: 100,
    gap: 2,
    labels: ["hace 24 h", "ahora"],
  },
};

export const WithThreshold: Story = {
  args: {
    data: [12, 19, 8, 25, 14, 22, 18, 30],
    height: 100,
    gap: 2,
    labels: ["hace 24 h", "ahora"],
    threshold: 20,
  },
};

export const ToneWarn: Story = {
  args: {
    data: [15, 18, 22, 25, 28, 30, 32, 35],
    height: 80,
    gap: 1,
    tone: "warn",
  },
};

export const Loading: Story = {
  args: {
    data: [4, 4, 4, 4, 4, 4],
    height: 100,
    loading: true,
  },
};
