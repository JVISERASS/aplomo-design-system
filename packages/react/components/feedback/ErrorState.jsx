import React from "react";
import { Button } from "../core/Button.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Fallo de carga: dice que fallo, con su codigo, y ofrece reintentar. Sin ilustracion, sin disculpas. */
export function ErrorState({title="No se han podido cargar los datos",code,detail,onRetry,style,...rest}){
  return (
    <div style={{display:"grid",gap:"var(--ap-space-3)",justifyItems:"start",padding:"var(--ap-space-8) var(--ap-space-6)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>
        <span style={{font:"var(--ap-text-subtitle)",color:"var(--ap-error)"}}>{title}</span>
        {code&&<DataValue value={code} size="var(--ap-size-12)" tone="error"/>}
      </div>
      {detail&&<p style={{margin:0,font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",maxWidth:"56ch",textWrap:"pretty"}}>{detail}</p>}
      {onRetry&&<Button size="sm" onClick={onRetry}>Reintentar</Button>}
    </div>
  );
}
