import type { Meta, StoryObj } from "@storybook/angular";
import { ApSwitch } from "./ap-switch";

const meta: Meta<ApSwitch> = {
  title: "Forms/Switch",
  component: ApSwitch,
};
export default meta;

type Story = StoryObj<ApSwitch>;

export const Default: Story = { args: { label: "Notificaciones" } };

export const Checked: Story = { args: { label: "Modo oscuro", checked: true } };

export const Disabled: Story = { args: { label: "Opción bloqueada", disabled: true } };

export const DisabledChecked: Story = { args: { label: "Modo accesible", checked: true, disabled: true } };
