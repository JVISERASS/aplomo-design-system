import React from "react";
import { Button } from "../core/Button.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Barra de guardado pegada al fondo. Solo aparece cuando hay cambios y dice cuantos. */
export function FormActions({dirty=false,count,onSave,onDiscard,saving=false,saveLabel="Guardar cambios",style,...rest}){
  return (
    <div style={{position:"sticky",bottom:0,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ap-space-3)",padding:"var(--ap-space-3) var(--ap-space-4)",background:"var(--ap-surface)",borderTop:"1px solid var(--ap-border-strong)",boxShadow:dirty?"var(--ap-shadow-2)":"none",transform:dirty?"none":"translateY(100%)",opacity:dirty?1:0,pointerEvents:dirty?"auto":"none",transition:"transform var(--ap-dur-state) var(--ap-ease),opacity var(--ap-dur-state) var(--ap-ease)",...style}} {...rest}>
      <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>
        {count!==undefined?<><DataValue value={count}/> cambios sin guardar</>:"Cambios sin guardar"}
      </span>
      <div style={{display:"flex",gap:"var(--ap-space-2)"}}>
        <Button onClick={onDiscard} disabled={saving}>Descartar</Button>
        <Button variant="primary" onClick={onSave} disabled={saving}>{saving?"Guardando":saveLabel}</Button>
      </div>
    </div>
  );
}
