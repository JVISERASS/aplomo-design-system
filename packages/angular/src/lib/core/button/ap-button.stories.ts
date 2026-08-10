import type { Meta, StoryObj } from "@storybook/angular";
import { ApButton } from "./ap-button";

const meta: Meta<ApButton> = {
  title: "Core/Button",
  component: ApButton,
  render: (args) => ({
    props: args,
    template: `<button apButton [variant]="variant" [size]="size" [solid]="solid" [disabled]="disabled">{{ label }}</button>`,
  }),
};
export default meta;

type Story = StoryObj<ApButton & { label: string; disabled: boolean }>;

export const Default: Story = { args: { label: "Acción", variant: "primary" } };
export const Secondary: Story = { args: { label: "Secundario", variant: "secondary" } };
export const Ghost: Story = { args: { label: "Fantasma", variant: "ghost" } };
export const Danger: Story = { args: { label: "Peligro", variant: "danger" } };
export const Large: Story = { args: { label: "Grande", variant: "primary", size: "lg" } };
export const Disabled: Story = { args: { label: "Deshabilitado", variant: "primary", disabled: true } };
