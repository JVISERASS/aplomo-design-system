import type { Meta, StoryObj } from "@storybook/angular";
import { ApDialog } from "./ap-dialog";

/**
 * `footer` en React era un ReactNode; aqui es contenido proyectado con `select="[apFooter]"`, asi
 * que va en la plantilla marcado con su atributo (patron de Layout/Panel).
 */
type DialogArgs = ApDialog & { footer?: string };

const meta: Meta<DialogArgs> = {
  title: "Feedback/Dialog",
  component: ApDialog,
  render: (args) => ({
    props: args,
    template: `
      <ap-dialog [open]="open" [title]="title" [description]="description" [width]="width">
        @if (footer) { <span apFooter>{{ footer }}</span> }
      </ap-dialog>`,
  }),
};
export default meta;

type Story = StoryObj<DialogArgs>;

export const Default: Story = {
  args: {
    open: true,
    title: "Confirmar acción",
    description: "¿Está seguro de que desea continuar?",
  },
};

export const WithFooter: Story = {
  args: {
    open: true,
    title: "Eliminar elemento",
    description: "Esta acción no puede deshacerse.",
    footer: "Botones de acción aquí",
  },
};

export const CustomWidth: Story = {
  args: {
    open: true,
    title: "Diálogo personalizado",
    description: "Ancho personalizado",
    width: 600,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    title: "Diálogo oculto",
  },
};
