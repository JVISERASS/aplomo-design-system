import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Core/Badge",
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Neutral", tone: "neutral" } };
export const Ok: Story = { args: { children: "Completado", tone: "ok" } };
export const Warning: Story = { args: { children: "Advertencia", tone: "warn" } };
export const Error: Story = { args: { children: "Error", tone: "error" } };
export const Accent: Story = { args: { children: "Destacado", tone: "accent" } };
