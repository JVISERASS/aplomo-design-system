import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormActions } from "./FormActions";

const meta: Meta<typeof FormActions> = {
  title: "Forms/FormActions",
  component: FormActions,
};
export default meta;

type Story = StoryObj<typeof FormActions>;

export const Default: Story = { args: { dirty: true, count: 1 } };

export const MultipleChanges: Story = { args: { dirty: true, count: 3 } };

export const Saving: Story = { args: { dirty: true, count: 2, saving: true } };

export const CustomLabel: Story = { args: { dirty: true, count: 1, saveLabel: "Aplicar cambios" } };
