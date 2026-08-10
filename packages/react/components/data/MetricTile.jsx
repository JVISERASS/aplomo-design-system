import React from "react";
import { DataValue } from "./DataValue.jsx";

export function MetricTile({label,value,unit,delta,deltaTone="muted",loading=false,style,...rest}){
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"var(--ap-space-1)",padding:"var(--ap-space-4)",borderRight:"1px solid var(--ap-border)",minWidth:0,...style}} {...rest}>
      <span style={{font:"var(--ap-text-label)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)"}}>{label}</span>
      <span style={{display:"flex",alignItems:"baseline",gap:6}}>
        <DataValue value={value} loading={loading} size="var(--ap-size-29)" weight={500} style={{letterSpacing:"-0.02em",lineHeight:1.1}}/>
        {unit&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)",fontVariationSettings:"var(--ap-vf-data)"}}>{unit}</span>}
      </span>
      {delta&&<DataValue value={delta} loading={loading} placeholder="—" size="var(--ap-size-12)" tone={deltaTone}/>}
    </div>
  );
}
