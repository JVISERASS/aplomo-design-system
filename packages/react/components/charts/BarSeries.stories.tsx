import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarSeries } from "./BarSeries";

const meta: Meta<typeof BarSeries> = {
  title: "Charts/BarSeries",
  component: BarSeries,
};
export default meta;

type Story = StoryObj<typeof BarSeries>;

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
