import type { Meta, StoryObj } from "@storybook/angular";
import { ApSegmentedControl } from "./ap-segmented-control";

const meta: Meta<ApSegmentedControl> = {
  title: "Forms/SegmentedControl",
  component: ApSegmentedControl,
};
export default meta;

type Story = StoryObj<ApSegmentedControl>;

export const Default: Story = { args: { options: ["Lista", "Cuadrícula"], value: "Lista" } };

export const ThreeOptions: Story = { args: { options: ["Día", "Semana", "Mes"], size: "md", value: "Día" } };

export const DataOptions: Story = { args: { options: ["10%", "25%", "50%"], data: true, value: "25%" } };

export const Small: Story = { args: { options: ["Sí", "No"], size: "sm", value: "Sí" } };
