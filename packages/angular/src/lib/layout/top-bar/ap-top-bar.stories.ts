import type { Meta, StoryObj } from "@storybook/angular";
import { ApTopBar } from "./ap-top-bar";

type TopBarArgs = ApTopBar & { brand?: string; center?: string; right?: string };

const meta: Meta<TopBarArgs> = {
  title: "Layout/TopBar",
  component: ApTopBar,
  render: (args) => ({
    props: args,
    template: `
      <ap-top-bar [user]="user">
        @if (brand) { <span apBrand>{{ brand }}</span> }
        @if (center) { <span apCenter>{{ center }}</span> }
        @if (right) { <span apRight>{{ right }}</span> }
      </ap-top-bar>`,
  }),
};
export default meta;

type Story = StoryObj<TopBarArgs>;

export const Default: Story = {
  args: {
    brand: "Aplomo",
    center: "Título de la aplicación",
    right: "Configuración",
    user: { name: "Juan Pérez", meta: "Administrador" },
  },
};

export const MinimalTopBar: Story = {
  args: {
    brand: "Logo",
  },
};

export const WithUser: Story = {
  args: {
    brand: "Mi App",
    center: "Inicio",
    user: { name: "María García" },
  },
};
