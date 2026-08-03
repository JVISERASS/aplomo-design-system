import type { Meta, StoryObj } from "@storybook/react";
import { InlineAlert } from "./InlineAlert";

const meta: Meta<typeof InlineAlert> = {
  title: "Feedback/InlineAlert",
  component: InlineAlert,
};
export default meta;

type Story = StoryObj<typeof InlineAlert>;

export const Default: Story = {
  args: {
    tone: "info",
    title: "Información",
  },
};

export const Success: Story = {
  args: {
    tone: "ok",
    title: "Operación completada correctamente",
  },
};

export const Warning: Story = {
  args: {
    tone: "warn",
    title: "Advertencia: revise antes de continuar",
  },
};

export const Error: Story = {
  args: {
    tone: "error",
    title: "Error: no se pudo procesar la solicitud",
  },
};
