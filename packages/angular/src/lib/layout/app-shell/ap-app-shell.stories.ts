import type { Meta, StoryObj } from "@storybook/angular";
import { ApAppShell } from "./ap-app-shell";

type AppShellArgs = ApAppShell & {
  topbar?: string;
  nav?: string;
  content: string;
  aside?: string;
};

const meta: Meta<AppShellArgs> = {
  title: "Layout/AppShell",
  component: ApAppShell,
  render: (args) => ({
    props: args,
    template: `
      <ap-app-shell>
        @if (topbar) { <div apTopbar>{{ topbar }}</div> }
        @if (nav) { <div apNav>{{ nav }}</div> }
        {{ content }}
        @if (aside) { <div apAside>{{ aside }}</div> }
      </ap-app-shell>`,
  }),
};
export default meta;

type Story = StoryObj<AppShellArgs>;

export const Default: Story = {
  args: {
    topbar: "TopBar",
    nav: "Navegación",
    content: "Contenido principal",
    aside: "Panel lateral",
  },
};

export const WithoutAside: Story = {
  args: {
    topbar: "TopBar",
    nav: "Navegación",
    content: "Contenido principal sin panel lateral",
  },
};

export const MinimalLayout: Story = {
  args: {
    content: "Contenido único",
  },
};
