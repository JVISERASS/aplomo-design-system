import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: "Nombre", placeholder: "Ingresa tu nombre" } };

export const WithHint: Story = { args: { label: "Correo electrónico", hint: "Usaremos esto para tu cuenta", placeholder: "usuario@ejemplo.com" } };

export const WithError: Story = { args: { label: "Teléfono", error: "Formato inválido", placeholder: "+34 600 000 000" } };

export const DataField: Story = { args: { label: "Importe", data: true, placeholder: "1.234,56", type: "text" } };
