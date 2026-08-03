import React from "react";
import { Icon } from "../core/Icon.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Traza de trabajo del asistente: que ha consultado y cuanto ha tardado. Plegable, en MONO 1.
    Sustituye a cualquier animacion de "pensando": el movimiento explica el trabajo, no lo decora. */
export function AssistantTrace({steps=[],running=false,defaultOpen=false,style,...rest}){
  const [open,setOpen]=React.useState(defaultOpen);
  const done=steps.filter(s=>s.status!=="running").length;
  return (
    <div style={{border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-control)",background:"var(--ap-surface-sunken)",...style}} {...rest}>
      <button type="button" onClick={()=>setOpen(!open)} aria-expanded={open}
        style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",width:"100%",height:"var(--ap-control-h)",padding:"0 var(--ap-space-3)",border:0,background:"transparent",cursor:"pointer",textAlign:"left"}}>
        <Icon name={open?"chevron-down":"chevron-right"} size={13} style={{color:"var(--ap-text-muted)"}}/>
        <span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{running?"Consultando":"Consultado"}</span>
        <DataValue value={done+"/"+steps.length} size="var(--ap-size-11)" tone="muted"/>
      </button>
      {open&&<div style={{borderTop:"1px solid var(--ap-border)",padding:"var(--ap-space-2) var(--ap-space-3)"}}>
        {steps.map((s,i)=>(
          <div key={i} style={{display:"grid",gridTemplateColumns:"14px 1fr auto",gap:"var(--ap-space-2)",alignItems:"center",padding:"3px 0"}}>
            <Icon name={s.status==="running"?"circle-dashed":s.status==="error"?"circle-x":"circle-check"} size={12} style={{color:s.status==="error"?"var(--ap-error)":s.status==="running"?"var(--ap-text-muted)":"var(--ap-ok)"}}/>
            <span style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.label}</span>
            {s.ms!==undefined&&<DataValue value={s.ms+" ms"} size="var(--ap-size-11)" tone="muted"/>}
          </div>))}
      </div>}
    </div>
  );
}
