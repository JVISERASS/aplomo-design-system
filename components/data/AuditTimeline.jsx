import React from "react";
import { DataValue } from "./DataValue.jsx";
import { Badge } from "../core/Badge.jsx";

/** Cronologia de auditoria: quien, cuando, que. El eje es un borde de 1px, no una linea decorativa. */
export function AuditTimeline({entries=[],loading=false,style,...rest}){
  return (
    <ol style={{listStyle:"none",margin:0,padding:0,...style}} {...rest}>
      {entries.map((e,i)=>(
        <li key={e.id||i} style={{display:"grid",gridTemplateColumns:"132px 1fr",gap:"var(--ap-space-4)",padding:"var(--ap-space-3) 0",borderBottom:i===entries.length-1?0:"1px solid var(--ap-border)"}}>
          <div style={{display:"grid",gap:2}}>
            <DataValue value={e.at} loading={loading} placeholder="0000-00-00 00:00" size="var(--ap-size-11)" tone="muted"/>
            {e.actor&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{e.actor}</span>}
          </div>
          <div style={{minWidth:0,display:"grid",gap:"var(--ap-space-2)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",flexWrap:"wrap"}}>
              <span style={{font:"var(--ap-text-ui-medium)"}}>{e.title}</span>
              {e.tag&&<Badge tone={e.tone||"neutral"}>{e.tag}</Badge>}
            </div>
            {e.note&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",textWrap:"pretty"}}>{e.note}</span>}
            {e.children}
          </div>
        </li>))}
    </ol>
  );
}
