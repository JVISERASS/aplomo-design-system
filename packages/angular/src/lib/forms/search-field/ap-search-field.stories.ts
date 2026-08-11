import type { Meta, StoryObj } from "@storybook/angular";
import { ApSearchField } from "./ap-search-field";

const meta: Meta<ApSearchField> = {
  title: "Forms/SearchField",
  component: ApSearchField,
};
export default meta;

type Story = StoryObj<ApSearchField>;

export const Default: Story = { args: { placeholder: "Buscar..." } };

export const WithValue: Story = { args: { placeholder: "Buscar usuarios", value: "admin" } };

export const Disabled: Story = { args: { placeholder: "Búsqueda deshabilitada", disabled: true } };

export const CustomPlaceholder: Story = { args: { placeholder: "Buscar por ID, nombre o email" } };
