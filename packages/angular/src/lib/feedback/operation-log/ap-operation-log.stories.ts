import type { Meta, StoryObj } from "@storybook/angular";
import { ApOperationLog } from "./ap-operation-log";

const meta: Meta<ApOperationLog> = {
  title: "Feedback/OperationLog",
  component: ApOperationLog,
};
export default meta;

type Story = StoryObj<ApOperationLog>;

export const Default: Story = {
  args: {
    operations: [
      { id: "op1", title: "Exportando datos", status: "running", progress: 65 },
    ],
  },
};

export const MultipleOperations: Story = {
  args: {
    operations: [
      { id: "op1", title: "Drenando base de datos", status: "ok", progress: 100, detail: "3.5 GB completados" },
      { id: "op2", title: "Desplegando servicio", status: "running", progress: 45, detail: "Escalando instancias" },
      { id: "op3", title: "Exportando reportes", status: "error", progress: 30, detail: "Error de escritura" },
    ],
  },
};

export const Running: Story = {
  args: {
    operations: [
      { id: "op1", title: "Sincronizando", status: "running", progress: 25 },
    ],
  },
};

export const Success: Story = {
  args: {
    operations: [
      { id: "op1", title: "Operación completada", status: "ok", progress: 100, detail: "Todo correcto" },
    ],
  },
};
