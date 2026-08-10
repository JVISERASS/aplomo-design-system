import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Core/Icon",
  component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: { name: "heart" } };
export const Search: Story = { args: { name: "search" } };
export const WithCustomSize: Story = { args: { name: "star", size: 24 } };
export const WithStrokeWidth: Story = { args: { name: "alert-circle", strokeWidth: 2 } };
