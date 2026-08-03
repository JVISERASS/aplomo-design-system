import React from "react";

/** Texto largo: prosa, 15px/1.65 y ancho maximo de lectura. Nunca datos. */
export function Textarea({label,hint,error,rows=4,value,onChange,placeholder,disabled,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--ap-space-1)",...style}}>
      {label&&<span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{label}</span>}
      <textarea rows={rows} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{resize:"vertical",padding:"var(--ap-space-2)",background:disabled?"var(--ap-surface-subtle)":"var(--ap-surface)",border:"1px solid "+(error?"var(--ap-error)":focus?"var(--ap-accent)":"var(--ap-border-input)"),borderRadius:"var(--ap-radius-control)",outline:"none",font:"var(--ap-weight-body) var(--ap-size-14)/var(--ap-leading-prose) var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-prose)",transition:"border-color var(--ap-dur-micro) var(--ap-ease)"}} {...rest}/>
      {(error||hint)&&<span style={{font:"var(--ap-text-small)",color:error?"var(--ap-error)":"var(--ap-text-muted)"}}>{error||hint}</span>}
    </label>
  );
}
