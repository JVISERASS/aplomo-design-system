import type { Meta, StoryObj } from "@storybook/react";
import { Citation } from "./Citation";

const meta: Meta<typeof Citation> = {
  title: "Assistant/Citation",
  component: Citation,
};
export default meta;

type Story = StoryObj<typeof Citation>;

export const Default: Story = {
  args: {
    label: "SVC-4821-DE",
    hint: "conciliacion",
  },
};

export const WithIcon: Story = {
  args: {
    label: "DPL-11482",
    hint: "despliegue",
    icon: "git-commit-horizontal",
  },
};

export const Deploy: Story = {
  args: {
    label: "v4.18.2",
    hint: "version",
    icon: "package",
  },
};

export const Incident: Story = {
  args: {
    label: "INC-2024-001",
    hint: "incidencia activa",
    icon: "alert-circle",
  },
};
