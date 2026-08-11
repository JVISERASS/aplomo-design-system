import type { Meta, StoryObj } from "@storybook/angular";
import { ApIconButton } from "./ap-icon-button";

const meta: Meta<ApIconButton> = {
  title: "Core/IconButton",
  component: ApIconButton,
  render: (args) => ({
    props: args,
    template: `<button apIconButton [icon]="icon" [label]="label" [size]="size" [selected]="selected"></button>`,
  }),
};
export default meta;

type Story = StoryObj<ApIconButton>;

export const Default: Story = { args: { icon: "search", label: "Buscar" } };
export const Edit: Story = { args: { icon: "edit-2", label: "Editar" } };
export const Delete: Story = { args: { icon: "trash-2", label: "Eliminar" } };
export const Selected: Story = { args: { icon: "check", label: "Seleccionar", selected: true } };
export const Small: Story = { args: { icon: "menu", label: "Menú", size: "sm" } };
