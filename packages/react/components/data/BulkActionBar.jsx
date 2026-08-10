import React from "react";
import { DataValue } from "./DataValue.jsx";
import { Button } from "../core/Button.jsx";
import { IconButton } from "../core/IconButton.jsx";

/** Barra de acciones masivas: aparece al haber seleccion, capa flotante, 250ms. */
export function BulkActionBar({count=0,onClear,actions=[],style,...rest}){
  const on=count>0;
  return (
    <div aria-hidden={!on} style={{position:"sticky",bottom:"var(--ap-space-4)",display:"flex",justifyContent:"center",pointerEvents:"none",zIndex:20,...style}} {...rest}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)",padding:"var(--ap-space-2) var(--ap-space-2) var(--ap-space-2) var(--ap-space-4)",background:"var(--ap-surface-inverse)",color:"var(--ap-text-inverse)",border:"1px solid var(--ap-gray-800)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",pointerEvents:on?"auto":"none",opacity:on?1:0,transform:on?"none":"translateY(8px)",transition:"opacity var(--ap-dur-state) var(--ap-ease),transform var(--ap-dur-state) var(--ap-ease)"}}>
        <span style={{font:"var(--ap-text-small)",color:"var(--ap-gray-200)"}}><DataValue value={count} style={{color:"var(--ap-text-inverse)",fontWeight:500}}/> seleccionados</span>
        <span style={{width:1,height:20,background:"var(--ap-gray-700)"}}/>
        {actions.map(a=>(
          <button key={a.label} onClick={a.onClick} style={{height:"var(--ap-control-h-sm)",padding:"0 10px",border:0,borderRadius:"var(--ap-radius-control)",background:"transparent",color:a.tone==="danger"?"#E9A79E":"var(--ap-gray-100)",font:"var(--ap-text-ui-medium)",cursor:"pointer"}}>{a.label}</button>))}
        <IconButton icon="x" label="Quitar seleccion" size="sm" onClick={onClear} style={{color:"var(--ap-gray-300)"}}/>
      </div>
    </div>
  );
}
