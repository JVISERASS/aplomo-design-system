import type { Meta, StoryObj } from "@storybook/angular";
import { ApAsciiMeter } from "./ap-ascii-meter";

const meta: Meta<ApAsciiMeter> = {
  title: "Data/AsciiMeter",
  component: ApAsciiMeter,
};
export default meta;

type Story = StoryObj<ApAsciiMeter>;

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
