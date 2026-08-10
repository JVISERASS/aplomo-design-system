import React from "react";
import { Icon } from "./Icon.jsx";

/** Identificador copiable. Todo id, clave o ruta deberia serlo: es la accion mas repetida de una guardia. */
export function CopyValue({value,size="var(--ap-size-13)",weight,label="Copiar",style,...rest}){
  const [done,setDone]=React.useState(false);
  const copy=()=>{
    const t=String(value);
    if(navigator.clipboard) navigator.clipboard.writeText(t).catch(()=>{});
    setDone(true); setTimeout(()=>setDone(false),1200);
  };
  return (
    <button type="button" onClick={copy} title={label}
      style={{display:"inline-flex",alignItems:"center",gap:6,height:"var(--ap-control-h-sm)",padding:"0 6px 0 4px",margin:"0 -4px",border:"1px solid transparent",borderRadius:"var(--ap-radius-control)",background:"transparent",color:"inherit",cursor:"pointer",transition:"background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)",...style}}
      onMouseEnter={e=>{e.currentTarget.style.background="var(--ap-surface-hover)";e.currentTarget.style.borderColor="var(--ap-border)";}}
      onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="transparent";}} {...rest}>
      <span style={{fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums",fontSize:size,fontWeight:weight}}>{value}</span>
      <Icon name={done?"check":"copy"} size={12} style={{color:done?"var(--ap-ok)":"var(--ap-text-muted)",transition:"color var(--ap-dur-micro) var(--ap-ease)"}}/>
    </button>
  );
}
