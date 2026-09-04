import { applicationConfig, type Meta, type StoryObj } from "@storybook/angular";
import { ApMarkdown } from "./ap-markdown";
import { provideApMarkdown } from "./provide-ap-markdown";

const RESPUESTA = [
  "El p95 agregado paso de **172 ms** a **184 ms** tras el despliegue de `4.18.2`.",
  "",
  "| servicio | p95 | error |",
  "| --- | --- | --- |",
  "| conciliacion-nocturna | 412 ms | 1,40% |",
  "| catalogo | 118 ms | 0,02% |",
  "",
  "Para confirmarlo en el cluster:",
  "",
  "```bash",
  "kubectl top pods -n eu-central-1 --sort-by=cpu",
  "```",
  "",
  "> El resto de servicios de la region sigue por debajo de 130 ms.",
  "",
  "- Revisar el indice de `liquidaciones`",
  "- Comparar con la ventana de las 02:00",
].join("\n");

const meta: Meta<ApMarkdown> = {
  title: "Layout/Markdown",
  component: ApMarkdown,
  // El motor se registra una vez en la raiz de la aplicacion, no por componente.
  decorators: [applicationConfig({ providers: [provideApMarkdown()] })],
};
export default meta;

type Story = StoryObj<ApMarkdown>;

export const Default: Story = {
  args: { data: RESPUESTA },
};

export const Streaming: Story = {
  args: {
    data: "El p95 agregado paso de **172 ms** a **184 ms** tras el desplieg",
    streaming: true,
  },
};

/** El HTML crudo se descarta y los esquemas ejecutables se degradan a texto. */
export const ContenidoNoConfiable: Story = {
  args: {
    data: [
      "Texto normal antes.",
      "",
      "<script>alert(1)</script>",
      "",
      '<img src="x" onerror="alert(1)">',
      "",
      "[enlace ejecutable](javascript:alert(1)) y [enlace legitimo](https://example.com).",
      "",
      "Texto normal despues.",
    ].join("\n"),
  },
};

export const SoloCodigo: Story = {
  args: {
    data: [
      "Bloque suelto, sin resaltado y con el eje MONO de Recursive:",
      "",
      "```ts",
      "const p95 = await metrics.p95('eu-central-1', '1h');",
      "if (p95 > UMBRAL) await pager.notify('sre-guardia');",
      "```",
      "",
      "Y `codigo en linea` dentro de la prosa.",
    ].join("\n"),
  },
};
