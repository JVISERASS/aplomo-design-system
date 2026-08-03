import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Checkbox({checked,defaultChecked=false,indeterminate=false,onChange,label,disabled,style,...rest}){
  // No controlado cuando no se pasa checked: asi ninguna casilla queda muerta por olvidar onChange.
  const controlled=checked!==undefined;
  const [inner,setInner]=React.useState(defaultChecked);
  const value=controlled?checked:inner;
  const handle=e=>{ if(!controlled) setInner(e.target.checked); onChange&&onChange(e); };
  const on=value||indeterminate;
  return (
    <label style={{display:"inline-flex",alignItems:"center",gap:"var(--ap-space-2)",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1,...style}} {...rest}>
      <input type="checkbox" checked={value} onChange={handle} disabled={disabled} style={{position:"absolute",opacity:0,width:0,height:0}}/>
      <span style={{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:3,border:"1px solid "+(on?"var(--ap-accent)":"var(--ap-border-strong)"),background:on?"var(--ap-accent)":"var(--ap-surface)",color:"var(--ap-text-inverse)",transition:"background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)"}}>
        {on&&<Icon name={indeterminate?"minus":"check"} size={12} strokeWidth={2.25}/>}
      </span>
      {label&&<span style={{font:"var(--ap-text-ui)"}}>{label}</span>}
    </label>
  );
}
