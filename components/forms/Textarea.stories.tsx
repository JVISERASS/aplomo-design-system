import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { label: "Notas", placeholder: "Escribe tus observaciones..." } };

export const WithHint: Story = { args: { label: "Descripción", hint: "Máximo 500 caracteres", placeholder: "Describe el problema en detalle" } };

export const WithError: Story = { args: { label: "Comentario", error: "Campo requerido", placeholder: "Por favor, completa este campo" } };

export const Disabled: Story = { args: { label: "Informe", disabled: true, defaultValue: "Información archivada" } };
