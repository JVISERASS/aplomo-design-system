import type { Meta, StoryObj } from "@storybook/angular";
import { ApSectionHeader } from "./ap-section-header";

type SectionHeaderArgs = ApSectionHeader & { actions?: string };

const meta: Meta<SectionHeaderArgs> = {
  title: "Layout/SectionHeader",
  component: ApSectionHeader,
  render: (args) => ({
    props: args,
    template: `
      <ap-section-header [label]="label" [title]="title" [meta]="meta">
        @if (actions) { <span apActions>{{ actions }}</span> }
      </ap-section-header>`,
  }),
};
export default meta;

type Story = StoryObj<SectionHeaderArgs>;

export const Default: Story = {
  args: {
    label: "Configuración",
    title: "Preferencias de usuario",
    meta: "3 elementos",
    actions: "Editar",
  },
};

export const SimpleHeader: Story = {
  args: {
    label: "General",
    title: "Información básica",
  },
};

export const WithoutLabel: Story = {
  args: {
    title: "Sección importante",
    meta: "Actualizado hace 2 horas",
  },
};
