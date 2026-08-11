import type { Meta, StoryObj } from "@storybook/angular";
import { ApProse } from "./ap-prose";

const meta: Meta<ApProse & { content: string }> = {
  title: "Layout/Prose",
  component: ApProse,
  render: (args) => ({
    props: args,
    template: `<ap-prose>{{ content }}</ap-prose>`,
  }),
};
export default meta;

type Story = StoryObj<ApProse & { content: string }>;

export const Default: Story = {
  args: {
    content: "Bloque de contenido legible",
  },
};

export const WithFormattedContent: Story = {
  args: {
    content: "Descripción del incidente",
  },
};

export const ReleaseNotes: Story = {
  args: {
    content: "Notas de la versión",
  },
};
