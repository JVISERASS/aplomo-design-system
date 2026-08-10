import * as React from "react";
/** Secciones plegables con contador o meta a la derecha (dato: MONO 1). */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{ id?: string; title: string; meta?: string; children?: React.ReactNode }>;
  /** ids abiertos al montar */
  defaultOpen?: string[];
}
export function Accordion(props: AccordionProps): JSX.Element;
