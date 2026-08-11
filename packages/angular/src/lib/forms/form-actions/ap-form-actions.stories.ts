import type { Meta, StoryObj } from "@storybook/angular";
import { ApFormActions } from "./ap-form-actions";

const meta: Meta<ApFormActions> = {
  title: "Forms/FormActions",
  component: ApFormActions,
};
export default meta;

type Story = StoryObj<ApFormActions>;

export const Default: Story = { args: { dirty: true, count: 1 } };

export const MultipleChanges: Story = { args: { dirty: true, count: 3 } };

export const Saving: Story = { args: { dirty: true, count: 2, saving: true } };

export const CustomLabel: Story = { args: { dirty: true, count: 1, saveLabel: "Aplicar cambios" } };
