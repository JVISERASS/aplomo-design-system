import type { Meta, StoryObj } from "@storybook/angular";
import { ApSkeleton } from "./ap-skeleton";

const meta: Meta<ApSkeleton> = { title: "Data/Skeleton", component: ApSkeleton };
export default meta;

type Story = StoryObj<ApSkeleton>;

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
