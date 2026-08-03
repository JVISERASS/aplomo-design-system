import React from "react";

const tones={
  neutral:{bg:"var(--ap-gray-50)",fg:"var(--ap-gray-600)",bd:"var(--ap-gray-100)"},
  ok:{bg:"var(--ap-ok-tint)",fg:"var(--ap-ok)",bd:"color-mix(in srgb,var(--ap-ok) 18%,transparent)"},
  warn:{bg:"var(--ap-warn-tint)",fg:"var(--ap-warn)",bd:"color-mix(in srgb,var(--ap-warn) 18%,transparent)"},
  error:{bg:"var(--ap-error-tint)",fg:"var(--ap-error)",bd:"color-mix(in srgb,var(--ap-error) 18%,transparent)"},
  accent:{bg:"var(--ap-accent-tint)",fg:"var(--ap-accent)",bd:"color-mix(in srgb,var(--ap-accent) 18%,transparent)"}
};

/** Estado en clave => es DATO: MONO 1. */
export function Badge({tone="neutral",children,style,...rest}){
  const t=tones[tone]||tones.neutral;
  return (
    <span style={{display:"inline-flex",alignItems:"center",height:20,padding:"0 6px",borderRadius:"var(--ap-radius-chip)",background:t.bg,color:t.fg,border:"1px solid "+t.bd,font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",letterSpacing:"0.02em",textTransform:"uppercase",...style}} {...rest}>{children}</span>
  );
}
