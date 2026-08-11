import type { Meta, StoryObj } from "@storybook/angular";
import { ApDurationInput } from "./ap-duration-input";

const meta: Meta<ApDurationInput> = {
  title: "Forms/DurationInput",
  component: ApDurationInput,
};
export default meta;

type Story = StoryObj<ApDurationInput>;

export const Default: Story = { args: { label: "Duración", value: 30, unit: "s" } };

export const Minutes: Story = {
  args: { label: "Tiempo de espera", value: 5, unit: "min", hint: "Máximo 60 minutos" },
};

export const Hours: Story = { args: { label: "Ventana de tiempo", value: 2, unit: "h" } };

export const Days: Story = { args: { label: "Período", value: 7, unit: "d", disabled: true } };
