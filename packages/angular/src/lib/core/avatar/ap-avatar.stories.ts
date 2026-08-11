import type { Meta, StoryObj } from "@storybook/angular";
import { ApAvatar } from "./ap-avatar";

const meta: Meta<ApAvatar> = {
  title: "Core/Avatar",
  component: ApAvatar,
};
export default meta;

type Story = StoryObj<ApAvatar>;

export const Default: Story = { args: { name: "Marta Iglesias" } };
export const WithCustomSize: Story = { args: { name: "Rahul Menon", size: 32 } };
export const LargeAvatar: Story = { args: { name: "Jane Doe", size: 48 } };
