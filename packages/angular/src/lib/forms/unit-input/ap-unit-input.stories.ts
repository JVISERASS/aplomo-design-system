import type { Meta, StoryObj } from "@storybook/angular";
import { ApUnitInput } from "./ap-unit-input";

const meta: Meta<ApUnitInput> = {
  title: "Forms/UnitInput",
  component: ApUnitInput,
};
export default meta;

type Story = StoryObj<ApUnitInput>;

export const Milliseconds: Story = { args: { label: "Tiempo de espera", unit: "ms", placeholder: "500" } };

export const Percentage: Story = { args: { label: "Capacidad", unit: "%", hint: "Entre 0 y 100", placeholder: "75" } };

export const RequestsPerSecond: Story = { args: { label: "Límite de solicitudes", unit: "req/s", placeholder: "1000" } };

export const WithError: Story = { args: { label: "Duración", unit: "s", error: "Valor fuera de rango", placeholder: "60" } };
