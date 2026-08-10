import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl } from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Forms/SegmentedControl",
  component: SegmentedControl,
};
export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = { args: { options: ["Lista", "Cuadrícula"], value: "Lista" } };

export const ThreeOptions: Story = { args: { options: ["Día", "Semana", "Mes"], size: "md", value: "Día" } };

export const DataOptions: Story = { args: { options: ["10%", "25%", "50%"], data: true, value: "25%" } };

export const Small: Story = { args: { options: ["Sí", "No"], size: "sm", value: "Sí" } };
