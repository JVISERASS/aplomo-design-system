import React from "react";
import { Icon } from "../core/Icon.jsx";

const tones={
  ok:{bg:"var(--ap-ok-tint)",fg:"var(--ap-ok)",icon:"check-circle-2"},
  warn:{bg:"var(--ap-warn-tint)",fg:"var(--ap-warn)",icon:"alert-triangle"},
  error:{bg:"var(--ap-error-tint)",fg:"var(--ap-error)",icon:"octagon-alert"},
  info:{bg:"var(--ap-gray-50)",fg:"var(--ap-gray-600)",icon:"info"}
};

/** Tinte palido de fondo + color en el texto. Nunca relleno saturado. */
export function InlineAlert({tone="info",title,children,style,...rest}){
  const t=tones[tone]||tones.info;
  return (
    <div style={{display:"flex",gap:"var(--ap-space-2)",padding:"var(--ap-space-3)",background:t.bg,border:"1px solid color-mix(in srgb,"+t.fg+" 16%,transparent)",borderRadius:"var(--ap-radius-control)",color:t.fg,...style}} {...rest}>
      <Icon name={t.icon} size={15} style={{marginTop:2}}/>
      <div style={{minWidth:0}}>
        {title&&<div style={{font:"var(--ap-text-ui-medium)"}}>{title}</div>}
        {children&&<div style={{font:"var(--ap-text-small)",color:"var(--ap-gray-600)",textWrap:"pretty"}}>{children}</div>}
      </div>
    </div>
  );
}
