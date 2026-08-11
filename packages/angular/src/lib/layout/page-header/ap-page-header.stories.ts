import type { Meta, StoryObj } from "@storybook/angular";
import { ApPageHeader } from "./ap-page-header";

type PageHeaderArgs = ApPageHeader & { meta?: string; actions?: string };

const meta: Meta<PageHeaderArgs> = {
  title: "Layout/PageHeader",
  component: ApPageHeader,
  render: (args) => ({
    props: args,
    template: `
      <ap-page-header [eyebrow]="eyebrow" [title]="title">
        @if (meta) { <span apMeta>{{ meta }}</span> }
        @if (actions) { <span apActions>{{ actions }}</span> }
      </ap-page-header>`,
  }),
};
export default meta;

type Story = StoryObj<PageHeaderArgs>;

export const Default: Story = {
  args: {
    eyebrow: "Sección",
    title: "Título de la página",
    meta: "Información adicional",
    actions: "Acciones",
  },
};

export const WithoutMeta: Story = {
  args: {
    eyebrow: "Inicio",
    title: "Bienvenida",
  },
};

export const FullFeatured: Story = {
  args: {
    eyebrow: "Proyectos",
    title: "Mis proyectos",
    meta: "3 activos",
    actions: "Crear nuevo",
  },
};
