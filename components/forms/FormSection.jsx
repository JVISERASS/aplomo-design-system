import React from "react";

/** Bloque de formulario: titulo y explicacion a la izquierda, campos a la derecha.
    La explicacion vive junto al campo, no en un tooltip. */
export function FormSection({title,description,children,columns=2,style,...rest}){
  return (
    <section style={{display:"grid",gridTemplateColumns:"minmax(180px,240px) minmax(0,1fr)",gap:"var(--ap-space-6)",padding:"var(--ap-space-5) 0",borderBottom:"1px solid var(--ap-border)",...style}} {...rest}>
      <div style={{display:"grid",gap:"var(--ap-space-1)",alignContent:"start"}}>
        <h3 style={{margin:0,font:"var(--ap-text-subtitle)"}}>{title}</h3>
        {description&&<p style={{margin:0,font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",textWrap:"pretty"}}>{description}</p>}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat("+columns+",minmax(0,1fr))",gap:"var(--ap-space-4)",alignItems:"start"}}>{children}</div>
    </section>
  );
}
