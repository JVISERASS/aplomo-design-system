import type { Meta, StoryObj } from "@storybook/angular";
import { ApPanel } from "./ap-panel";

/**
 * Patron para un componente con SLOTS con nombre: lo que en React era una prop que recibia un
 * ReactNode (`actions`) aqui es contenido proyectado con `select`, asi que va en la plantilla
 * marcado con su atributo, no en `args`.
 */
type PanelArgs = ApPanel & { content: string; actions?: string };

const meta: Meta<PanelArgs> = {
  title: "Layout/Panel",
  component: ApPanel,
  render: (args) => ({
    props: args,
    template: `
      <ap-panel [title]="title" [padded]="padded">
        @if (actions) { <span apActions>{{ actions }}</span> }
        {{ content }}
      </ap-panel>`,
  }),
};
export default meta;

type Story = StoryObj<PanelArgs>;

export const Default: Story = {
  args: { title: "Información", content: "Contenido del panel", padded: true },
};

export const WithActions: Story = {
  args: {
    title: "Configuración",
    content: "Opciones disponibles",
    actions: "Guardar",
    padded: true,
  },
};

export const Unpadded: Story = {
  args: { title: "Tabla", content: "Contenido sin relleno", padded: false },
};
