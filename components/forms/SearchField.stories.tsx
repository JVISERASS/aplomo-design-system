import type { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Forms/SearchField",
  component: SearchField,
};
export default meta;

type Story = StoryObj<typeof SearchField>;

export const Default: Story = { args: { placeholder: "Buscar..." } };

export const WithValue: Story = { args: { placeholder: "Buscar usuarios", defaultValue: "admin" } };

export const Disabled: Story = { args: { placeholder: "Búsqueda deshabilitada", disabled: true } };

export const CustomPlaceholder: Story = { args: { placeholder: "Buscar por ID, nombre o email" } };
