import type { Meta, StoryObj } from "@storybook/angular";
import { ApTextarea } from "./ap-textarea";

const meta: Meta<ApTextarea> = {
  title: "Forms/Textarea",
  component: ApTextarea,
};
export default meta;

type Story = StoryObj<ApTextarea>;

export const Default: Story = { args: { label: "Notas", placeholder: "Escribe tus observaciones..." } };

export const WithHint: Story = { args: { label: "Descripción", hint: "Máximo 500 caracteres", placeholder: "Describe el problema en detalle" } };

export const WithError: Story = { args: { label: "Comentario", error: "Campo requerido", placeholder: "Por favor, completa este campo" } };

export const Disabled: Story = { args: { label: "Informe", disabled: true, value: "Información archivada" } };
