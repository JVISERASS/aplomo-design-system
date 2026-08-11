import type { Meta, StoryObj } from "@storybook/angular";
import { ApColumns } from "./ap-columns";

/**
 * El original pasaba `children` como un array de nodos: aqui no hay slot con nombre, solo
 * `<ng-content />`, asi que se proyecta una lista de items con `@for` en vez de un unico `content`.
 */
type ColumnsArgs = ApColumns & { items: string[] };

const meta: Meta<ColumnsArgs> = {
  title: "Layout/Columns",
  component: ApColumns,
  render: (args) => ({
    props: args,
    template: `
      <ap-columns [count]="count" [even]="even" [min]="min" [gap]="gap" [align]="align">
        @for (item of items; track $index) {
          <div>{{ item }}</div>
        }
      </ap-columns>`,
  }),
};
export default meta;

type Story = StoryObj<ColumnsArgs>;

export const Default: Story = {
  args: {
    items: ["Columna 1", "Columna 2", "Columna 3"],
    gap: "16px",
  },
};

export const ExactCount: Story = {
  args: {
    count: 2,
    even: true,
    items: ["Izquierda", "Derecha"],
    gap: "24px",
  },
};

export const ResponsiveColumns: Story = {
  args: {
    min: 250,
    gap: "20px",
    items: ["Item", "Item", "Item", "Item"],
  },
};

export const WithAlignment: Story = {
  args: {
    gap: "16px",
    align: "center",
    items: ["Alineado al centro", "Alineado al centro"],
  },
};
