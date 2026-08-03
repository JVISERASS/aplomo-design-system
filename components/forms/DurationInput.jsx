import React from "react";

const UNITS=["s","min","h","d"];

/** Duracion: cifra + unidad seleccionable. Sustituye al texto libre "5 min". */
export function DurationInput({label,value=0,unit="min",onChange,hint,width=176,disabled,style}){
  const [focus,setFocus]=React.useState(false);
  const set=(v,u)=>onChange&&onChange({value:v,unit:u});
  return (
    <label style={{display:"flex",flexDirection:"column",gap:"var(--ap-space-1)",width,...style}}>
      {label&&<span style={{font:"var(--ap-text-label)",color:"var(--ap-text-secondary)"}}>{label}</span>}
      <span style={{display:"flex",alignItems:"stretch",height:"var(--ap-control-h)",background:disabled?"var(--ap-surface-subtle)":"var(--ap-surface)",border:"1px solid "+(focus?"var(--ap-accent)":"var(--ap-border-input)"),borderRadius:"var(--ap-radius-control)",overflow:"hidden"}}>
        <input value={value} disabled={disabled} inputMode="numeric" onChange={e=>set(e.target.value,unit)}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{flex:1,minWidth:0,border:0,outline:"none",background:"transparent",padding:"0 var(--ap-space-2)",textAlign:"right",font:"var(--ap-text-ui)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums"}}/>
        <span style={{display:"flex",borderLeft:"1px solid var(--ap-border)"}}>
          {UNITS.map(u=>(
            <button key={u} type="button" disabled={disabled} onClick={()=>set(value,u)}
              style={{width:32,border:0,borderRight:u==="d"?0:"1px solid var(--ap-border)",background:u===unit?"var(--ap-surface-active)":"var(--ap-surface-sunken)",color:u===unit?"var(--ap-text)":"var(--ap-text-muted)",font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",cursor:disabled?"not-allowed":"pointer",transition:"background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)"}}>{u}</button>))}
        </span>
      </span>
      {hint&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>{hint}</span>}
    </label>
  );
}
