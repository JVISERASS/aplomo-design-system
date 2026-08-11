import type { Meta, StoryObj } from "@storybook/angular";
import { ApPageError } from "./ap-page-error";

const meta: Meta<ApPageError> = {
  title: "Feedback/PageError",
  component: ApPageError,
};
export default meta;

type Story = StoryObj<ApPageError>;

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
