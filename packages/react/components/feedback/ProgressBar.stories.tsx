import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithLabel: Story = {
  args: {
    value: 65,
    label: "Descargando",
  },
};

export const ShowValue: Story = {
  args: {
    value: 75,
    label: "Procesando",
    showValue: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    label: "Completado",
    tone: "ok",
    showValue: true,
  },
};

export const Error: Story = {
  args: {
    value: 45,
    label: "Error en proceso",
    tone: "error",
    showValue: true,
  },
};
