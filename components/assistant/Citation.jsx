import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Cita a un recurso real del producto. La referencia es dato; el clic lleva al recurso. */
export function Citation({label,hint,icon="server",onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  return (
    <button type="button" onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:"inline-flex",alignItems:"center",gap:6,height:24,padding:"0 8px",border:"1px solid "+(hover?"var(--ap-gray-300)":"var(--ap-border-strong)"),borderRadius:"var(--ap-radius-chip)",background:hover?"var(--ap-surface-hover)":"var(--ap-surface)",cursor:"pointer",transition:"background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)",...style}} {...rest}>
      <Icon name={icon} size={12} style={{color:"var(--ap-text-muted)"}}/>
      <span style={{font:"var(--ap-text-label)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums"}}>{label}</span>
      {hint&&<span style={{font:"var(--ap-text-micro)",color:"var(--ap-text-muted)"}}>{hint}</span>}
    </button>
  );
}
