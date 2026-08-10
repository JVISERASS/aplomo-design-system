import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Input({label,hint,error,icon,data=false,value,onChange,placeholder,disabled,type="text",style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--ap-space-1)",...style}}>
      {label&&<span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{label}</span>}
      <span style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",height:"var(--ap-control-h)",padding:"0 var(--ap-space-2)",background:disabled?"var(--ap-surface-subtle)":"var(--ap-surface)",border:"1px solid "+(error?"var(--ap-error)":focus?"var(--ap-accent)":"var(--ap-border-input)"),borderRadius:"var(--ap-radius-control)",transition:"border-color var(--ap-dur-micro) var(--ap-ease)"}}>
        {icon&&<Icon name={icon} size={14} style={{color:"var(--ap-text-muted)"}}/>}
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{flex:1,minWidth:0,border:0,outline:"none",background:"transparent",font:"var(--ap-text-ui)",fontVariationSettings:data?"var(--ap-vf-data)":"var(--ap-vf-prose)",fontVariantNumeric:data?"tabular-nums":"normal"}} {...rest}/>
      </span>
      {(error||hint)&&<span style={{font:"var(--ap-text-small)",color:error?"var(--ap-error)":"var(--ap-text-muted)"}}>{error||hint}</span>}
    </label>
  );
}
