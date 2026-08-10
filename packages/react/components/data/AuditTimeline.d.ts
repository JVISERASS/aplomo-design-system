import * as React from "react";
/** Registro de auditoria de un recurso. Admite un ConfigDiff como children de la entrada. */
export interface AuditTimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  entries: Array<{ id?: string; at: string; actor?: string; title: string; note?: string; tag?: string; tone?: "neutral" | "ok" | "warn" | "error" | "accent"; children?: React.ReactNode }>;
  loading?: boolean;
}
export function AuditTimeline(props: AuditTimelineProps): JSX.Element;
