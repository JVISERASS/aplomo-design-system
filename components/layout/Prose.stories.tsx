import type { Meta, StoryObj } from "@storybook/react";
import { Prose } from "./Prose";

const meta: Meta<typeof Prose> = {
  title: "Layout/Prose",
  component: Prose,
};
export default meta;

type Story = StoryObj<typeof Prose>;

export const Default: Story = {
  args: {
    children: "Bloque de contenido legible",
  },
};

export const WithFormattedContent: Story = {
  args: {
    children: "Descripción del incidente",
  },
};

export const ReleaseNotes: Story = {
  args: {
    children: "Notas de la versión",
  },
};
