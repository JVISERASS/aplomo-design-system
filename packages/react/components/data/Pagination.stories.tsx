import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Data/Pagination",
  component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    from: 1,
    to: 40,
    total: 248,
    pageSize: 40,
    onNext: () => console.log("Next"),
    onPrev: () => console.log("Prev"),
    onPageSize: (size) => console.log("Page size:", size),
  },
};

export const LastPage: Story = {
  args: {
    from: 201,
    to: 248,
    total: 248,
    pageSize: 40,
    onNext: () => console.log("Next"),
    onPrev: () => console.log("Prev"),
    onPageSize: (size) => console.log("Page size:", size),
  },
};

export const Loading: Story = {
  args: {
    from: 41,
    to: 80,
    total: 500,
    pageSize: 40,
    loading: true,
  },
};
