import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommandPalette } from "./CommandPalette";

const meta: Meta<typeof CommandPalette> = {
  title: "Navigation/CommandPalette",
  component: CommandPalette,
};
export default meta;

type Story = StoryObj<typeof CommandPalette>;

export const Default: Story = {
  args: {
    open: true,
    items: [
      {
        id: "s1",
        label: "SVC-4820-DE",
        hint: "eu-central-1",
        data: true,
        icon: "server",
      },
      {
        label: "Drenar tráfico",
        hint: "acción",
        icon: "activity",
      },
      {
        label: "Ver logs",
        hint: "diag",
        icon: "terminal",
      },
    ],
    placeholder: "Escribe un comando...",
  },
};

export const Closed: Story = {
  args: {
    open: false,
    items: [
      { label: "Opción 1", hint: "hint1", icon: "search" },
      { label: "Opción 2", hint: "hint2", icon: "settings" },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    open: true,
    items: [
      { label: "Crear cluster", hint: "infraestructura" },
      { label: "Eliminar nodo", hint: "admin", data: true },
      { label: "Reiniciar servicio", hint: "operación" },
    ],
    placeholder: "Buscar...",
  },
};

export const DataIdentifiers: Story = {
  args: {
    open: true,
    items: [
      {
        id: "id-prod-1",
        label: "prod-eu-01",
        data: true,
        icon: "database",
      },
      {
        id: "id-prod-2",
        label: "prod-us-02",
        data: true,
        icon: "database",
      },
      {
        label: "Nueva conexión",
        icon: "plus",
      },
    ],
  },
};
