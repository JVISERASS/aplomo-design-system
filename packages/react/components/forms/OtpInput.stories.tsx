import type { Meta, StoryObj } from "@storybook/react";
import { OtpInput } from "./OtpInput";

const meta: Meta<typeof OtpInput> = {
  title: "Forms/OtpInput",
  component: OtpInput,
};
export default meta;

type Story = StoryObj<typeof OtpInput>;

export const Default: Story = { args: { label: "Código de verificación", length: 6 } };

export const WithValue: Story = { args: { label: "Código 2FA", length: 6, value: "123456" } };

export const WithError: Story = { args: { label: "Introduce el código", length: 4, error: "Código incorrecto" } };

export const Disabled: Story = { args: { label: "Código verificado", length: 6, disabled: true, value: "999999" } };
