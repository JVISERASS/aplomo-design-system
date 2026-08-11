import type { Meta, StoryObj } from "@storybook/angular";
import { ApSelect } from "./ap-select";

const meta: Meta<ApSelect> = {
  title: "Forms/Select",
  component: ApSelect,
};
export default meta;

type Story = StoryObj<ApSelect>;

export const Default: Story = { args: { label: "País", options: ["España", "Francia", "Italia", "Portugal"] } };

export const WithValues: Story = { args: { label: "Región", options: [{ value: "es", label: "España" }, { value: "pt", label: "Portugal" }] } };

export const Disabled: Story = { args: { label: "Categoría", options: ["General", "Técnico", "Soporte"], disabled: true } };

export const WithoutLabel: Story = { args: { options: ["Opción 1", "Opción 2", "Opción 3"] } };
