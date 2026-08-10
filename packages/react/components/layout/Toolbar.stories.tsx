import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Layout/Toolbar",
  component: Toolbar,
};
export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {
    left: "Filtros",
    right: "Acciones",
  },
};

export const OnlyLeft: Story = {
  args: {
    left: "Búsqueda",
  },
};

export const OnlyRight: Story = {
  args: {
    right: "Crear nuevo",
  },
};
