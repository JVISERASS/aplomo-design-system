import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Core/IconButton",
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = { args: { icon: "search", label: "Buscar" } };
export const Edit: Story = { args: { icon: "edit-2", label: "Editar" } };
export const Delete: Story = { args: { icon: "trash-2", label: "Eliminar" } };
export const Selected: Story = { args: { icon: "check", label: "Seleccionar", selected: true } };
export const Small: Story = { args: { icon: "menu", label: "Menú", size: "sm" } };
