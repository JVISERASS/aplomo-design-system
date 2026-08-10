import * as React from "react";
/** Barra de carga estatica (sin shimmer). Para datos, prefiere DataValue loading. */
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number | string;
  height?: number | string;
}
export function Skeleton(props: SkeletonProps): JSX.Element;
