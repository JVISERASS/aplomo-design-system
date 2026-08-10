import React from "react";
import { Icon } from "../core/Icon.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Pasos de un proceso (despliegue canario, alta de servicio). El paso activo es grafito 900, no acento. */
export function Steps({steps=[],current=0,direction="row",style,...rest}){
  return (
    <ol style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:direction==="row"?"row":"column",gap:direction==="row"?0:"var(--ap-space-3)",...style}} {...rest}>
      {steps.map((s,i)=>{
        const label=s.label||s,meta=s.meta,done=i<current,active=i===current;
        return (
          <li key={label} style={{display:"flex",alignItems:direction==="row"?"center":"flex-start",gap:"var(--ap-space-2)",flex:direction==="row"?1:"none",minWidth:0}}>
            <span style={{width:18,height:18,flex:"0 0 auto",borderRadius:"50%",border:"1px solid "+(done?"var(--ap-gray-900)":active?"var(--ap-gray-900)":"var(--ap-border-strong)"),background:done?"var(--ap-gray-900)":"var(--ap-surface)",color:"var(--ap-text-inverse)",display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
              {done?<Icon name="check" size={11} strokeWidth={2.5}/>:<span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:active?"var(--ap-text)":"var(--ap-text-muted)"}}>{i+1}</span>}
            </span>
            <span style={{display:"grid",gap:1,minWidth:0}}>
              <span style={{font:active?"var(--ap-text-ui-medium)":"var(--ap-text-ui)",color:done||active?"var(--ap-text)":"var(--ap-text-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{label}</span>
              {meta&&<DataValue value={meta} size="var(--ap-size-11)" tone="muted"/>}
            </span>
            {direction==="row"&&i<steps.length-1&&<span style={{flex:1,height:1,background:done?"var(--ap-gray-900)":"var(--ap-border)",margin:"0 var(--ap-space-2)"}}/>}
          </li>
        );
      })}
    </ol>
  );
}
