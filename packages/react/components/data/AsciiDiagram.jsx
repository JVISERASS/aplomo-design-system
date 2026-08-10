import React from "react";

/** Diagrama en texto: topologias, flujos, cronologias. MONO 1 puro, grafito, sin color.
    Es la unica forma de "ilustracion" que admite el sistema: sigue siendo dato. */
export function AsciiDiagram({children,size="var(--ap-size-12)",tone="default",label,style,...rest}){
  return (
    <figure style={{margin:0,...style}} {...rest}>
      {label&&<figcaption style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",marginBottom:"var(--ap-space-2)"}}>{label}</figcaption>}
      <pre style={{margin:0,fontFamily:"var(--ap-font-ascii)",fontVariantNumeric:"tabular-nums",fontSize:size,lineHeight:1.5,letterSpacing:0,color:tone==="muted"?"var(--ap-text-secondary)":"var(--ap-text)",whiteSpace:"pre",overflowX:"auto"}}>{children}</pre>
    </figure>
  );
}
