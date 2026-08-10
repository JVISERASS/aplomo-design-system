import type { Meta, StoryObj } from "@storybook/react";
import { FileDrop } from "./FileDrop";

const meta: Meta<typeof FileDrop> = {
  title: "Feedback/FileDrop",
  component: FileDrop,
};
export default meta;

type Story = StoryObj<typeof FileDrop>;

export const Default: Story = {
  args: {
    label: "Subir archivo",
    hint: "Arrastra o haz clic para seleccionar",
  },
};

export const WithAccept: Story = {
  args: {
    label: "Subir certificado",
    hint: "Solo archivos .pem o .cer",
    accept: ".pem,.cer",
  },
};

export const WithFiles: Story = {
  args: {
    label: "Archivos cargados",
    files: [
      { name: "documento.pdf", size: "2.5 MB" },
      { name: "imagen.png", size: "1.2 MB" },
    ],
  },
};

export const ServiceImport: Story = {
  args: {
    label: "Importar servicio",
    hint: "Sube el archivo de configuración JSON",
    files: [{ name: "config.json", size: "512 KB" }],
    accept: ".json",
  },
};
