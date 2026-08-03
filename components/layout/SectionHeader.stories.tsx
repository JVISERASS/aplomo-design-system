import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "Layout/SectionHeader",
  component: SectionHeader,
};
export default meta;

type Story = StoryObj<typeof SectionHeader>;

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
