import React from "react";

export function Breadcrumb({items=[],style,...rest}){
  return (
    <nav style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",font:"var(--ap-text-small)",color:"var(--ap-text-muted)",...style}} {...rest}>
      {items.map((it,i)=>{
        const label=it.label||it,last=i===items.length-1;
        return (
          <React.Fragment key={label}>
            <span style={{color:last?"var(--ap-text)":"var(--ap-text-secondary)",fontVariationSettings:it.data?"var(--ap-vf-data)":"var(--ap-vf-prose)"}}>{label}</span>
            {!last&&<span aria-hidden="true" style={{color:"var(--ap-gray-300)"}}>/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
