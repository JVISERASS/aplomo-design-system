import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateRange } from "./DateRange";

const meta: Meta<typeof DateRange> = {
  title: "Forms/DateRange",
  component: DateRange,
};
export default meta;

type Story = StoryObj<typeof DateRange>;

export const Default: Story = { args: { value: "24h" } };

export const OneHour: Story = { args: { value: "1h" } };

export const SevenDays: Story = { args: { value: "7d" } };

export const Custom: Story = { args: { value: "custom", absolute: "2026-08-01 → 2026-08-03" } };
