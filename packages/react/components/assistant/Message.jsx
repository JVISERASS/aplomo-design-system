import React from "react";
import { Avatar } from "../core/Avatar.jsx";

/** Turno de conversacion. La persona va en tarjeta gris; el sistema, a sangre sobre blanco:
    la respuesta es contenido, no un globo de chat. Nada de esquinas de burbuja ni colas. */
export function Message({role="assistant",author,at,children,footer,style,...rest}){
  const mine=role==="user";
  return (
    <article style={{display:"grid",gridTemplateColumns:"24px 1fr",gap:"var(--ap-space-3)",padding:"var(--ap-space-4) 0",borderBottom:"1px solid var(--ap-border)",...style}} {...rest}>
      {mine?<Avatar name={author||"Tu"}/>:
        <span aria-hidden="true" style={{width:24,height:24,display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--ap-radius-chip)",border:"1px solid var(--ap-border-strong)",background:"var(--ap-surface)",font:"var(--ap-weight-medium) 11px/1 var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-secondary)"}}>AP</span>}
      <div style={{minWidth:0,display:"grid",gap:"var(--ap-space-2)"}}>
        <div style={{display:"flex",alignItems:"baseline",gap:"var(--ap-space-2)"}}>
          <span style={{font:"var(--ap-text-label)"}}>{author||(mine?"Tu":"Asistente")}</span>
          {at&&<span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-muted)"}}>{at}</span>}
        </div>
        <div style={{font:"var(--ap-weight-body) var(--ap-size-15)/var(--ap-leading-prose) var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-prose)",maxWidth:"var(--ap-measure-prose)",textWrap:"pretty",background:mine?"var(--ap-surface-subtle)":"transparent",border:mine?"1px solid var(--ap-border)":0,borderRadius:mine?"var(--ap-radius-panel)":0,padding:mine?"var(--ap-space-3)":0}}>{children}</div>
        {footer&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",flexWrap:"wrap"}}>{footer}</div>}
      </div>
    </article>
  );
}
