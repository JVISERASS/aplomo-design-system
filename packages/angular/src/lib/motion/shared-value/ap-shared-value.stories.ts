import type { Meta, StoryObj } from "@storybook/angular";
import { ApSharedValue } from "./ap-shared-value";

/**
 * `children` del original es contenido proyectado (CONVENTIONS 3): arg `content` + plantilla.
 * `style` y `className` eran passthrough de props DOM de React; ApSharedValue no los declara
 * como input (su unico input es `sharedKey`, ver ap-shared-value.ts), asi que se aplican tal
 * cual sobre el host en la plantilla de cada story -- Angular permite `style`/`class` en
 * cualquier elemento, sean o no inputs del componente.
 */
const meta: Meta<ApSharedValue & { content: string }> = {
  title: "Motion/SharedValue",
  component: ApSharedValue,
  render: (args) => ({
    props: args,
    template: `<ap-shared-value [sharedKey]="sharedKey">{{ content }}</ap-shared-value>`,
  }),
};
export default meta;

type Story = StoryObj<ApSharedValue & { content: string }>;

export const Default: Story = {
  args: { sharedKey: "user-123", content: "Usuario ID" },
};

export const WithStyle: Story = {
  args: { sharedKey: "identifier-key", content: "Identificador" },
  render: (args) => ({
    props: args,
    template: `<ap-shared-value [sharedKey]="sharedKey" style="font-size: var(--ap-size-23); font-weight: 700">{{ content }}</ap-shared-value>`,
  }),
};

export const LongContent: Story = {
  args: { sharedKey: "detailed-value", content: "Referencia Compartida" },
  render: (args) => ({
    props: args,
    template: `<ap-shared-value [sharedKey]="sharedKey" class="shared-value-element">{{ content }}</ap-shared-value>`,
  }),
};
