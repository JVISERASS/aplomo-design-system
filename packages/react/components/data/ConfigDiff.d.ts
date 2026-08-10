import * as React from "react";
/** Antes / despues de un cambio de configuracion. Tintes palidos, nunca rellenos saturados. */
export interface ConfigDiffProps extends React.HTMLAttributes<HTMLDivElement> {
  changes: Array<{ key: string; from: string; to: string }>;
}
export function ConfigDiff(props: ConfigDiffProps): JSX.Element;
