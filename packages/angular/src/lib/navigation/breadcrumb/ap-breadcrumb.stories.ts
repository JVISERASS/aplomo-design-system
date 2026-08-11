import type { Meta, StoryObj } from "@storybook/angular";
import { ApBreadcrumb } from "./ap-breadcrumb";

const meta: Meta<ApBreadcrumb> = {
  title: "Navigation/Breadcrumb",
  component: ApBreadcrumb,
};
export default meta;

type Story = StoryObj<ApBreadcrumb>;

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
