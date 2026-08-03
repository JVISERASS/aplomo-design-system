import React from "react";

/** Indeterminado de menos de un segundo (guardar, confirmar). Para cargas de datos usa Skeleton + el cuajado MONO. */
export function Spinner({size=14,label,style,...rest}){
  return (
    <span role="status" aria-label={label||"Cargando"} style={{display:"inline-flex",alignItems:"center",gap:"var(--ap-space-2)",...style}} {...rest}>
      <span style={{width:size,height:size,borderRadius:"50%",border:"1.5px solid var(--ap-gray-200)",borderTopColor:"var(--ap-gray-600)",animation:"ap-spin 700ms linear infinite"}}/>
      {label&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{label}</span>}
    </span>
  );
}
