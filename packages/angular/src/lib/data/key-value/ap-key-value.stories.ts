import type { Meta, StoryObj } from "@storybook/angular";
import { ApKeyValue } from "./ap-key-value";

const meta: Meta<ApKeyValue> = { title: "Data/KeyValue", component: ApKeyValue };
export default meta;

type Story = StoryObj<ApKeyValue>;

export const Default: Story = {
  args: {
    label: "Último despliegue",
    value: "2026-07-29 14:02 UTC",
  },
};

export const WithoutDataTone: Story = {
  args: {
    label: "Responsable",
    value: "Marta Iglesias",
    data: false,
  },
};

export const Loading: Story = {
  args: {
    label: "Estado de la API",
    value: "Conectado",
    loading: true,
  },
};

export const LongValue: Story = {
  args: {
    label: "Identificador único",
    value: "arn:aws:lambda:eu-central-1:123456789:function:process-data",
    data: true,
  },
};
