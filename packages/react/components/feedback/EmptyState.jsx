import React from "react";

/** Vacio en tipografia plana: sin ilustracion, sin mascota, sin icono decorativo. */
export function EmptyState({title,description,action,style,...rest}){
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"var(--ap-space-2)",padding:"var(--ap-space-10) var(--ap-space-6)",borderTop:"1px solid var(--ap-border)",...style}} {...rest}>
      <div style={{font:"var(--ap-text-subtitle)"}}>{title}</div>
      {description&&<p style={{margin:0,font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",maxWidth:"52ch",textWrap:"pretty"}}>{description}</p>}
      {action&&<div style={{marginTop:"var(--ap-space-2)"}}>{action}</div>}
    </div>
  );
}
