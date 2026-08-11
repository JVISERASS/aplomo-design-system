import type { Meta, StoryObj } from "@storybook/angular";
import { ApSpinner } from "./ap-spinner";

const meta: Meta<ApSpinner> = {
  title: "Core/Spinner",
  component: ApSpinner,
};
export default meta;

type Story = StoryObj<ApSpinner>;

export const Default: Story = { args: {} };
export const WithCustomSize: Story = { args: { size: 24 } };
export const WithLabel: Story = { args: { label: "Cargando..." } };
export const SmallSpinner: Story = { args: { size: 16 } };
