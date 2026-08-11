import type { Meta, StoryObj } from "@storybook/angular";
import { ApEmptyState } from "./ap-empty-state";

/**
 * `action` en React era un ReactNode; aqui es contenido proyectado con `select="[apAction]"`, asi
 * que va en la plantilla marcado con su atributo (patron de Layout/Panel).
 */
type EmptyStateArgs = ApEmptyState & { action?: string };

const meta: Meta<EmptyStateArgs> = {
  title: "Feedback/EmptyState",
  component: ApEmptyState,
  render: (args) => ({
    props: args,
    template: `
      <ap-empty-state [title]="title" [description]="description">
        @if (action) { <span apAction>{{ action }}</span> }
      </ap-empty-state>`,
  }),
};
export default meta;

type Story = StoryObj<EmptyStateArgs>;

export const Default: Story = {
  args: {
    title: "Sin resultados",
  },
};

export const WithDescription: Story = {
  args: {
    title: "No hay datos disponibles",
    description: "Intente ajustar los filtros o búsqueda",
  },
};

export const WithAction: Story = {
  args: {
    title: "Lista vacía",
    description: "Cree su primer elemento para comenzar",
    action: "Crear elemento",
  },
};

export const CompleteExample: Story = {
  args: {
    title: "Bandeja de entrada vacía",
    description: "No tienes mensajes sin leer",
    action: "Ir a mensajes antiguos",
  },
};
