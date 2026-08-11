import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Data/Skeleton",
  component: Skeleton,
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 180,
  },
};

export const Narrow: Story = {
  args: {
    width: 120,
    height: 24,
  },
};

export const Square: Story = {
  args: {
    width: 100,
    height: 100,
  },
};

export const FullWidth: Story = {
  args: {
    width: "100%",
    height: 32,
  },
};
