import type { Meta, StoryObj } from "@storybook/angular";
import { ApIcon } from "./ap-icon";

const meta: Meta<ApIcon> = {
  title: "Core/Icon",
  component: ApIcon,
};
export default meta;

type Story = StoryObj<ApIcon>;

export const Default: Story = { args: { name: "heart" } };
export const Search: Story = { args: { name: "search" } };
export const WithCustomSize: Story = { args: { name: "star", size: 24 } };
export const WithStrokeWidth: Story = { args: { name: "alert-circle", strokeWidth: 2 } };
