import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricTile } from "./MetricTile";

const meta: Meta<typeof MetricTile> = {
  title: "Data/MetricTile",
  component: MetricTile,
};
export default meta;

type Story = StoryObj<typeof MetricTile>;

export const Default: Story = {
  args: {
    label: "Peticiones / min",
    value: "128.402",
    delta: "+2,1% 24h",
    deltaTone: "ok",
  },
};

export const Negative: Story = {
  args: {
    label: "Disponibilidad",
    value: "99,96%",
    delta: "-0,04% 24h",
    deltaTone: "error",
  },
};

export const Loading: Story = {
  args: {
    label: "Tasa de error",
    value: "0,12%",
    loading: true,
  },
};

export const Muted: Story = {
  args: {
    label: "Conexiones activas",
    value: "4.285",
    unit: "conn",
    deltaTone: "muted",
  },
};
