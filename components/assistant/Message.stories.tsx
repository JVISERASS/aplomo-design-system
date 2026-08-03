import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "./Message";

const meta: Meta<typeof Message> = {
  title: "Assistant/Message",
  component: Message,
};
export default meta;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    role: "assistant",
    at: "09:12",
    children:
      "El p95 subió a 184 ms tras el despliegue de v4.18.2 en eu-central-1.",
  },
};

export const User: Story = {
  args: {
    role: "user",
    at: "09:11",
    children: "¿Por qué ha subido el p95 en eu-central-1?",
  },
};

export const WithAuthor: Story = {
  args: {
    role: "assistant",
    author: "Sistema Aplomo",
    at: "09:12",
    children:
      "He revisado los últimos despliegues y encontré que la versión 4.18.2 introdujo un cambio en la consulta de métricas.",
  },
};

export const UserMessage: Story = {
  args: {
    role: "user",
    author: "Javier Viseras",
    at: "09:10",
    children: "¿Cuál es el estado actual del servicio SVC-4821?",
  },
};
