import type { Meta, StoryObj } from "@storybook/react-vite";
import { DetailPanel } from "./DetailPanel";

const meta: Meta<typeof DetailPanel> = {
  title: "Layout/DetailPanel",
  component: DetailPanel,
};
export default meta;

type Story = StoryObj<typeof DetailPanel>;

export const Default: Story = {
  args: {
    open: true,
    header: "Detalles",
    children: "Contenido del panel",
    footer: "Acciones",
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    open: false,
    header: "Detalles",
    children: "Contenido oculto",
  },
};

export const CustomWidth: Story = {
  args: {
    open: true,
    width: "500px",
    header: "Panel ancho",
    children: "Contenido detallado",
    onClose: () => {},
  },
};
