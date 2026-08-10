import React from "react";
import { IconButton } from "../core/IconButton.jsx";

/** Capa lateral: entra en 400ms desde la derecha, elevacion 2 (es capa flotante). */
export function DetailPanel({open=false,onClose,header,footer,width="var(--ap-detail-w)",children,style,...rest}){
  return (
    <aside aria-hidden={!open} style={{width,flex:"0 0 auto",marginRight:open?0:"calc(-1 * "+width+")",background:"var(--ap-surface)",borderLeft:"1px solid var(--ap-border-strong)",boxShadow:"var(--ap-shadow-2)",display:"flex",flexDirection:"column",transform:open?"none":"translateX(100%)",opacity:open?1:0,pointerEvents:open?"auto":"none",transition:"transform var(--ap-dur-layer) var(--ap-ease),opacity var(--ap-dur-layer) var(--ap-ease),margin-right var(--ap-dur-layer) var(--ap-ease)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"var(--ap-space-3)",padding:"var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)"}}>
        <div style={{minWidth:0}}>{header}</div>
        <IconButton icon="x" label="Cerrar panel" onClick={onClose}/>
      </div>
      <div style={{flex:1,overflow:"auto",padding:"var(--ap-space-4)"}}>{children}</div>
      {footer&&<div style={{padding:"var(--ap-space-3) var(--ap-space-4)",borderTop:"1px solid var(--ap-border)",display:"flex",gap:"var(--ap-space-2)",justifyContent:"flex-end"}}>{footer}</div>}
    </aside>
  );
}
