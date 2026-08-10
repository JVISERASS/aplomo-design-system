// La hoja de tokens se carga con la opción `styles` del builder en angular.json, no con un
// import de TypeScript: así no hace falta declarar un módulo para los .css.
import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};

export default preview;
