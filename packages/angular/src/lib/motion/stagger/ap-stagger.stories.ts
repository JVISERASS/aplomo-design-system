import type { Meta, StoryObj } from "@storybook/angular";
import { ApStagger } from "./ap-stagger";

/**
 * `children` del original es markup (varios `<div>`/`<p>`), no texto: va directo en la
 * plantilla de cada story, no como arg (CONVENTIONS 3). `as` desaparece: el host `<ap-stagger>`
 * ES el contenedor siempre, no hay forma de cambiar la etiqueta del componente desde fuera (lo
 * documenta el propio ap-stagger.ts). Cada story solo enlaza los inputs que fija en el original.
 */
const meta: Meta<ApStagger> = {
  title: "Motion/Stagger",
  component: ApStagger,
};
export default meta;

type Story = StoryObj<ApStagger>;

export const Default: Story = {
  render: () => ({
    template: `
      <ap-stagger>
        <div>Elemento 1</div>
        <div>Elemento 2</div>
        <div>Elemento 3</div>
      </ap-stagger>`,
  }),
};

export const WithCustomStep: Story = {
  args: { step: 100 },
  render: (args) => ({
    props: args,
    template: `
      <ap-stagger [step]="step">
        <div>Primera Fila</div>
        <div>Segunda Fila</div>
        <div>Tercera Fila</div>
        <div>Cuarta Fila</div>
      </ap-stagger>`,
  }),
};

export const WithMaxLimit: Story = {
  args: { max: 3 },
  render: (args) => ({
    props: args,
    template: `
      <ap-stagger [max]="max">
        <div>Item A</div>
        <div>Item B</div>
        <div>Item C</div>
        <div>Item D</div>
        <div>Item E</div>
      </ap-stagger>`,
  }),
};

export const WithDifferentElement: Story = {
  args: { step: 75 },
  render: (args) => ({
    props: args,
    template: `
      <ap-stagger [step]="step">
        <p>Párrafo 1</p>
        <p>Párrafo 2</p>
        <p>Párrafo 3</p>
      </ap-stagger>`,
  }),
};
