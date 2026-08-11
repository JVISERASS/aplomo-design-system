import type { Meta, StoryObj } from "@storybook/angular";
import { ApList } from "./ap-list";

const meta: Meta<ApList> = { title: "Data/List", component: ApList };
export default meta;

type Story = StoryObj<ApList>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "inc-1",
        title: "Liquidación sin respuesta",
        ref: "INC-2261",
        subtitle: "ap-south-1 · Rahul Menon",
        meta: "31 h 20 min",
        tone: "error",
      },
      {
        id: "inc-2",
        title: "Latencia elevada detectada",
        ref: "INC-2260",
        subtitle: "eu-central-1 · Sistema",
        meta: "2 h 15 min",
        tone: "warn",
      },
    ],
    selectedId: "inc-1",
    selectable: true,
  },
};

export const OK: Story = {
  args: {
    items: [
      {
        id: "res-1",
        title: "Despliegue exitoso",
        ref: "DEP-442",
        subtitle: "Versión 4.18.2",
        meta: "10 min",
        tone: "ok",
      },
    ],
  },
};

export const Neutral: Story = {
  args: {
    items: [
      {
        id: "evt-1",
        title: "Escalado automático activado",
        subtitle: "us-east-1",
        meta: "5 min",
        tone: "neutral",
      },
      {
        id: "evt-2",
        title: "Certificado renovado",
        subtitle: "Dominio: api.example.com",
        meta: "1 h",
        tone: "neutral",
      },
    ],
    selectedId: "evt-1",
  },
};
