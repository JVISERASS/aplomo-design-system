import * as React from "react";
/** Codigo de verificacion (2FA). Una celda por digito, MONO 1; acepta pegado del codigo completo. */
export interface OtpInputProps extends React.HTMLAttributes<HTMLDivElement> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
}
export function OtpInput(props: OtpInputProps): JSX.Element;
