import type { Preview } from "@storybook/react";
import "../../tokens/styles.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

export default preview;
