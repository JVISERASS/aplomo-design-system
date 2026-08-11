import type { Meta, StoryObj } from "@storybook/angular";
import { ApMenu } from "./ap-menu";

const meta: Meta<ApMenu> = {
  title: "Feedback/Menu",
  component: ApMenu,
};
export default meta;

type Story = StoryObj<ApMenu>;

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
      { value: "paste", label: "Pegar", icon: "clipboard-paste", shortcut: "Ctrl+V" },
      { value: "cut", label: "Cortar", icon: "scissors", shortcut: "Ctrl+X" },
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
