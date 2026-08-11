import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(ts|tsx)"],
  // Storybook 9+ trae los essentials integrados: no hay addon que declarar.
  addons: [],
  framework: { name: "@storybook/react-vite", options: {} },
};

export default config;
