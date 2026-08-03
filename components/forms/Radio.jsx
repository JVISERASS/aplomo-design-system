import React from "react";

/** Grupo de opciones excluyentes. El punto marcado es cobalto y cuenta para la regla de dos usos. */
export function Radio({options=[],value,onChange,name,direction="column",disabled,style,...rest}){
  return (
    <div role="radiogroup" style={{display:"flex",flexDirection:direction,gap:direction==="row"?"var(--ap-space-4)":"var(--ap-space-2)",...style}} {...rest}>
      {options.map(o=>{
        const v=typeof o==="string"?o:o.value,l=typeof o==="string"?o:o.label,hint=typeof o==="string"?null:o.hint;
        const on=value===v;
        return (
          <label key={v} style={{display:"flex",alignItems:"flex-start",gap:"var(--ap-space-2)",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1}}>
            <input type="radio" name={name} checked={on} onChange={()=>onChange&&onChange(v)} disabled={disabled} style={{position:"absolute",opacity:0,width:0,height:0}}/>
            <span style={{width:16,height:16,marginTop:1,borderRadius:"50%",border:"1px solid "+(on?"var(--ap-accent)":"var(--ap-border-strong)"),background:"var(--ap-surface)",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"border-color var(--ap-dur-micro) var(--ap-ease)"}}>
              <span style={{width:8,height:8,borderRadius:"50%",background:on?"var(--ap-accent)":"transparent",transform:on?"none":"scale(.4)",transition:"transform var(--ap-dur-micro) var(--ap-ease),background-color var(--ap-dur-micro) var(--ap-ease)"}}/>
            </span>
            <span style={{display:"grid",gap:2}}>
              <span style={{font:"var(--ap-text-ui)"}}>{l}</span>
              {hint&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>{hint}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}
