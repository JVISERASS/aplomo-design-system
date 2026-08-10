import type { Meta, StoryObj } from "@storybook/react";
import { SideNav } from "./SideNav";

const meta: Meta<typeof SideNav> = {
  title: "Navigation/SideNav",
  component: SideNav,
};
export default meta;

type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  args: {
    brand: "Aplomo",
    value: "svc",
    groups: [
      {
        label: "Operación",
        items: [
          {
            value: "svc",
            label: "Servicios",
            icon: "server",
            count: 248,
          },
          {
            value: "hosts",
            label: "Hosts",
            icon: "cpu",
            count: 156,
          },
        ],
      },
      {
        label: "Configuración",
        items: [
          {
            value: "settings",
            label: "Parámetros",
            icon: "settings",
          },
          {
            value: "alerts",
            label: "Alertas",
            icon: "bell",
            count: 12,
          },
        ],
      },
    ],
    footer: "v2.1.0",
  },
};

export const WithoutBrand: Story = {
  args: {
    value: "logs",
    groups: [
      {
        label: "Monitor",
        items: [
          { value: "logs", label: "Registros", icon: "file-text" },
          { value: "metrics", label: "Métricas", icon: "trending-up" },
          { value: "traces", label: "Trazas", icon: "link" },
        ],
      },
    ],
  },
};

export const MultipleGroups: Story = {
  args: {
    brand: "Panel",
    value: "users",
    groups: [
      {
        label: "Gestión",
        items: [
          { value: "users", label: "Usuarios", icon: "users", count: 342 },
          { value: "roles", label: "Roles", icon: "shield", count: 8 },
          { value: "teams", label: "Equipos", icon: "users-square" },
        ],
      },
      {
        label: "Auditoría",
        items: [
          { value: "events", label: "Eventos", icon: "activity", count: 5230 },
          { value: "access", label: "Acceso", icon: "lock" },
        ],
      },
      {
        label: "Mantenimiento",
        items: [
          { value: "backup", label: "Copias", icon: "save" },
          { value: "health", label: "Estado", icon: "heart" },
        ],
      },
    ],
    footer: "Administrador",
  },
};

export const MinimalGroups: Story = {
  args: {
    groups: [
      {
        label: "Principal",
        items: [
          { value: "home", label: "Inicio" },
          { value: "about", label: "Acerca de" },
        ],
      },
    ],
  },
};
