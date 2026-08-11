import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Core/Avatar",
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { name: "Marta Iglesias" } };
export const WithCustomSize: Story = { args: { name: "Rahul Menon", size: 32 } };
export const LargeAvatar: Story = { args: { name: "Jane Doe", size: 48 } };
