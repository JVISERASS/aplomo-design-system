import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShareBar } from "./ShareBar";

const meta: Meta<typeof ShareBar> = {
  title: "Charts/ShareBar",
  component: ShareBar,
};
export default meta;

type Story = StoryObj<typeof ShareBar>;

export const Default: Story = {
  args: {
    segments: [
      { label: "Región A", value: 35 },
      { label: "Región B", value: 25 },
      { label: "Región C", value: 40 },
    ],
    height: 40,
    showLegend: true,
  },
};

export const WithError: Story = {
  args: {
    segments: [
      { label: "OK", value: 70, tone: "default" },
      { label: "Error", value: 30, tone: "error" },
    ],
    height: 32,
    showLegend: true,
  },
};

export const WithoutLegend: Story = {
  args: {
    segments: [
      { label: "Chrome", value: 45 },
      { label: "Firefox", value: 30 },
      { label: "Safari", value: 25 },
    ],
    height: 40,
    showLegend: false,
  },
};

export const Loading: Story = {
  args: {
    segments: [{ label: "Cargando", value: 100 }],
    height: 40,
    loading: true,
  },
};
