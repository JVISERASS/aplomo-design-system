import type { Meta, StoryObj } from "@storybook/react";
import { LogStream } from "./LogStream";

const meta: Meta<typeof LogStream> = {
  title: "Data/LogStream",
  component: LogStream,
};
export default meta;

type Story = StoryObj<typeof LogStream>;

export const Default: Story = {
  args: {
    lines: [
      { at: "14:02:11", level: "OK", text: "canaria 100% · 18 nodos" },
      { at: "14:02:14", level: "WARN", text: "p95 184 ms" },
      { at: "14:02:15", level: "INFO", text: "Continuando despliegue..." },
    ],
  },
};

export const WithErrors: Story = {
  args: {
    lines: [
      { at: "14:05:01", level: "INFO", text: "Iniciando validación" },
      { at: "14:05:03", level: "OK", text: "Schema validado" },
      { at: "14:05:05", level: "ERROR", text: "Conexión perdida" },
      { at: "14:05:08", level: "WARN", text: "Reintentando..." },
    ],
    height: 300,
  },
};

export const Follow: Story = {
  args: {
    lines: [
      { at: "10:30:00", level: "INFO", text: "Servicio iniciado" },
      { at: "10:30:05", level: "OK", text: "Puerto 8080 escuchando" },
    ],
    follow: true,
    height: 250,
  },
};
