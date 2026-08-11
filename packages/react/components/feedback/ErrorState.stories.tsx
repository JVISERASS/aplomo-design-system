import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorState } from "./ErrorState";

const meta: Meta<typeof ErrorState> = {
  title: "Feedback/ErrorState",
  component: ErrorState,
};
export default meta;

type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {
    title: "Error al cargar",
    code: "HTTP 503",
  },
};

export const WithDetail: Story = {
  args: {
    title: "Falló la conexión",
    code: "TIMEOUT 30 s",
    detail: "El servidor tardó demasiado en responder. Intente de nuevo.",
  },
};

export const NotFound: Story = {
  args: {
    title: "Recurso no encontrado",
    code: "HTTP 404",
    detail: "La página que buscas no existe.",
  },
};

export const ServerError: Story = {
  args: {
    title: "Error en el servidor",
    code: "HTTP 500",
    detail: "Algo salió mal. Por favor, intente más tarde.",
  },
};
