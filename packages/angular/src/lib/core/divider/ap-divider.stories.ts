import type { Meta, StoryObj } from "@storybook/angular";
import { ApDivider } from "./ap-divider";

const meta: Meta<ApDivider> = {
  title: "Core/Divider",
  component: ApDivider,
};
export default meta;

type Story = StoryObj<ApDivider>;

export const Default: Story = { args: { direction: "horizontal" } };
export const WithLabel: Story = { args: { label: "O", direction: "horizontal" } };
export const Vertical: Story = { args: { direction: "vertical" } };
export const CustomSpacing: Story = { args: { spacing: "24px", direction: "horizontal" } };
