import type { Meta, StoryObj } from "@storybook/react-vite";
import { CenteredPage } from "./CenteredPage";

const meta: Meta<typeof CenteredPage> = {
  title: "Layout/CenteredPage",
  component: CenteredPage,
};
export default meta;

type Story = StoryObj<typeof CenteredPage>;

export const Default: Story = {
  args: {
    brand: "Logo",
    children: "Formulario de acceso",
    footer: "Pie de página",
    width: 380,
  },
};

export const CustomWidth: Story = {
  args: {
    brand: "Mi Marca",
    children: "Contenido centrado",
    width: 500,
  },
};

export const LoginPage: Story = {
  args: {
    brand: "Aplomo",
    children: "Acceso de usuario",
    footer: "2024 Todos los derechos reservados",
    width: "380px",
  },
};
