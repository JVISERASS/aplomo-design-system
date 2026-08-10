import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Core/Spinner",
  component: Spinner,
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: {} };
export const WithCustomSize: Story = { args: { size: 24 } };
export const WithLabel: Story = { args: { label: "Cargando..." } };
export const SmallSpinner: Story = { args: { size: 16 } };
