import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stagger } from "./Stagger";

const meta: Meta<typeof Stagger> = {
  title: "Motion/Stagger",
  component: Stagger,
};
export default meta;

type Story = StoryObj<typeof Stagger>;

export const Default: Story = {
  args: {
    children: [
      <div key="1">Elemento 1</div>,
      <div key="2">Elemento 2</div>,
      <div key="3">Elemento 3</div>,
    ],
  },
};

export const WithCustomStep: Story = {
  args: {
    step: 100,
    children: [
      <div key="1">Primera Fila</div>,
      <div key="2">Segunda Fila</div>,
      <div key="3">Tercera Fila</div>,
      <div key="4">Cuarta Fila</div>,
    ],
  },
};

export const WithMaxLimit: Story = {
  args: {
    max: 3,
    children: [
      <div key="1">Item A</div>,
      <div key="2">Item B</div>,
      <div key="3">Item C</div>,
      <div key="4">Item D</div>,
      <div key="5">Item E</div>,
    ],
  },
};

export const WithDifferentElement: Story = {
  args: {
    as: "section",
    step: 75,
    children: [
      <p key="1">Párrafo 1</p>,
      <p key="2">Párrafo 2</p>,
      <p key="3">Párrafo 3</p>,
    ],
  },
};
