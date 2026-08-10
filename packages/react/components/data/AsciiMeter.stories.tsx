import type { Meta, StoryObj } from "@storybook/react";
import { AsciiMeter } from "./AsciiMeter";

const meta: Meta<typeof AsciiMeter> = {
  title: "Data/AsciiMeter",
  component: AsciiMeter,
};
export default meta;

type Story = StoryObj<typeof AsciiMeter>;

export const Default: Story = {
  args: {
    value: 88,
    showValue: true,
  },
};

export const OK: Story = {
  args: {
    value: 100,
    tone: "ok",
    showValue: true,
  },
};

export const Warning: Story = {
  args: {
    value: 75,
    tone: "warn",
    showValue: true,
  },
};

export const Error: Story = {
  args: {
    value: 0,
    tone: "error",
    showValue: false,
  },
};
