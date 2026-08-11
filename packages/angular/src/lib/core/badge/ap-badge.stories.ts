import type { Meta, StoryObj } from "@storybook/angular";
import { ApBadge } from "./ap-badge";

/**
 * Patron para un componente cuyo contenido en React era `children`: en Angular es contenido
 * proyectado, asi que no puede viajar en `args` y hace falta un `render` con plantilla. El arg
 * se llama `content` y la plantilla lo interpola.
 */
const meta: Meta<ApBadge & { content: string }> = {
  title: "Core/Badge",
  component: ApBadge,
  render: (args) => ({
    props: args,
    template: `<ap-badge [tone]="tone">{{ content }}</ap-badge>`,
  }),
};
export default meta;

type Story = StoryObj<ApBadge & { content: string }>;

export const Default: Story = { args: { content: "Neutral", tone: "neutral" } };
export const Ok: Story = { args: { content: "Completado", tone: "ok" } };
export const Warning: Story = { args: { content: "Advertencia", tone: "warn" } };
export const Error: Story = { args: { content: "Error", tone: "error" } };
export const Accent: Story = { args: { content: "Destacado", tone: "accent" } };
