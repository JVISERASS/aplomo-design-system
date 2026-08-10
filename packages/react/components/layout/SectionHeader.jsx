import React from "react";

/** Cabecera de seccion dentro de una vista o panel: etiqueta en versalitas, meta y acciones. */
export function SectionHeader({label,title,meta,actions,style,...rest}){
  return (
    <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--ap-space-3)",paddingBottom:"var(--ap-space-2)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"baseline",gap:"var(--ap-space-3)",minWidth:0}}>
        {label&&<span style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)"}}>{label}</span>}
        {title&&<span style={{font:"var(--ap-text-subtitle)"}}>{title}</span>}
        {meta&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums"}}>{meta}</span>}
      </div>
      {actions&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>{actions}</div>}
    </div>
  );
}
