import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Core/Divider",
  component: Divider,
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = { args: { direction: "horizontal" } };
export const WithLabel: Story = { args: { label: "O", direction: "horizontal" } };
export const Vertical: Story = { args: { direction: "vertical" } };
export const CustomSpacing: Story = { args: { spacing: "24px", direction: "horizontal" } };
