import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeader } from "./PageHeader";

const meta: Meta<typeof PageHeader> = {
  title: "Layout/PageHeader",
  component: PageHeader,
};
export default meta;

type Story = StoryObj<typeof PageHeader>;

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
