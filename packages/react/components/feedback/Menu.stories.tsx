import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "Feedback/Menu",
  component: Menu,
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    open: true,
    items: [
      { value: "edit", label: "Editar" },
      { value: "view", label: "Ver" },
      { value: "delete", label: "Eliminar", tone: "danger" },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    open: true,
    items: [
      { value: "copy", label: "Copiar", icon: "copy", shortcut: "Ctrl+C" },
      { value: "paste", label: "Pegar", icon: "paste", shortcut: "Ctrl+V" },
      { value: "cut", label: "Cortar", icon: "cut", shortcut: "Ctrl+X" },
    ],
  },
};

export const WithDivider: Story = {
  args: {
    open: true,
    items: [
      { value: "new", label: "Nuevo" },
      { value: "open", label: "Abrir" },
      { divider: true },
      { value: "delete", label: "Eliminar", tone: "danger" },
    ],
  },
};

export const AnchorRight: Story = {
  args: {
    open: true,
    anchor: "right",
    items: [
      { value: "save", label: "Guardar" },
      { value: "export", label: "Exportar" },
    ],
  },
};
