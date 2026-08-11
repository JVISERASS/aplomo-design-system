import type { Meta, StoryObj } from "@storybook/angular";
import { ApConfigDiff } from "./ap-config-diff";

const meta: Meta<ApConfigDiff> = {
  title: "Data/ConfigDiff",
  component: ApConfigDiff,
};
export default meta;

type Story = StoryObj<ApConfigDiff>;

export const Default: Story = {
  args: {
    changes: [
      { key: "error_max", from: "2,00%", to: "1,00%" },
      { key: "drain_window", from: "3 min", to: "5 min" },
    ],
  },
};

export const SingleChange: Story = {
  args: {
    changes: [{ key: "timeout", from: "30s", to: "60s" }],
  },
};

export const MultipleChanges: Story = {
  args: {
    changes: [
      { key: "max_connections", from: "100", to: "500" },
      { key: "retry_count", from: "3", to: "5" },
      { key: "log_level", from: "INFO", to: "DEBUG" },
    ],
  },
};
