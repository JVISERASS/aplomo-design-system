import type { Meta, StoryObj } from "@storybook/angular";
import { ApTooltip } from "./ap-tooltip";

/**
 * Patron para un componente cuyo contenido en React era `children`: en Angular es contenido
 * proyectado, asi que no puede viajar en `args` y hace falta un `render` con plantilla. El arg
 * se llama `content` y la plantilla lo interpola.
 */
const meta: Meta<ApTooltip & { content: string }> = {
  title: "Feedback/Tooltip",
  component: ApTooltip,
  render: (args) => ({
    props: args,
    template: `<ap-tooltip [label]="label">{{ content }}</ap-tooltip>`,
  }),
};
export default meta;

type Story = StoryObj<ApTooltip & { content: string }>;

export const Default: Story = {
  args: { label: "Información", content: "Botón" },
};

export const WithDescription: Story = {
  args: { label: "Guarda los cambios realizados en el documento", content: "Guardar" },
};

export const LongText: Story = {
  args: {
    label: "Presiona Ctrl+S para guardar rápidamente. Los cambios se sincronizan automáticamente cada 30 segundos.",
    content: "Ícono de información",
  },
};

export const ActionButton: Story = {
  args: { label: "Eliminar elemento", content: "Eliminar" },
};
