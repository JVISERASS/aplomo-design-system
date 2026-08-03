import React from "react";

/** Rejilla de columnas con gap de la escala. even reparte a partes iguales; si no, auto-fit con suelo. */
export function Columns({children,count=2,even=false,min=200,gap="var(--ap-space-4)",align="start",style,...rest}){
  return (
    <div style={{display:"grid",gridTemplateColumns:even?"repeat("+count+",minmax(0,1fr))":"repeat(auto-fit,minmax("+min+"px,1fr))",gap,alignItems:align,...style}} {...rest}>{children}</div>
  );
}
