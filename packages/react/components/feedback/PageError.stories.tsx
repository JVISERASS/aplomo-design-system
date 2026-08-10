import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";

const meta: Meta<typeof PageError> = {
  title: "Feedback/PageError",
  component: PageError,
};
export default meta;

type Story = StoryObj<typeof PageError>;

export const Default: Story = {
  args: {
    code: "404",
    title: "Página no encontrada",
  },
};

export const NotFound: Story = {
  args: {
    code: "404",
    title: "Página no encontrada",
    detail: "La URL que buscas no existe o fue movida.",
  },
};

export const Forbidden: Story = {
  args: {
    code: "403",
    title: "Acceso denegado",
    detail: "No tienes permisos para acceder a este recurso.",
    requestId: "req-2024-001",
  },
};

export const ServerError: Story = {
  args: {
    code: "500",
    title: "Error interno del servidor",
    detail: "Algo salió mal. Nuestro equipo ha sido notificado.",
    requestId: "req-2024-002",
  },
};

export const ServiceUnavailable: Story = {
  args: {
    code: "503",
    title: "Servicio no disponible",
    detail: "El servidor está en mantenimiento.",
    eta: "14:30",
    requestId: "req-2024-003",
  },
};
