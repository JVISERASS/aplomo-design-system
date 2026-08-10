import React from "react";

/** Serie temporal en barras con eje inferior de 1px. La ultima barra va en grafito 700: es "ahora". */
export function BarSeries({data=[],height=64,gap=3,labels,threshold,tone="default",loading=false,style,...rest}){
  const max=Math.max(...data,1);
  const color=tone==="error"?"var(--ap-error)":tone==="warn"?"var(--ap-warn)":"var(--ap-gray-200)";
  return (
    <div style={style} {...rest}>
      <div style={{position:"relative",display:"flex",alignItems:"flex-end",gap,height,borderBottom:"1px solid var(--ap-border-strong)"}}>
        {threshold!==undefined&&<div style={{position:"absolute",left:0,right:0,bottom:(threshold/max)*height,borderTop:"1px dashed var(--ap-gray-300)"}}/>}
        {data.map((v,i)=>(
          <div key={i} title={String(v)} style={{flex:1,minWidth:2,height:loading?"4%":((v/max)*100)+"%",background:i===data.length-1?"var(--ap-gray-700)":color,borderRadius:1,transition:"height var(--ap-dur-state) var(--ap-ease)",transitionDelay:(Math.min(i,20)*12)+"ms"}}/>))}
      </div>
      {labels&&<div style={{display:"flex",justifyContent:"space-between",marginTop:6,font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)"}}>
        {labels.map(l=><span key={l}>{l}</span>)}
      </div>}
    </div>
  );
}
