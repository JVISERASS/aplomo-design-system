import React from "react";
import { DataValue } from "./DataValue.jsx";

/** Lista de filas con franja de estado de 2px a la izquierda. Para cuando la tabla es excesiva. */
export function List({items=[],selectedId,onSelect,style,...rest}){
  const [hover,setHover]=React.useState(null);
  const stripe=t=>t==="ok"?"var(--ap-ok)":t==="warn"?"var(--ap-warn)":t==="error"?"var(--ap-error)":"var(--ap-gray-200)";
  return (
    <ul style={{listStyle:"none",margin:0,padding:0,...style}} {...rest}>
      {items.map((it,i)=>{
        const sel=selectedId===it.id;
        return (
          <li key={it.id||i}>
            <button type="button" onClick={()=>onSelect&&onSelect(it)}
              onMouseEnter={()=>setHover(it.id)} onMouseLeave={()=>setHover(null)}
              className="ap-rise" style={{"--ap-delay":Math.min(i,7)*60+"ms",display:"grid",gridTemplateColumns:"2px 1fr auto",gap:"var(--ap-space-3)",alignItems:"center",width:"100%",padding:"var(--ap-space-2) var(--ap-space-3) var(--ap-space-2) 0",border:0,borderBottom:"1px solid var(--ap-border)",background:sel?"var(--ap-accent-tint)":hover===it.id?"var(--ap-surface-hover)":"transparent",cursor:onSelect?"pointer":"default",textAlign:"left",transition:"background-color var(--ap-dur-micro) var(--ap-ease)"}}>
              <span style={{alignSelf:"stretch",background:stripe(it.tone),borderRadius:1}}/>
              <span style={{display:"grid",gap:2,minWidth:0}}>
                <span style={{display:"flex",alignItems:"baseline",gap:"var(--ap-space-2)",minWidth:0}}>
                  <span style={{font:"var(--ap-text-ui-medium)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{it.title}</span>
                  {it.ref&&<DataValue value={it.ref} size="var(--ap-size-12)" tone="muted"/>}
                </span>
                {it.subtitle&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{it.subtitle}</span>}
              </span>
              {it.meta&&<DataValue value={it.meta} size="var(--ap-size-12)" tone="muted"/>}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
