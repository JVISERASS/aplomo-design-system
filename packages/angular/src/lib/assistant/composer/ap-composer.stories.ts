import type { Meta, StoryObj } from "@storybook/angular";
import { ApComposer } from "./ap-composer";

const meta: Meta<ApComposer> = {
  title: "Assistant/Composer",
  component: ApComposer,
};
export default meta;

type Story = StoryObj<ApComposer>;

export const Default: Story = {
  args: {
    placeholder: "Pregunta al asistente...",
  },
};

export const WithValue: Story = {
  args: {
    value: "¿Por qué ha subido el p95?",
    placeholder: "Pregunta al asistente...",
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
