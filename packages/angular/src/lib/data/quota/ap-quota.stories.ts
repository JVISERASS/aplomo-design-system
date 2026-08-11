import type { Meta, StoryObj } from "@storybook/angular";
import { ApQuota } from "./ap-quota";

const meta: Meta<ApQuota> = { title: "Data/Quota", component: ApQuota };
export default meta;

type Story = StoryObj<ApQuota>;

export const Default: Story = {
  args: {
    label: "Peticiones del plan",
    used: 182,
    total: 200,
    unit: "M",
  },
};

export const Warning: Story = {
  args: {
    label: "Almacenamiento",
    used: 750,
    total: 1000,
    unit: "GB",
  },
};

export const Critical: Story = {
  args: {
    label: "Solicitudes de API",
    used: 9500,
    total: 10000,
    unit: "req",
  },
};

export const LowUsage: Story = {
  args: {
    label: "Conexiones concurrentes",
    used: 12,
    total: 500,
    cells: 20,
  },
};
