import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Core/Chip",
  component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { children: "Filtro aplicado" } };
export const WithData: Story = { args: { children: "2024-08-03", data: true } };
export const WithRemove: Story = { args: { children: "Removible", onRemove: () => {} } };
