import type { Meta, StoryObj } from "@storybook/react-vite";
import { SharedValue } from "./SharedValue";

const meta: Meta<typeof SharedValue> = {
  title: "Motion/SharedValue",
  component: SharedValue,
};
export default meta;

type Story = StoryObj<typeof SharedValue>;

export const Default: Story = {
  args: {
    sharedKey: "user-123",
    children: "Usuario ID",
  },
};

export const WithStyle: Story = {
  args: {
    sharedKey: "identifier-key",
    children: "Identificador",
    style: {
      fontSize: "var(--ap-size-23)",
      fontWeight: 700,
    },
  },
};

export const LongContent: Story = {
  args: {
    sharedKey: "detailed-value",
    children: "Referencia Compartida",
    className: "shared-value-element",
  },
};
