import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Feedback/EmptyState",
  component: EmptyState,
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "Sin resultados",
  },
};

export const WithDescription: Story = {
  args: {
    title: "No hay datos disponibles",
    description: "Intente ajustar los filtros o búsqueda",
  },
};

export const WithAction: Story = {
  args: {
    title: "Lista vacía",
    description: "Cree su primer elemento para comenzar",
    action: "Crear elemento",
  },
};

export const CompleteExample: Story = {
  args: {
    title: "Bandeja de entrada vacía",
    description: "No tienes mensajes sin leer",
    action: "Ir a mensajes antiguos",
  },
};
