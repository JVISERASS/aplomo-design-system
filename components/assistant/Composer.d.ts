import * as React from "react";
/** Entrada del asistente. Crece hasta 160px, envia con ↵ y muestra sus atajos siempre. */
export interface ComposerProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChange?: (value: string) => void;
  onSend?: (value: string) => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
  /** hay una respuesta en curso */
  busy?: boolean;
  hint?: string;
}
export function Composer(props: ComposerProps): JSX.Element;
