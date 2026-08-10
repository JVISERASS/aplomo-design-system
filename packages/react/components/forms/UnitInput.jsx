import React from "react";

/** Campo numerico con unidad fija. El valor y la unidad son dato: MONO 1 + tabular-nums. */
export function UnitInput({label,unit,hint,error,value,onChange,width=140,disabled,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--ap-space-1)",width,...style}}>
      {label&&<span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{label}</span>}
      <span style={{display:"flex",alignItems:"stretch",height:"var(--ap-control-h)",background:disabled?"var(--ap-surface-subtle)":"var(--ap-surface)",border:"1px solid "+(error?"var(--ap-error)":focus?"var(--ap-accent)":"var(--ap-border-input)"),borderRadius:"var(--ap-radius-control)",overflow:"hidden",transition:"border-color var(--ap-dur-micro) var(--ap-ease)"}}>
        <input value={value} onChange={onChange} disabled={disabled} inputMode="decimal"
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{flex:1,minWidth:0,border:0,outline:"none",background:"transparent",padding:"0 var(--ap-space-2)",textAlign:"right",font:"var(--ap-text-ui)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums"}} {...rest}/>
        <span style={{display:"flex",alignItems:"center",padding:"0 var(--ap-space-2)",borderLeft:"1px solid var(--ap-border)",background:"var(--ap-surface-sunken)",font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-secondary)"}}>{unit}</span>
      </span>
      {(error||hint)&&<span style={{font:"var(--ap-text-small)",color:error?"var(--ap-error)":"var(--ap-text-muted)"}}>{error||hint}</span>}
    </label>
  );
}
