import React from "react";
import { DataValue } from "./DataValue.jsx";

/** Consumo de cuota en celdas: 20 pips. Se lee de un vistazo cuanto queda, no cuanto se ha usado. */
export function Quota({used=0,total=100,label,unit,cells=20,style,...rest}){
  const pct=total?Math.max(0,Math.min(100,(used/total)*100)):0;
  const on=Math.round((pct/100)*cells);
  const tone=pct>=90?"var(--ap-error)":pct>=75?"var(--ap-warn)":"var(--ap-gray-600)";
  return (
    <div style={{display:"grid",gap:"var(--ap-space-2)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--ap-space-2)"}}>
        {label&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{label}</span>}
        <span style={{display:"flex",alignItems:"baseline",gap:4}}>
          <DataValue value={used} size="var(--ap-size-13)" weight={500}/>
          <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)",fontVariationSettings:"var(--ap-vf-data)"}}>/ {total}{unit?" "+unit:""}</span>
        </span>
      </div>
      <div style={{display:"flex",gap:2}}>
        {Array.from({length:cells}).map((_,i)=>(
          <span key={i} style={{flex:1,height:8,borderRadius:1,background:i<on?tone:"var(--ap-gray-100)",transition:"background-color var(--ap-dur-state) var(--ap-ease)",transitionDelay:(i*8)+"ms"}}/>))}
      </div>
    </div>
  );
}
