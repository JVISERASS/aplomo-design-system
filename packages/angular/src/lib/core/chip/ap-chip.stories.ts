import type { Meta, StoryObj } from "@storybook/angular";
import { ApChip } from "./ap-chip";

const meta: Meta<ApChip & { content: string }> = {
  title: "Core/Chip",
  component: ApChip,
  render: (args) => ({
    props: args,
    template: `<ap-chip [data]="data" [showRemove]="showRemove">{{ content }}</ap-chip>`,
  }),
};
export default meta;

type Story = StoryObj<ApChip & { content: string }>;

export const Default: Story = { args: { content: "Filtro aplicado" } };
export const WithData: Story = { args: { content: "2024-08-03", data: true } };
export const WithRemove: Story = { args: { content: "Removible", showRemove: true } };
