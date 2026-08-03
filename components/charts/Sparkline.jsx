import React from "react";

/** Serie compacta en linea. Grafito; el color solo entra si el ultimo punto esta fuera de umbral. */
export function Sparkline({data=[],width=120,height=28,tone="default",showLast=true,style,...rest}){
  const n=data.length;
  if(!n) return <svg width={width} height={height} style={style} {...rest}/>;
  const max=Math.max(...data),min=Math.min(...data),span=(max-min)||1;
  const x=i=>(i/(n-1||1))*(width-2)+1;
  const y=v=>height-1-((v-min)/span)*(height-2);
  const d=data.map((v,i)=>(i?"L":"M")+x(i).toFixed(1)+" "+y(v).toFixed(1)).join(" ");
  const color=tone==="error"?"var(--ap-error)":tone==="warn"?"var(--ap-warn)":tone==="ok"?"var(--ap-ok)":"var(--ap-gray-500)";
  return (
    <svg width={width} height={height} viewBox={"0 0 "+width+" "+height} role="img" style={{display:"block",overflow:"visible",...style}} {...rest}>
      <path d={d} fill="none" stroke={color} strokeWidth="1.25" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
      {showLast&&<rect x={x(n-1)-1.5} y={y(data[n-1])-1.5} width="3" height="3" fill={color}/>}
    </svg>
  );
}
