import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopBar } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Layout/TopBar",
  component: TopBar,
};
export default meta;

type Story = StoryObj<typeof TopBar>;

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
