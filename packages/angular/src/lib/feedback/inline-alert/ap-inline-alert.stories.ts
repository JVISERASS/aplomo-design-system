import type { Meta, StoryObj } from "@storybook/angular";
import { ApInlineAlert } from "./ap-inline-alert";

const meta: Meta<ApInlineAlert> = {
  title: "Feedback/InlineAlert",
  component: ApInlineAlert,
};
export default meta;

type Story = StoryObj<ApInlineAlert>;

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
