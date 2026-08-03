import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Confirmacion breve y reversible. Para operaciones que tardan usa OperationLog: este desaparece. */
export function Toast({toasts=[],onDismiss,onAction,style,...rest}){
  if(!toasts.length) return null;
  return (
    <div style={{position:"fixed",left:"50%",bottom:"var(--ap-space-6)",transform:"translateX(-50%)",display:"grid",gap:"var(--ap-space-2)",zIndex:55,...style}} {...rest}>
      {toasts.map(t=>(
        <div key={t.id} style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)",padding:"var(--ap-space-2) var(--ap-space-2) var(--ap-space-2) var(--ap-space-4)",background:"var(--ap-surface-inverse)",color:"var(--ap-text-inverse)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",animation:"ap-rise var(--ap-dur-state) var(--ap-ease) both"}}>
          <span style={{font:"var(--ap-text-ui)"}}>{t.message}</span>
          {t.action&&<button type="button" onClick={()=>onAction&&onAction(t)} style={{height:"var(--ap-control-h-sm)",padding:"0 10px",border:0,borderRadius:"var(--ap-radius-control)",background:"var(--ap-gray-800)",color:"var(--ap-gray-100)",font:"var(--ap-text-ui-medium)",cursor:"pointer"}}>{t.action}</button>}
          <button type="button" onClick={()=>onDismiss&&onDismiss(t.id)} aria-label="Cerrar" style={{border:0,background:"transparent",cursor:"pointer",color:"var(--ap-gray-400)",display:"inline-flex",padding:4}}><Icon name="x" size={12}/></button>
        </div>))}
    </div>
  );
}
