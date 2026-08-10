import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Confirmar acción",
    description: "¿Está seguro de que desea continuar?",
  },
};

export const WithFooter: Story = {
  args: {
    open: true,
    title: "Eliminar elemento",
    description: "Esta acción no puede deshacerse.",
    footer: "Botones de acción aquí",
  },
};

export const CustomWidth: Story = {
  args: {
    open: true,
    title: "Diálogo personalizado",
    description: "Ancho personalizado",
    width: 600,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    title: "Diálogo oculto",
  },
};
