import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
};
export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    direction: "column",
    gap: "16px",
    children: ["Primer elemento", "Segundo elemento", "Tercer elemento"],
  },
};

export const Horizontal: Story = {
  args: {
    direction: "row",
    gap: "12px",
    children: ["Izquierda", "Centro", "Derecha"],
  },
};

export const WithAlignment: Story = {
  args: {
    direction: "row",
    gap: "16px",
    align: "center",
    justify: "space-between",
    children: ["Inicio", "Fin"],
  },
};

export const Wrapped: Story = {
  args: {
    direction: "row",
    gap: "8px",
    wrap: true,
    children: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3", "Etiqueta 4"],
  },
};
