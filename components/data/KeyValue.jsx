import React from "react";
import { DataValue } from "./DataValue.jsx";

export function KeyValue({label,value,data=true,loading=false,style,...rest}){
  return (
    <div style={{display:"grid",gridTemplateColumns:"128px 1fr",gap:"var(--ap-space-3)",alignItems:"baseline",padding:"var(--ap-space-2) 0",borderBottom:"1px solid var(--ap-border)",...style}} {...rest}>
      <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>{label}</span>
      {data?<DataValue value={value} loading={loading} size="var(--ap-size-13)"/>:<span style={{font:"var(--ap-text-small)"}}>{value}</span>}
    </div>
  );
}
