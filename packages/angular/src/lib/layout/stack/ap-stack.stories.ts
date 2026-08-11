import type { Meta, StoryObj } from "@storybook/angular";
import { ApStack } from "./ap-stack";

/**
 * El original pasaba `children` como un array de nodos: aqui no hay slot con nombre, solo
 * `<ng-content />`, asi que se proyecta una lista de items con `@for` en vez de un unico `content`.
 */
type StackArgs = ApStack & { items: string[] };

const meta: Meta<StackArgs> = {
  title: "Layout/Stack",
  component: ApStack,
  render: (args) => ({
    props: args,
    template: `
      <ap-stack [direction]="direction" [gap]="gap" [align]="align" [justify]="justify" [wrap]="wrap">
        @for (item of items; track $index) {
          <div>{{ item }}</div>
        }
      </ap-stack>`,
  }),
};
export default meta;

type Story = StoryObj<StackArgs>;

export const Default: Story = {
  args: {
    direction: "column",
    gap: "16px",
    items: ["Primer elemento", "Segundo elemento", "Tercer elemento"],
  },
};

export const Horizontal: Story = {
  args: {
    direction: "row",
    gap: "12px",
    items: ["Izquierda", "Centro", "Derecha"],
  },
};

export const WithAlignment: Story = {
  args: {
    direction: "row",
    gap: "16px",
    align: "center",
    justify: "space-between",
    items: ["Inicio", "Fin"],
  },
};

export const Wrapped: Story = {
  args: {
    direction: "row",
    gap: "8px",
    wrap: true,
    items: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3", "Etiqueta 4"],
  },
};
