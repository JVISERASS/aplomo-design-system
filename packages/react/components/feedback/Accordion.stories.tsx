import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Feedback/Accordion",
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { id: "sec1", title: "Primera sección", meta: "3 elementos" },
      { id: "sec2", title: "Segunda sección", meta: "5 elementos" },
      { id: "sec3", title: "Tercera sección", meta: "2 elementos" },
    ],
  },
};

export const WithChildren: Story = {
  args: {
    items: [
      { id: "sec1", title: "Configuración general", children: "Ajustes básicos de la aplicación" },
      { id: "sec2", title: "Privacidad", children: "Control de datos personales" },
    ],
  },
};

export const DefaultOpen: Story = {
  args: {
    items: [
      { id: "sec1", title: "Panel abierto", meta: "por defecto" },
      { id: "sec2", title: "Panel cerrado", meta: "colapsado" },
    ],
    defaultOpen: ["sec1"],
  },
};

export const SingleSection: Story = {
  args: {
    items: [{ id: "solo", title: "Única sección", meta: "dato" }],
  },
};
