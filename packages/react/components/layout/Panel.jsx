import React from "react";

/** Panel/tarjeta: fondo blanco, borde de 1px, radius 8px. Sin sombra: el borde hace el trabajo. */
export function Panel({title,actions,padded=false,children,style,...rest}){
  return (
    <section style={{background:"var(--ap-surface)",border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-panel)",overflow:"hidden",...style}} {...rest}>
      {(title||actions)&&(
        <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ap-space-3)",height:"var(--ap-header-h)",padding:"0 var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)"}}>
          <h2 style={{margin:0,font:"var(--ap-text-subtitle)",letterSpacing:"-0.01em"}}>{title}</h2>
          {actions&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>{actions}</div>}
        </header>
      )}
      <div style={padded?{padding:"var(--ap-space-4)"}:undefined}>{children}</div>
    </section>
  );
}
