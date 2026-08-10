import React from "react";

export function PageHeader({eyebrow,title,meta,actions,style,...rest}){
  return (
    <header style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"var(--ap-space-4)",padding:"var(--ap-space-6) var(--ap-space-6) var(--ap-space-4)",background:"var(--ap-surface)",...style}} {...rest}>
      <div style={{minWidth:0}}>
        {eyebrow&&<div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",marginBottom:6}}>{eyebrow}</div>}
        <h1 style={{margin:0,font:"var(--ap-weight-bold) var(--ap-size-29)/var(--ap-leading-display) var(--ap-font-display)",letterSpacing:"var(--ap-tracking-display)"}}>{title}</h1>
        {meta&&<div style={{marginTop:"var(--ap-space-2)",display:"flex",alignItems:"center",gap:"var(--ap-space-3)",font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{meta}</div>}
      </div>
      {actions&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>{actions}</div>}
    </header>
  );
}
