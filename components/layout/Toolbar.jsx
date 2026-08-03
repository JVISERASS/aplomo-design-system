import React from "react";

export function Toolbar({left,right,children,style,...rest}){
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ap-space-3)",height:"var(--ap-header-h)",padding:"0 var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)",background:"var(--ap-surface)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",minWidth:0}}>{left||children}</div>
      {right&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>{right}</div>}
    </div>
  );
}
