import type { Meta, StoryObj } from "@storybook/angular";
import { ApPagination } from "./ap-pagination";

const meta: Meta<ApPagination> = { title: "Data/Pagination", component: ApPagination };
export default meta;

type Story = StoryObj<ApPagination>;

export const Default: Story = {
  args: {
    from: 1,
    to: 40,
    total: 248,
    pageSize: 40,
  },
};

export const LastPage: Story = {
  args: {
    from: 201,
    to: 248,
    total: 248,
    pageSize: 40,
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
