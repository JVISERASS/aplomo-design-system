import type { Meta, StoryObj } from "@storybook/react";
import { CopyValue } from "./CopyValue";

const meta: Meta<typeof CopyValue> = {
  title: "Core/CopyValue",
  component: CopyValue,
};
export default meta;

type Story = StoryObj<typeof CopyValue>;

export const Default: Story = { args: { value: "abc-123-def-456" } };
export const NumericValue: Story = { args: { value: 12345 } };
export const CustomSize: Story = { args: { value: "identificador-123", size: 14 } };
export const CustomWeight: Story = { args: { value: "clave-importante", weight: 600 } };
