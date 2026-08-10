import React from "react";
import { DataValue } from "../data/DataValue.jsx";

/** Progreso determinado. Grafito; el color solo si la operacion ha fallado o ha terminado. */
export function ProgressBar({value=0,label,showValue=true,tone="default",height=4,style,...rest}){
  const pct=Math.max(0,Math.min(100,value));
  const color=tone==="error"?"var(--ap-error)":tone==="ok"?"var(--ap-ok)":"var(--ap-gray-600)";
  return (
    <div style={{display:"grid",gap:"var(--ap-space-1)",...style}} {...rest}>
      {(label||showValue)&&<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"var(--ap-space-2)"}}>
        {label&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{label}</span>}
        {showValue&&<DataValue value={pct+"%"} size="var(--ap-size-12)" style={{color}}/>}
      </div>}
      <div role="progressbar" aria-valuenow={pct} style={{height,background:"var(--ap-gray-100)",borderRadius:2,overflow:"hidden"}}>
        <div style={{width:pct+"%",height:"100%",background:color,transition:"width var(--ap-dur-state) var(--ap-ease)"}}/>
      </div>
    </div>
  );
}
