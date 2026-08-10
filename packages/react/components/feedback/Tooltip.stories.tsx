import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    label: "Información",
    children: "Botón",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Guarda los cambios realizados en el documento",
    children: "Guardar",
  },
};

export const LongText: Story = {
  args: {
    label: "Presiona Ctrl+S para guardar rápidamente. Los cambios se sincronizan automáticamente cada 30 segundos.",
    children: "Ícono de información",
  },
};

export const ActionButton: Story = {
  args: {
    label: "Eliminar elemento",
    children: "Eliminar",
  },
};
