import type { Meta, StoryObj } from "@storybook/angular";
import { ApCitation } from "./ap-citation";

const meta: Meta<ApCitation> = {
  title: "Assistant/Citation",
  component: ApCitation,
};
export default meta;

type Story = StoryObj<ApCitation>;

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
