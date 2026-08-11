import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataValue } from "./DataValue";

const meta: Meta<typeof DataValue> = {
  title: "Data/DataValue",
  component: DataValue,
};
export default meta;

type Story = StoryObj<typeof DataValue>;

export const Default: Story = {
  args: {
    value: "99,982",
  },
};

export const Loading: Story = {
  args: {
    value: "128,402",
    loading: true,
    placeholder: "---",
  },
};

export const Muted: Story = {
  args: {
    value: "SVC-4820-DE",
    size: 13,
    tone: "muted",
  },
};

export const WithStatus: Story = {
  args: {
    value: "45ms",
    tone: "ok",
    weight: 500,
  },
};
