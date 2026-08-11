import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "./Panel";

const meta: Meta<typeof Panel> = {
  title: "Layout/Panel",
  component: Panel,
};
export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    title: "Información",
    children: "Contenido del panel",
    padded: true,
  },
};

export const WithActions: Story = {
  args: {
    title: "Configuración",
    children: "Opciones disponibles",
    actions: "Guardar",
    padded: true,
  },
};

export const Unpadded: Story = {
  args: {
    title: "Tabla",
    children: "Contenido sin relleno",
    padded: false,
  },
};
