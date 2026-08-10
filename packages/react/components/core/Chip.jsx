import React from "react";
import { Icon } from "./Icon.jsx";

export function Chip({children,onRemove,data=false,style,...rest}){
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:6,height:24,padding:onRemove?"0 4px 0 8px":"0 8px",borderRadius:"var(--ap-radius-chip)",border:"1px solid var(--ap-border-strong)",background:"var(--ap-surface)",color:"var(--ap-text)",font:"var(--ap-text-label)",fontVariationSettings:data?"var(--ap-vf-data)":"var(--ap-vf-prose)",fontVariantNumeric:data?"tabular-nums":"normal",...style}} {...rest}>
      {children}
      {onRemove&&<button type="button" onClick={onRemove} aria-label="Quitar filtro" style={{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",border:0,background:"transparent",color:"var(--ap-text-muted)",cursor:"pointer",borderRadius:2}}><Icon name="x" size={12}/></button>}
    </span>
  );
}
