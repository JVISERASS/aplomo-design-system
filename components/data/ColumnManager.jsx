import React from "react";
import { Checkbox } from "../forms/Checkbox.jsx";

/** Gestor de columnas: capa flotante con la lista de columnas ocultables. */
export function ColumnManager({open=false,onClose,columns=[],hidden=[],onToggle,anchor="right",style,...rest}){
  if(!open) return null;
  return (
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:40}}/>
      <div style={{position:"absolute",top:"calc(100% + 4px)",[anchor]:0,zIndex:41,width:220,padding:"var(--ap-space-2)",background:"var(--ap-surface)",border:"1px solid var(--ap-border-strong)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",animation:"ap-rise var(--ap-dur-state) var(--ap-ease) both",...style}} {...rest}>
        <div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",padding:"var(--ap-space-1) var(--ap-space-1) var(--ap-space-2)"}}>Columnas</div>
        <div style={{display:"grid",gap:"var(--ap-space-2)",padding:"0 var(--ap-space-1) var(--ap-space-1)"}}>
          {columns.map(c=>(
            <Checkbox key={c.key} checked={!hidden.includes(c.key)} onChange={()=>onToggle&&onToggle(c.key)} label={c.label} disabled={c.locked}/>
          ))}
        </div>
      </div>
    </>
  );
}
