import React from "react";
import { Icon } from "../core/Icon.jsx";

const PRESETS=[{id:"1h",label:"1 h"},{id:"24h",label:"24 h"},{id:"7d",label:"7 d"},{id:"30d",label:"30 d"}];

/** Rango temporal: presets a la izquierda y ventana absoluta a la derecha, siempre visible en MONO 1. */
export function DateRange({value="24h",onChange,absolute,style,...rest}){
  return (
    <div style={{display:"inline-flex",alignItems:"stretch",height:"var(--ap-control-h)",border:"1px solid var(--ap-border-input)",borderRadius:"var(--ap-radius-control)",overflow:"hidden",background:"var(--ap-surface)",...style}} {...rest}>
      {PRESETS.map(p=>(
        <button key={p.id} type="button" onClick={()=>onChange&&onChange(p.id)}
          style={{padding:"0 10px",border:0,borderRight:"1px solid var(--ap-border)",background:value===p.id?"var(--ap-surface-active)":"transparent",color:value===p.id?"var(--ap-text)":"var(--ap-text-secondary)",font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",cursor:"pointer",transition:"background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)"}}>{p.label}</button>))}
      <button type="button" onClick={()=>onChange&&onChange("custom")}
        style={{display:"inline-flex",alignItems:"center",gap:6,padding:"0 10px",border:0,background:value==="custom"?"var(--ap-surface-active)":"transparent",color:value==="custom"?"var(--ap-text)":"var(--ap-text-secondary)",cursor:"pointer"}}>
        <Icon name="calendar" size={13}/>
        <span style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)"}}>{absolute||"personalizado"}</span>
      </button>
    </div>
  );
}
