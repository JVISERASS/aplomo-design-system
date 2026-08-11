import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormSection } from "./FormSection";

const meta: Meta<typeof FormSection> = {
  title: "Forms/FormSection",
  component: FormSection,
};
export default meta;

type Story = StoryObj<typeof FormSection>;

export const Default: Story = { args: { title: "Información general", description: "Datos básicos del usuario", children: "Contenido de campos" } };

export const WithoutDescription: Story = { args: { title: "Configuración avanzada", children: "Opciones adicionales" } };

export const TwoColumns: Story = { args: { title: "Detalles de contacto", description: "Datos de comunicación", columns: 2, children: "Campos en dos columnas" } };

export const ThreeColumns: Story = { args: { title: "Parámetros", columns: 3, children: "Campos distribuidos" } };
