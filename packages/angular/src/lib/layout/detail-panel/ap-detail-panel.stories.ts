import type { Meta, StoryObj } from "@storybook/angular";
import { ApDetailPanel } from "./ap-detail-panel";

type DetailPanelArgs = ApDetailPanel & {
  header?: string;
  content: string;
  footer?: string;
};

const meta: Meta<DetailPanelArgs> = {
  title: "Layout/DetailPanel",
  component: ApDetailPanel,
  render: (args) => ({
    props: args,
    template: `
      <ap-detail-panel [open]="open" [width]="width">
        @if (header) { <span apHeader>{{ header }}</span> }
        {{ content }}
        @if (footer) { <span apFooter>{{ footer }}</span> }
      </ap-detail-panel>`,
  }),
};
export default meta;

type Story = StoryObj<DetailPanelArgs>;

export const Default: Story = {
  args: {
    open: true,
    header: "Detalles",
    content: "Contenido del panel",
    footer: "Acciones",
  },
};

export const Closed: Story = {
  args: {
    open: false,
    header: "Detalles",
    content: "Contenido oculto",
  },
};

export const CustomWidth: Story = {
  args: {
    open: true,
    width: "500px",
    header: "Panel ancho",
    content: "Contenido detallado",
  },
};
