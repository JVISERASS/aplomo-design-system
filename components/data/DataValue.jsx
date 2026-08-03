import React from "react";

/**
 * FIRMA 1 — la transicion del eje MONO. Cuando el valor cambia o termina de cargar,
 * font-variation-settings 'MONO' pasa de 0 a 1 en 250ms: el dato "se cuaja" en dato.
 */
export function DataValue({value,loading=false,size,weight,tone,placeholder="0000",style,...rest}){
  const [settled,setSettled]=React.useState(!loading);
  const prev=React.useRef(value);
  React.useEffect(()=>{
    if(loading){setSettled(false);return;}
    if(prev.current!==value||!settled){
      setSettled(false);
      const id=requestAnimationFrame(()=>requestAnimationFrame(()=>setSettled(true)));
      prev.current=value;
      return ()=>cancelAnimationFrame(id);
    }
  },[value,loading]);
  const on=settled&&!loading;
  return (
    <span style={{fontVariationSettings:on?"var(--ap-vf-data)":"var(--ap-vf-prose)",fontVariantNumeric:"tabular-nums",fontSize:size,fontWeight:weight,color:tone==="muted"?"var(--ap-text-secondary)":tone==="ok"?"var(--ap-ok)":tone==="warn"?"var(--ap-warn)":tone==="error"?"var(--ap-error)":undefined,opacity:loading?.35:1,transition:"font-variation-settings var(--ap-dur-state) var(--ap-ease),opacity var(--ap-dur-state) var(--ap-ease)",...style}} {...rest}>
      {loading?placeholder:value}
    </span>
  );
}
