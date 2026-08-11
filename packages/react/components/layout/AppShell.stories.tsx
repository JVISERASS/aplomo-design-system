import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppShell } from "./AppShell";

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
};
export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  args: {
    topbar: "TopBar",
    nav: "Navegación",
    children: "Contenido principal",
    aside: "Panel lateral",
  },
};

export const WithoutAside: Story = {
  args: {
    topbar: "TopBar",
    nav: "Navegación",
    children: "Contenido principal sin panel lateral",
  },
};

export const MinimalLayout: Story = {
  args: {
    children: "Contenido único",
  },
};
