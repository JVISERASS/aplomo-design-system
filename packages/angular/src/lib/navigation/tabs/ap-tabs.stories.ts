import type { Meta, StoryObj } from "@storybook/angular";
import { ApTabs } from "./ap-tabs";

const meta: Meta<ApTabs> = {
  title: "Navigation/Tabs",
  component: ApTabs,
};
export default meta;

type Story = StoryObj<ApTabs>;

export const Default: Story = {
  args: {
    tabs: [
      { value: "all", label: "Todos", count: 248 },
      { value: "deg", label: "Degradados", count: 6 },
      { value: "active", label: "Activos", count: 242 },
    ],
    value: "all",
  },
};

export const SimpleStrings: Story = {
  args: {
    tabs: ["General", "Avanzado", "Acerca de"],
    value: "General",
  },
};

export const WithoutCounts: Story = {
  args: {
    tabs: [
      { value: "details", label: "Detalles" },
      { value: "history", label: "Historial" },
      { value: "settings", label: "Configuración" },
    ],
    value: "details",
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { value: "overview", label: "Resumen", count: 1 },
      { value: "metrics", label: "Métricas", count: 45 },
      { value: "logs", label: "Registros", count: 2340 },
      { value: "alerts", label: "Alertas", count: 8 },
      { value: "performance", label: "Rendimiento", count: 12 },
    ],
    value: "metrics",
  },
};
