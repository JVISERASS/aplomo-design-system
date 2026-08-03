import React from "react";

/** Pila vertical u horizontal con gap de la escala de 4px. Sustituye a los margenes suelto a suelto. */
export function Stack({children,direction="column",gap="var(--ap-space-3)",align,justify,wrap=false,style,...rest}){
  return (
    <div style={{display:"flex",flexDirection:direction,gap,alignItems:align,justifyContent:justify,flexWrap:wrap?"wrap":"nowrap",minWidth:0,...style}} {...rest}>{children}</div>
  );
}
