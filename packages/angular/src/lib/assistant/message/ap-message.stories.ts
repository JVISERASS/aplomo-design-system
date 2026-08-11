import type { Meta, StoryObj } from "@storybook/angular";
import { ApMessage } from "./ap-message";

/**
 * Patron para el contenido que en React era `children`: en Angular es contenido proyectado,
 * asi que va en la plantilla con el arg `content` (ver STORIES.md #3).
 */
const meta: Meta<ApMessage & { content: string }> = {
  title: "Assistant/Message",
  component: ApMessage,
  render: (args) => ({
    props: args,
    template: `<ap-message [role]="role" [author]="author" [at]="at">{{ content }}</ap-message>`,
  }),
};
export default meta;

type Story = StoryObj<ApMessage & { content: string }>;

export const Default: Story = {
  args: {
    role: "assistant",
    at: "09:12",
    content: "El p95 subió a 184 ms tras el despliegue de v4.18.2 en eu-central-1.",
  },
};

export const User: Story = {
  args: {
    role: "user",
    at: "09:11",
    content: "¿Por qué ha subido el p95 en eu-central-1?",
  },
};

export const WithAuthor: Story = {
  args: {
    role: "assistant",
    author: "Sistema Aplomo",
    at: "09:12",
    content:
      "He revisado los últimos despliegues y encontré que la versión 4.18.2 introdujo un cambio en la consulta de métricas.",
  },
};

export const UserMessage: Story = {
  args: {
    role: "user",
    author: "Javier Viseras",
    at: "09:10",
    content: "¿Cuál es el estado actual del servicio SVC-4821?",
  },
};
