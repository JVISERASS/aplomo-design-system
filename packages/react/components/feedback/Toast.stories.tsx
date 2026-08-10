import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    toasts: [
      { id: "toast1", message: "Elemento eliminado" },
    ],
  },
};

export const WithAction: Story = {
  args: {
    toasts: [
      { id: "toast1", message: "Archivo movido", action: "Deshacer" },
    ],
  },
};

export const MultipleToasts: Story = {
  args: {
    toasts: [
      { id: "toast1", message: "Cambios guardados", action: "Ver" },
      { id: "toast2", message: "Sincronización completada" },
      { id: "toast3", message: "Copia realizada", action: "Deshacer" },
    ],
  },
};

export const LongMessage: Story = {
  args: {
    toasts: [
      { id: "toast1", message: "La operación se completó exitosamente. 150 registros han sido actualizados.", action: "Revisar" },
    ],
  },
};
