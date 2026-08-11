import type { Meta, StoryObj } from "@storybook/react-vite";
import { Columns } from "./Columns";

const meta: Meta<typeof Columns> = {
  title: "Layout/Columns",
  component: Columns,
};
export default meta;

type Story = StoryObj<typeof Columns>;

export const Default: Story = {
  args: {
    children: ["Columna 1", "Columna 2", "Columna 3"],
    gap: "16px",
  },
};

export const ExactCount: Story = {
  args: {
    count: 2,
    even: true,
    children: ["Izquierda", "Derecha"],
    gap: "24px",
  },
};

export const ResponsiveColumns: Story = {
  args: {
    min: 250,
    gap: "20px",
    children: ["Item", "Item", "Item", "Item"],
  },
};

export const WithAlignment: Story = {
  args: {
    gap: "16px",
    align: "center",
    children: ["Alineado al centro", "Alineado al centro"],
  },
};
