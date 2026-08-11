import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { label: "Notificaciones" } };

export const Checked: Story = { args: { label: "Modo oscuro", checked: true } };

export const Disabled: Story = { args: { label: "Opción bloqueada", disabled: true } };

export const DisabledChecked: Story = { args: { label: "Modo accesible", checked: true, disabled: true } };
