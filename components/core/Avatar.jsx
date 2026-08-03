import React from "react";

/** Iniciales en grafito. Sin foto, sin color por usuario: la identidad no es un dato decorativo. */
export function Avatar({name="",size=24,style,...rest}){
  const initials=String(name).trim().split(/\s+/).slice(0,2).map(w=>w.charAt(0).toUpperCase()).join("");
  return (
    <span title={name} style={{width:size,height:size,flex:"0 0 auto",display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--ap-radius-chip)",background:"var(--ap-gray-100)",color:"var(--ap-gray-600)",font:"var(--ap-weight-medium) "+Math.round(size*0.42)+"px/1 var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-prose)",letterSpacing:"0.02em",...style}} {...rest}>{initials}</span>
  );
}
