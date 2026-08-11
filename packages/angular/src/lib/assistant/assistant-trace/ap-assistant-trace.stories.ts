import type { Meta, StoryObj } from "@storybook/angular";
import { ApAssistantTrace } from "./ap-assistant-trace";

const meta: Meta<ApAssistantTrace> = {
  title: "Assistant/AssistantTrace",
  component: ApAssistantTrace,
};
export default meta;

type Story = StoryObj<ApAssistantTrace>;

export const Default: Story = {
  args: {
    steps: [
      { label: "metrics.p95(SVC-4821-DE, 24h)", ms: 180, status: "ok" },
      { label: "deploys.list(eu-central-1)", ms: 240, status: "ok" },
    ],
  },
};

export const Running: Story = {
  args: {
    steps: [
      { label: "metrics.p95(SVC-4821-DE, 24h)", ms: 180, status: "ok" },
      { label: "deploys.list(eu-central-1)", status: "running" },
    ],
    running: true,
  },
};

export const WithError: Story = {
  args: {
    steps: [
      { label: "metrics.p95(SVC-4821-DE, 24h)", ms: 180, status: "ok" },
      { label: "services.check(platform)", status: "error" },
    ],
  },
};

export const DefaultOpen: Story = {
  args: {
    steps: [
      { label: "cache.invalidate(api-v2)", ms: 95, status: "ok" },
      { label: "db.query(incidents)", ms: 420, status: "ok" },
      { label: "analytics.export(7d)", ms: 1200, status: "ok" },
    ],
    defaultOpen: true,
  },
};
