import React from "react";

/** Medidor en caracteres: 10 celdas por defecto. El relleno es dato, no decoracion. */
export function AsciiMeter({value=0,cells=10,showValue=true,tone="default",style,...rest}){
  const pct=Math.max(0,Math.min(100,value));
  const on=Math.round((pct/100)*cells);
  const bar="█".repeat(on)+"░".repeat(cells-on);
  const color=tone==="error"?"var(--ap-error)":tone==="warn"?"var(--ap-warn)":tone==="ok"?"var(--ap-ok)":"var(--ap-text-secondary)";
  return (
    <span style={{display:"inline-flex",gap:"var(--ap-space-2)",alignItems:"baseline",fontFamily:"var(--ap-font-ascii)",fontVariantNumeric:"tabular-nums",fontSize:"var(--ap-size-12)",color,...style}} {...rest}>
      <span aria-hidden="true">{bar}</span>
      {showValue&&<span>{pct}%</span>}
    </span>
  );
}
