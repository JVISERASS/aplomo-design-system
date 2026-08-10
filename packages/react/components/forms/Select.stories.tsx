import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = { args: { label: "País", options: ["España", "Francia", "Italia", "Portugal"] } };

export const WithValues: Story = { args: { label: "Región", options: [{ value: "es", label: "España" }, { value: "pt", label: "Portugal" }] } };

export const Disabled: Story = { args: { label: "Categoría", options: ["General", "Técnico", "Soporte"], disabled: true } };

export const WithoutLabel: Story = { args: { options: ["Opción 1", "Opción 2", "Opción 3"] } };
