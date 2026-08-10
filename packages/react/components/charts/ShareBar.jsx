import React from "react";
import { DataValue } from "../data/DataValue.jsx";

/** Reparto de un total en una sola barra segmentada. Escala de grafito, no una paleta. */
export function ShareBar({segments=[],height=8,showLegend=true,loading=false,style,...rest}){
  const total=segments.reduce((a,s)=>a+s.value,0)||1;
  const shades=["var(--ap-gray-700)","var(--ap-gray-500)","var(--ap-gray-300)","var(--ap-gray-200)","var(--ap-gray-100)"];
  return (
    <div style={style} {...rest}>
      <div style={{display:"flex",height,borderRadius:2,overflow:"hidden",background:"var(--ap-gray-50)"}}>
        {segments.map((s,i)=>(
          <div key={s.label} title={s.label} style={{width:(loading?0:(s.value/total)*100)+"%",background:s.tone==="error"?"var(--ap-error)":shades[i%shades.length],transition:"width var(--ap-dur-state) var(--ap-ease)",transitionDelay:(i*60)+"ms"}}/>))}
      </div>
      {showLegend&&<div style={{display:"flex",flexWrap:"wrap",gap:"var(--ap-space-4)",marginTop:"var(--ap-space-3)"}}>
        {segments.map((s,i)=>(
          <div key={s.label} style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{width:8,height:8,borderRadius:2,background:s.tone==="error"?"var(--ap-error)":shades[i%shades.length]}}/>
            <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{s.label}</span>
            <DataValue value={Math.round((s.value/total)*100)+"%"} loading={loading} size="var(--ap-size-13)"/>
          </div>))}
      </div>}
    </div>
  );
}
