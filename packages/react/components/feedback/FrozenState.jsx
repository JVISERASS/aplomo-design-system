import React from "react";
import { Icon } from "../core/Icon.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Datos congelados: lo que se ve ya no es en vivo. Atenua el contenido y lo dice con su antiguedad. */
export function FrozenState({frozen=false,since,reason="Datos congelados",onResume,children,style,...rest}){
  return (
    <div style={{position:"relative",...style}} {...rest}>
      <div style={{opacity:frozen?.45:1,filter:frozen?"saturate(0)":"none",pointerEvents:frozen?"none":"auto",transition:"opacity var(--ap-dur-state) var(--ap-ease)"}}>{children}</div>
      {frozen&&<div style={{position:"absolute",top:"var(--ap-space-3)",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"var(--ap-space-2)",padding:"var(--ap-space-2) var(--ap-space-3)",background:"var(--ap-surface)",border:"1px solid var(--ap-border-strong)",borderRadius:"var(--ap-radius-control)",boxShadow:"var(--ap-shadow-1)"}}>
        <Icon name="pause" size={13} style={{color:"var(--ap-warn)"}}/>
        <span style={{font:"var(--ap-text-small)"}}>{reason}</span>
        {since&&<DataValue value={since} size="var(--ap-size-11)" tone="muted"/>}
        {onResume&&<button type="button" onClick={onResume} style={{border:0,background:"transparent",padding:0,marginLeft:"var(--ap-space-2)",color:"var(--ap-accent)",font:"var(--ap-text-label)",cursor:"pointer"}}>Reanudar</button>}
      </div>}
    </div>
  );
}
