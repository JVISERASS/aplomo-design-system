import React from "react";
import { DataValue } from "../data/DataValue.jsx";
import { Icon } from "../core/Icon.jsx";

const toneOf=s=>s==="error"?"var(--ap-error)":s==="ok"?"var(--ap-ok)":"var(--ap-text-secondary)";

/** Registro de operaciones largas: sobrevive a la navegacion, no es un toast que desaparece. */
export function OperationLog({operations=[],onDismiss,style,...rest}){
  if(!operations.length) return null;
  return (
    <div style={{position:"fixed",right:"var(--ap-space-4)",bottom:"var(--ap-space-4)",width:320,display:"grid",gap:"var(--ap-space-2)",zIndex:45,...style}} {...rest}>
      {operations.map(op=>(
        <div key={op.id} style={{background:"var(--ap-surface)",border:"1px solid var(--ap-border-strong)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",padding:"var(--ap-space-3)",animation:"ap-rise var(--ap-dur-state) var(--ap-ease) both"}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--ap-space-2)"}}>
            <span style={{font:"var(--ap-text-ui-medium)"}}>{op.title}</span>
            {op.status!=="running"&&<button onClick={()=>onDismiss&&onDismiss(op.id)} style={{border:0,background:"transparent",cursor:"pointer",color:"var(--ap-text-muted)",padding:0,lineHeight:1}}><Icon name="x" size={12}/></button>}
          </div>
          <div style={{marginTop:6,display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>
            <div style={{flex:1,height:3,background:"var(--ap-gray-100)",borderRadius:2,overflow:"hidden"}}>
              <div style={{width:(op.progress||0)+"%",height:"100%",background:op.status==="error"?"var(--ap-error)":op.status==="ok"?"var(--ap-ok)":"var(--ap-gray-600)",transition:"width var(--ap-dur-state) var(--ap-ease)"}}/>
            </div>
            <DataValue value={(op.progress||0)+"%"} size="var(--ap-size-11)" style={{color:toneOf(op.status)}}/>
          </div>
          {op.detail&&<div style={{marginTop:4}}><DataValue value={op.detail} size="var(--ap-size-11)" tone="muted"/></div>}
        </div>))}
    </div>
  );
}
