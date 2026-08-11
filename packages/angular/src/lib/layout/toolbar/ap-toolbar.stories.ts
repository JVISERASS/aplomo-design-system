import type { Meta, StoryObj } from "@storybook/angular";
import { ApToolbar } from "./ap-toolbar";

type ToolbarArgs = ApToolbar & { left?: string; right?: string };

const meta: Meta<ToolbarArgs> = {
  title: "Layout/Toolbar",
  component: ApToolbar,
  render: (args) => ({
    props: args,
    template: `
      <ap-toolbar>
        @if (left) { <span apLeft>{{ left }}</span> }
        @if (right) { <span apRight>{{ right }}</span> }
      </ap-toolbar>`,
  }),
};
export default meta;

type Story = StoryObj<ToolbarArgs>;

export const Default: Story = {
  args: {
    left: "Filtros",
    right: "Acciones",
  },
};

export const OnlyLeft: Story = {
  args: {
    left: "Búsqueda",
  },
};

export const OnlyRight: Story = {
  args: {
    right: "Crear nuevo",
  },
};
