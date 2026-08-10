import * as React from "react";
/** Estado vacio: solo texto y, como mucho, una accion secundaria. Prohibidas ilustraciones y mascotas. */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
