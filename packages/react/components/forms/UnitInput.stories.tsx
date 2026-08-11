import type { Meta, StoryObj } from "@storybook/react-vite";
import { UnitInput } from "./UnitInput";

const meta: Meta<typeof UnitInput> = {
  title: "Forms/UnitInput",
  component: UnitInput,
};
export default meta;

type Story = StoryObj<typeof UnitInput>;

export const Milliseconds: Story = { args: { label: "Tiempo de espera", unit: "ms", placeholder: "500" } };

export const Percentage: Story = { args: { label: "Capacidad", unit: "%", hint: "Entre 0 y 100", placeholder: "75" } };

export const RequestsPerSecond: Story = { args: { label: "Límite de solicitudes", unit: "req/s", placeholder: "1000" } };

export const WithError: Story = { args: { label: "Duración", unit: "s", error: "Valor fuera de rango", placeholder: "60" } };
