import type { Meta, StoryObj } from "@storybook/angular";
import { ApAccordion } from "./ap-accordion";

const meta: Meta<ApAccordion> = {
  title: "Feedback/Accordion",
  component: ApAccordion,
};
export default meta;

type Story = StoryObj<ApAccordion>;

export const Default: Story = {
  args: {
    items: [
      { id: "sec1", title: "Primera sección", meta: "3 elementos" },
      { id: "sec2", title: "Segunda sección", meta: "5 elementos" },
      { id: "sec3", title: "Tercera sección", meta: "2 elementos" },
    ],
  },
};

/**
 * En React `children` de cada item era un ReactNode plano; aqui `AccordionItem.children` es un
 * `TemplateRef`, que solo existe dentro de una plantilla, asi que no puede viajar en `args`. Los
 * paneles se declaran como `<ng-template>` con nombre y se referencian desde el array `items`.
 */
export const WithChildren: Story = {
  render: () => ({
    template: `
      <ng-template #sec1Tpl>Ajustes básicos de la aplicación</ng-template>
      <ng-template #sec2Tpl>Control de datos personales</ng-template>
      <ap-accordion
        [items]="[
          { id: 'sec1', title: 'Configuración general', children: sec1Tpl },
          { id: 'sec2', title: 'Privacidad', children: sec2Tpl }
        ]"
      />`,
  }),
};

export const DefaultOpen: Story = {
  args: {
    items: [
      { id: "sec1", title: "Panel abierto", meta: "por defecto" },
      { id: "sec2", title: "Panel cerrado", meta: "colapsado" },
    ],
    defaultOpen: ["sec1"],
  },
};

export const SingleSection: Story = {
  args: {
    items: [{ id: "solo", title: "Única sección", meta: "dato" }],
  },
};
