import type { Meta, StoryObj } from "@storybook/react";
import { Composer } from "./Composer";

const meta: Meta<typeof Composer> = {
  title: "Assistant/Composer",
  component: Composer,
};
export default meta;

type Story = StoryObj<typeof Composer>;

export const Default: Story = {
  args: {
    placeholder: "Pregunta al asistente...",
  },
};

export const WithValue: Story = {
  args: {
    value: "¿Por qué ha subido el p95?",
    placeholder: "Pregunta al asistente...",
    onChange: () => {},
  },
};

export const Busy: Story = {
  args: {
    placeholder: "Pregunta al asistente...",
    busy: true,
    hint: "Esperando respuesta...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Pregunta al asistente...",
    disabled: true,
    hint: "Solo lectura: el asistente no ejecuta acciones",
  },
};
