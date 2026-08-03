import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Select({label,options=[],value,onChange,disabled,style,...rest}){
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--ap-space-1)",...style}}>
      {label&&<span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{label}</span>}
      <span style={{position:"relative",display:"flex",alignItems:"center"}}>
        <select value={value} onChange={onChange} disabled={disabled}
          style={{appearance:"none",width:"100%",height:"var(--ap-control-h)",padding:"0 28px 0 var(--ap-space-2)",background:disabled?"var(--ap-surface-subtle)":"var(--ap-surface)",border:"1px solid var(--ap-border-input)",borderRadius:"var(--ap-radius-control)",font:"var(--ap-text-ui)",fontVariationSettings:"var(--ap-vf-prose)",cursor:"pointer"}} {...rest}>
          {options.map(o=>{const v=typeof o==="string"?o:o.value,l=typeof o==="string"?o:o.label;return <option key={v} value={v}>{l}</option>;})}
        </select>
        <Icon name="chevron-down" size={14} style={{position:"absolute",right:8,color:"var(--ap-text-muted)",pointerEvents:"none"}}/>
      </span>
    </label>
  );
}
