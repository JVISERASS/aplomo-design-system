import type { Meta, StoryObj } from "@storybook/react";
import { AsciiDiagram } from "./AsciiDiagram";

const meta: Meta<typeof AsciiDiagram> = {
  title: "Data/AsciiDiagram",
  component: AsciiDiagram,
};
export default meta;

type Story = StoryObj<typeof AsciiDiagram>;

export const Default: Story = {
  args: {
    label: "Topología de tráfico",
    children: ` cliente ──▶ borde ──┬──▶ eu-central-1  [██████████] 88%
                   ├──▶ us-east-1     [██████████] 100%
                   └──▶ ap-south-1    [░░░░░░░░░░] drenada`,
  },
};

export const Muted: Story = {
  args: {
    label: "Flujo de datos",
    tone: "muted",
    children: ` entrada ──▶ procesador ──▶ salida`,
  },
};

export const LargeSize: Story = {
  args: {
    label: "Cronología",
    size: 16,
    children: ` inicio ──┬──▶ fase-1 ──┬──▶ completado
           └──▶ fase-2 ──┘`,
  },
};
