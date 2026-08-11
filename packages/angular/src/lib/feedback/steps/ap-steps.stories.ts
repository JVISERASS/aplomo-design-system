import type { Meta, StoryObj } from "@storybook/angular";
import { ApSteps } from "./ap-steps";

const meta: Meta<ApSteps> = {
  title: "Feedback/Steps",
  component: ApSteps,
};
export default meta;

type Story = StoryObj<ApSteps>;

export const Default: Story = {
  args: {
    steps: ["Paso 1", "Paso 2", "Paso 3"],
    current: 1,
    direction: "row",
  },
};

export const WithMeta: Story = {
  args: {
    steps: [
      { label: "Información", meta: "Datos personales" },
      { label: "Confirmación", meta: "Revisar" },
      { label: "Finalización", meta: "Completado" },
    ],
    current: 0,
    direction: "row",
  },
};

export const Vertical: Story = {
  args: {
    steps: ["Solicitud", "Revisión", "Aprobación", "Entrega"],
    current: 2,
    direction: "column",
  },
};

export const Completed: Story = {
  args: {
    steps: ["Inicio", "Proceso", "Fin"],
    current: 3,
    direction: "row",
  },
};
