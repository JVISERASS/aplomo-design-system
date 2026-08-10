import React from "react";

/** Dos zonas con separador de 1px: listado a la izquierda, detalle a la derecha. */
export function Split({left,right,rightWidth="var(--ap-detail-w)",collapsed=false,style,...rest}){
  return (
    <div style={{display:"flex",flex:1,minWidth:0,minHeight:0,overflow:"hidden",...style}} {...rest}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>{left}</div>
      <div style={{width:rightWidth,flex:"0 0 auto",marginRight:collapsed?"calc(-1 * "+rightWidth+")":0,borderLeft:"1px solid var(--ap-border-strong)",display:"flex",flexDirection:"column",overflow:"hidden",opacity:collapsed?0:1,transition:"margin-right var(--ap-dur-layer) var(--ap-ease),opacity var(--ap-dur-layer) var(--ap-ease)"}}>{right}</div>
    </div>
  );
}
