import type { Meta, StoryObj } from "@storybook/angular";
import { ApCopyValue } from "./ap-copy-value";

const meta: Meta<ApCopyValue> = {
  title: "Core/CopyValue",
  component: ApCopyValue,
};
export default meta;

type Story = StoryObj<ApCopyValue>;

export const Default: Story = { args: { value: "abc-123-def-456" } };
export const NumericValue: Story = { args: { value: 12345 } };
export const CustomSize: Story = { args: { value: "identificador-123", size: 14 } };
export const CustomWeight: Story = { args: { value: "clave-importante", weight: 600 } };
