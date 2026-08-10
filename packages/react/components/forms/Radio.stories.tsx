import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { options: ["Opción A", "Opción B", "Opción C"], value: "Opción A" } };

export const Column: Story = { args: { options: ["Inicio", "Intermedio", "Avanzado"], direction: "column", value: "Inicio" } };

export const WithHints: Story = { args: { options: [{ value: "opt1", label: "Rápido", hint: "Procesamiento inmediato" }, { value: "opt2", label: "Normal", hint: "En 24 horas" }], value: "opt1" } };

export const Disabled: Story = { args: { options: ["Opción 1", "Opción 2"], disabled: true } };
