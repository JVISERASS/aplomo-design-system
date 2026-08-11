import type { Meta, StoryObj } from "@storybook/angular";
import { ApCenteredPage } from "./ap-centered-page";

type CenteredPageArgs = ApCenteredPage & {
  brand?: string;
  content: string;
  footer?: string;
};

const meta: Meta<CenteredPageArgs> = {
  title: "Layout/CenteredPage",
  component: ApCenteredPage,
  render: (args) => ({
    props: args,
    template: `
      <ap-centered-page [width]="width">
        @if (brand) { <span apBrand>{{ brand }}</span> }
        {{ content }}
        @if (footer) { <span apFooter>{{ footer }}</span> }
      </ap-centered-page>`,
  }),
};
export default meta;

type Story = StoryObj<CenteredPageArgs>;

export const Default: Story = {
  args: {
    brand: "Logo",
    content: "Formulario de acceso",
    footer: "Pie de página",
    width: 380,
  },
};

export const CustomWidth: Story = {
  args: {
    brand: "Mi Marca",
    content: "Contenido centrado",
    width: 500,
  },
};

export const LoginPage: Story = {
  args: {
    brand: "Aplomo",
    content: "Acceso de usuario",
    footer: "2024 Todos los derechos reservados",
    width: "380px",
  },
};
