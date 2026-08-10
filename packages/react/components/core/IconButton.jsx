import React from "react";
import { Icon } from "./Icon.jsx";

export function IconButton({icon,label,size="md",selected=false,disabled=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const d=size==="sm"?24:size==="lg"?40:32;
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{width:d,height:d,display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid transparent",borderRadius:"var(--ap-radius-control)",background:selected?"var(--ap-surface-active)":hover?"var(--ap-surface-hover)":"transparent",color:selected?"var(--ap-text)":hover?"var(--ap-text)":"var(--ap-text-secondary)",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1,transition:"background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)",...style}} {...rest}>
      <Icon name={icon} size={size==="sm"?14:16}/>
    </button>
  );
}
