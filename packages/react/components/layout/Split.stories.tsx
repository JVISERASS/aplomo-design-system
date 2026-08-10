import type { Meta, StoryObj } from "@storybook/react";
import { Split } from "./Split";

const meta: Meta<typeof Split> = {
  title: "Layout/Split",
  component: Split,
};
export default meta;

type Story = StoryObj<typeof Split>;

export const Default: Story = {
  args: {
    left: "Lista de elementos",
    right: "Detalle seleccionado",
    rightWidth: "400px",
    collapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    left: "Lista completa",
    right: "Detalle oculto",
    collapsed: true,
  },
};

export const CustomRightWidth: Story = {
  args: {
    left: "Navegación",
    right: "Vista previa",
    rightWidth: "600px",
    collapsed: false,
  },
};
