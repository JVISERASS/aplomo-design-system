import type { Meta, StoryObj } from "@storybook/angular";
import { ApFormSection } from "./ap-form-section";

/**
 * Patron para un componente cuyo contenido en React era `children`: en Angular es contenido
 * proyectado, asi que no puede viajar en `args` y hace falta un `render` con plantilla. El arg
 * se llama `content` y la plantilla lo interpola.
 */
const meta: Meta<ApFormSection & { content: string }> = {
  title: "Forms/FormSection",
  component: ApFormSection,
  render: (args) => ({
    props: args,
    template: `
      <ap-form-section [title]="title" [description]="description" [columns]="columns">
        {{ content }}
      </ap-form-section>`,
  }),
};
export default meta;

type Story = StoryObj<ApFormSection & { content: string }>;

export const Default: Story = {
  args: {
    title: "Información general",
    description: "Datos básicos del usuario",
    content: "Contenido de campos",
  },
};

export const WithoutDescription: Story = {
  args: { title: "Configuración avanzada", content: "Opciones adicionales" },
};

export const TwoColumns: Story = {
  args: {
    title: "Detalles de contacto",
    description: "Datos de comunicación",
    columns: 2,
    content: "Campos en dos columnas",
  },
};

export const ThreeColumns: Story = {
  args: { title: "Parámetros", columns: 3, content: "Campos distribuidos" },
};
