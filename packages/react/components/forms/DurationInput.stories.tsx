import type { Meta, StoryObj } from "@storybook/react-vite";
import { DurationInput } from "./DurationInput";

const meta: Meta<typeof DurationInput> = {
  title: "Forms/DurationInput",
  component: DurationInput,
};
export default meta;

type Story = StoryObj<typeof DurationInput>;

export const Default: Story = { args: { label: "Duración", value: 30, unit: "s" } };

export const Minutes: Story = { args: { label: "Tiempo de espera", value: 5, unit: "min", hint: "Máximo 60 minutos" } };

export const Hours: Story = { args: { label: "Ventana de tiempo", value: 2, unit: "h" } };

export const Days: Story = { args: { label: "Período", value: 7, unit: "d", disabled: true } };
