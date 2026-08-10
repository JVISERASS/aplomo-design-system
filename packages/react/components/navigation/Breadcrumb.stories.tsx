import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: ["Infraestructura", "Servicios", { label: "SVC-4820-DE", data: true }],
  },
};

export const SimpleStrings: Story = {
  args: {
    items: ["Inicio", "Documentos", "Informes"],
  },
};

export const OnlyDataItems: Story = {
  args: {
    items: [
      { label: "Panel", data: false },
      { label: "SVC-1234-XX", data: true },
      { label: "Detalles", data: false },
    ],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      "Administración",
      "Sistemas",
      { label: "prod-cluster-1", data: true },
      "Métricas",
      { label: "cpu-usage", data: true },
    ],
  },
};
