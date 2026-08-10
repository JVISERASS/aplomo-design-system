import React from "react";

/** Esqueleto de carga: barra grafito sin brillo ni animacion decorativa. El movimiento lo hace el cuajado del dato. */
export function Skeleton({width=64,height=12,style,...rest}){
  return <span style={{display:"inline-block",width,height,borderRadius:2,background:"var(--ap-gray-100)",...style}} {...rest}/>;
}
