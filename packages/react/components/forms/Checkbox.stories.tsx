import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Aceptar términos" } };

export const Indeterminate: Story = { args: { label: "Seleccionar todo", indeterminate: true } };

export const Disabled: Story = { args: { label: "Opción deshabilitada", disabled: true } };

export const Checked: Story = { args: { label: "Opción marcada", checked: true } };
