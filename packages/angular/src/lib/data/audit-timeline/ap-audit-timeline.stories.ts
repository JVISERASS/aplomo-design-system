import type { Meta, StoryObj } from "@storybook/angular";
import { ApAuditTimeline } from "./ap-audit-timeline";

const meta: Meta<ApAuditTimeline> = {
  title: "Data/AuditTimeline",
  component: ApAuditTimeline,
};
export default meta;

type Story = StoryObj<ApAuditTimeline>;

export const Default: Story = {
  args: {
    entries: [
      {
        at: "2026-07-29 14:02",
        actor: "Marta Iglesias",
        title: "Umbral de reversión modificado",
        tag: "CONFIG",
        tone: "neutral",
      },
      {
        at: "2026-07-29 13:58",
        actor: "sistema",
        title: "Despliegue 4.18.2 completado",
        tag: "OK",
        tone: "ok",
      },
    ],
  },
};

export const WithError: Story = {
  args: {
    entries: [
      {
        at: "2026-07-29 15:30",
        actor: "Carlos López",
        title: "Fallo en validación",
        note: "Error de schema",
        tag: "ERROR",
        tone: "error",
      },
      {
        at: "2026-07-29 15:25",
        actor: "sistema",
        title: "Reintentando operación",
        tag: "WARN",
        tone: "warn",
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    entries: [],
    loading: true,
  },
};
