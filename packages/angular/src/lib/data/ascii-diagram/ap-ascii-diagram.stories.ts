import type { Meta, StoryObj } from "@storybook/angular";
import { ApAsciiDiagram } from "./ap-ascii-diagram";

/**
 * Patron para un componente cuyo contenido en React era `children`: en Angular es contenido
 * proyectado, asi que no puede viajar en `args` y hace falta un `render` con plantilla. El arg
 * se llama `content` y la plantilla lo interpola.
 *
 * `ngPreserveWhitespaces` sigue la instruccion del propio componente (ver ap-ascii-diagram.ts):
 * evita que Angular colapse la sangria del ASCII en la plantilla del consumidor.
 */
const meta: Meta<ApAsciiDiagram & { content: string }> = {
  title: "Data/AsciiDiagram",
  component: ApAsciiDiagram,
  render: (args) => ({
    props: args,
    template: `<ap-ascii-diagram [label]="label" [tone]="tone" [size]="size" ngPreserveWhitespaces>{{ content }}</ap-ascii-diagram>`,
  }),
};
export default meta;

type Story = StoryObj<ApAsciiDiagram & { content: string }>;

export const Default: Story = {
  args: {
    label: "Topología de tráfico",
    content: ` cliente ──▶ borde ──┬──▶ eu-central-1  [██████████] 88%
                   ├──▶ us-east-1     [██████████] 100%
                   └──▶ ap-south-1    [░░░░░░░░░░] drenada`,
  },
};

export const Muted: Story = {
  args: {
    label: "Flujo de datos",
    tone: "muted",
    content: ` entrada ──▶ procesador ──▶ salida`,
  },
};

export const LargeSize: Story = {
  args: {
    label: "Cronología",
    // El original React acepta `size: number` y lo vuelca tal cual en `fontSize` (px implicito).
    // El input Angular es `string` puro (CSS length), asi que el 16 numerico se expresa como "16px".
    size: "16px",
    content: ` inicio ──┬──▶ fase-1 ──┬──▶ completado
           └──▶ fase-2 ──┘`,
  },
};
