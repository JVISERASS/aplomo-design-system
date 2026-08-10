import React from "react";
import { DataValue } from "./DataValue.jsx";

/** Matriz de intensidad: escala de grafito en cinco pasos, leyenda obligatoria. Sin paleta de colores. */
export function Matrix({rows=[],columns=[],values={},legend=true,unit,loading=false,style,...rest}){
  const shades=["var(--ap-gray-50)","var(--ap-gray-100)","var(--ap-gray-200)","var(--ap-gray-400)","var(--ap-gray-600)"];
  const nums=Object.values(values).filter(v=>typeof v==="number");
  const max=Math.max(1,...nums);
  const shade=v=>typeof v!=="number"?"var(--ap-surface)":shades[Math.min(4,Math.floor((v/max)*5))];
  return (
    <div style={style} {...rest}>
      <div style={{display:"grid",gridTemplateColumns:"120px repeat("+columns.length+",minmax(28px,1fr))",gap:2,alignItems:"center"}}>
        <span/>
        {columns.map(c=><span key={c} style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",textAlign:"center",overflow:"hidden",textOverflow:"ellipsis"}}>{c}</span>)}
        {rows.map(r=>(
          <React.Fragment key={r}>
            <span style={{font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-secondary)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingRight:"var(--ap-space-2)"}}>{r}</span>
            {columns.map(c=>{
              const v=values[r+"|"+c];
              return <span key={c} title={r+" · "+c+": "+(v===undefined?"—":v)} style={{height:24,background:loading?"var(--ap-gray-50)":shade(v),border:"1px solid var(--ap-surface)",borderRadius:2,display:"flex",alignItems:"center",justifyContent:"center",font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums",color:typeof v==="number"&&v/max>0.6?"var(--ap-text-inverse)":"var(--ap-text-secondary)",transition:"background-color var(--ap-dur-state) var(--ap-ease)"}}>{loading||v===undefined?"":v}</span>;
            })}
          </React.Fragment>))}
      </div>
      {legend&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",marginTop:"var(--ap-space-3)"}}>
        <DataValue value={"0"+(unit?" "+unit:"")} size="var(--ap-size-11)" tone="muted"/>
        <span style={{display:"flex",gap:2}}>{shades.map(s=><span key={s} style={{width:18,height:8,background:s,borderRadius:1}}/>)}</span>
        <DataValue value={max+(unit?" "+unit:"")} size="var(--ap-size-11)" tone="muted"/>
      </div>}
    </div>
  );
}
