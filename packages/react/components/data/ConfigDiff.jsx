import React from "react";

/** Diff de configuracion: clave, valor anterior tachado, valor nuevo. Todo dato, todo MONO 1. */
export function ConfigDiff({changes=[],style,...rest}){
  return (
    <div style={{border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-control)",overflow:"hidden",...style}} {...rest}>
      {changes.map((c,i)=>(
        <div key={c.key} style={{display:"grid",gridTemplateColumns:"minmax(120px,1fr) 1fr 12px 1fr",gap:"var(--ap-space-2)",alignItems:"center",padding:"6px var(--ap-space-3)",borderTop:i?"1px solid var(--ap-border)":0,background:"var(--ap-surface)"}}>
          <span style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.key}</span>
          <span style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums",color:"var(--ap-text-muted)",textDecoration:"line-through",background:"var(--ap-error-tint)",padding:"0 4px",borderRadius:2}}>{c.from}</span>
          <span aria-hidden="true" style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-gray-300)",textAlign:"center"}}>→</span>
          <span style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums",color:"var(--ap-ok)",background:"var(--ap-ok-tint)",padding:"0 4px",borderRadius:2}}>{c.to}</span>
        </div>))}
    </div>
  );
}
