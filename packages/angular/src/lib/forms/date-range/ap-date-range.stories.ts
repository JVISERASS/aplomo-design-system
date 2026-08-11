import type { Meta, StoryObj } from "@storybook/angular";
import { ApDateRange } from "./ap-date-range";

const meta: Meta<ApDateRange> = {
  title: "Forms/DateRange",
  component: ApDateRange,
};
export default meta;

type Story = StoryObj<ApDateRange>;

export const Default: Story = { args: { value: "24h" } };

export const OneHour: Story = { args: { value: "1h" } };

export const SevenDays: Story = { args: { value: "7d" } };

export const Custom: Story = { args: { value: "custom", absolute: "2026-08-01 → 2026-08-03" } };
