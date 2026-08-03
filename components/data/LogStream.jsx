import React from "react";

const toneOf=l=>l==="ERROR"?"var(--ap-error)":l==="WARN"?"var(--ap-warn)":l==="OK"?"var(--ap-ok)":"var(--ap-text-secondary)";

/** Visor de log: monoespaciado real, marca de tiempo alineada y nivel en clave. Se ancla al final. */
export function LogStream({lines=[],height=200,follow=true,style,...rest}){
  const ref=React.useRef(null);
  React.useEffect(()=>{ if(follow&&ref.current) ref.current.scrollTop=ref.current.scrollHeight; },[lines,follow]);
  return (
    <div ref={ref} style={{height,overflow:"auto",background:"var(--ap-surface-sunken)",border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-control)",padding:"var(--ap-space-2)",fontFamily:"var(--ap-font-ascii)",fontSize:"var(--ap-size-12)",lineHeight:1.5,...style}} {...rest}>
      {lines.map((l,i)=>(
        <div key={i} style={{display:"grid",gridTemplateColumns:"64px 52px 1fr",gap:"var(--ap-space-2)",padding:"1px 0"}}>
          <span style={{color:"var(--ap-text-muted)"}}>{l.at}</span>
          <span style={{color:toneOf(l.level)}}>{l.level}</span>
          <span style={{color:"var(--ap-text)",whiteSpace:"pre-wrap",wordBreak:"break-word"}}>{l.text}</span>
        </div>))}
    </div>
  );
}
