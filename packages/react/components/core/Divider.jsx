import React from "react";

/** Separador de 1px. El borde es el separador del sistema; esta es su version explicita, con etiqueta opcional. */
export function Divider({label,direction="horizontal",spacing="var(--ap-space-4)",style,...rest}){
  if(direction==="vertical") return <span aria-hidden="true" style={{width:1,alignSelf:"stretch",background:"var(--ap-border)",margin:"0 "+spacing,...style}} {...rest}/>;
  if(!label) return <hr style={{border:0,height:1,background:"var(--ap-border)",margin:spacing+" 0",...style}} {...rest}/>;
  return (
    <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)",margin:spacing+" 0",...style}} {...rest}>
      <span style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",whiteSpace:"nowrap"}}>{label}</span>
      <span style={{flex:1,height:1,background:"var(--ap-border)"}}/>
    </div>
  );
}
