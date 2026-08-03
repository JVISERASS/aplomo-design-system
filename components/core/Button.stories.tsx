import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: "Acción", variant: "primary" } };
export const Secondary: Story = { args: { children: "Secundario", variant: "secondary" } };
export const Ghost: Story = { args: { children: "Fantasma", variant: "ghost" } };
export const Danger: Story = { args: { children: "Peligro", variant: "danger" } };
export const Large: Story = { args: { children: "Grande", variant: "primary", size: "lg" } };
export const Disabled: Story = { args: { children: "Deshabilitado", disabled: true, variant: "primary" } };
