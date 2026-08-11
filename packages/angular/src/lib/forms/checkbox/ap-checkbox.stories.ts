import type { Meta, StoryObj } from "@storybook/angular";
import { ApCheckbox } from "./ap-checkbox";

const meta: Meta<ApCheckbox> = {
  title: "Forms/Checkbox",
  component: ApCheckbox,
};
export default meta;

type Story = StoryObj<ApCheckbox>;

export const Default: Story = { args: { label: "Aceptar términos" } };

export const Indeterminate: Story = { args: { label: "Seleccionar todo", indeterminate: true } };

export const Disabled: Story = { args: { label: "Opción deshabilitada", disabled: true } };

export const Checked: Story = { args: { label: "Opción marcada", checked: true } };
