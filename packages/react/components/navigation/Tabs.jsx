import React from "react";
import { DataValue } from "../data/DataValue.jsx";

export function Tabs({tabs=[],value,onChange,style,...rest}){
  return (
    <div role="tablist" style={{display:"flex",alignItems:"stretch",gap:"var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)",padding:"0 var(--ap-space-4)",background:"var(--ap-surface)",...style}} {...rest}>
      {tabs.map(t=>{
        const id=t.value||t,label=t.label||t,on=value===id;
        return (
          <button key={id} role="tab" aria-selected={on} onClick={()=>onChange&&onChange(id)}
            style={{display:"inline-flex",alignItems:"center",gap:6,height:40,padding:0,border:0,background:"transparent",font:on?"var(--ap-text-ui-medium)":"var(--ap-text-ui)",color:on?"var(--ap-text)":"var(--ap-text-secondary)",cursor:"pointer",boxShadow:on?"inset 0 -2px 0 var(--ap-gray-900)":"none",transition:"color var(--ap-dur-micro) var(--ap-ease),box-shadow var(--ap-dur-state) var(--ap-ease)"}}>
            {label}
            {t.count!==undefined&&<DataValue value={t.count} size="var(--ap-size-12)" tone="muted"/>}
          </button>
        );
      })}
    </div>
  );
}
