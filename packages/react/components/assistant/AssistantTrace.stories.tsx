import type { Meta, StoryObj } from "@storybook/react-vite";
import { AssistantTrace } from "./AssistantTrace";

const meta: Meta<typeof AssistantTrace> = {
  title: "Assistant/AssistantTrace",
  component: AssistantTrace,
};
export default meta;

type Story = StoryObj<typeof AssistantTrace>;

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
