import React from "react";

/** Capa flotante: 400ms, elevacion 2, radius 8px. Fondo del velo grafito 900 al 32%. */
export function Dialog({open=false,title,description,footer,onClose,width=440,children,style,...rest}){
  if(!open) return null;
  return (
    <div role="presentation" onClick={onClose} style={{position:"fixed",inset:0,background:"rgb(20 19 17 / 0.32)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:50,animation:"ap-rise var(--ap-dur-layer) var(--ap-ease) both"}}>
      <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}
        style={{width,maxWidth:"calc(100vw - 32px)",background:"var(--ap-surface)",border:"1px solid var(--ap-border-strong)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",...style}} {...rest}>
        <div style={{padding:"var(--ap-space-5) var(--ap-space-5) var(--ap-space-4)"}}>
          {title&&<h2 style={{margin:0,font:"var(--ap-text-subtitle)"}}>{title}</h2>}
          {description&&<p style={{margin:"var(--ap-space-2) 0 0",font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",maxWidth:"56ch",textWrap:"pretty"}}>{description}</p>}
          {children&&<div style={{marginTop:"var(--ap-space-4)"}}>{children}</div>}
        </div>
        {footer&&<div style={{display:"flex",justifyContent:"flex-end",gap:"var(--ap-space-2)",padding:"var(--ap-space-3) var(--ap-space-5)",borderTop:"1px solid var(--ap-border)"}}>{footer}</div>}
      </div>
    </div>
  );
}
