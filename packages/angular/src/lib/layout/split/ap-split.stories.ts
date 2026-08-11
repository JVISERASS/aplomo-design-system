import type { Meta, StoryObj } from "@storybook/angular";
import { ApSplit } from "./ap-split";

type SplitArgs = ApSplit & { left?: string; right?: string };

const meta: Meta<SplitArgs> = {
  title: "Layout/Split",
  component: ApSplit,
  render: (args) => ({
    props: args,
    template: `
      <ap-split [rightWidth]="rightWidth" [collapsed]="collapsed">
        @if (left) { <span apLeft>{{ left }}</span> }
        @if (right) { <span apRight>{{ right }}</span> }
      </ap-split>`,
  }),
};
export default meta;

type Story = StoryObj<SplitArgs>;

export const Default: Story = {
  args: {
    left: "Lista de elementos",
    right: "Detalle seleccionado",
    rightWidth: "400px",
    collapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    left: "Lista completa",
    right: "Detalle oculto",
    collapsed: true,
  },
};

export const CustomRightWidth: Story = {
  args: {
    left: "Navegación",
    right: "Vista previa",
    rightWidth: "600px",
    collapsed: false,
  },
};
