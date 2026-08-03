import React from "react";

const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--ap-space-2)",borderRadius:"var(--ap-radius-control)",border:"1px solid transparent",fontFamily:"var(--ap-font-core)",fontWeight:"var(--ap-weight-medium)",fontVariationSettings:"var(--ap-vf-prose)",letterSpacing:"-0.005em",cursor:"pointer",whiteSpace:"nowrap",userSelect:"none",transition:"background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)"};

const sizes={
  sm:{height:"var(--ap-control-h-sm)",padding:"0 10px",fontSize:"var(--ap-size-13)"},
  md:{height:"var(--ap-control-h)",padding:"0 14px",fontSize:"var(--ap-size-14)"},
  lg:{height:"var(--ap-control-h-lg)",padding:"0 18px",fontSize:"var(--ap-size-14)"}
};

const looks={
  primary:{rest:{background:"var(--ap-accent)",color:"var(--ap-text-inverse)"},hover:{background:"var(--ap-accent-hover)"},active:{background:"#14279E"}},
  secondary:{rest:{background:"var(--ap-surface)",color:"var(--ap-text)",borderColor:"var(--ap-border-strong)"},hover:{background:"var(--ap-surface-sunken)",borderColor:"var(--ap-gray-300)"},active:{background:"var(--ap-surface-active)",borderColor:"var(--ap-gray-300)"}},
  ghost:{rest:{background:"transparent",color:"var(--ap-text-secondary)"},hover:{background:"var(--ap-surface-hover)",color:"var(--ap-text)"},active:{background:"var(--ap-surface-active)",color:"var(--ap-text)"}},
  danger:{rest:{background:"var(--ap-surface)",color:"var(--ap-error)",borderColor:"color-mix(in srgb,var(--ap-error) 30%,transparent)"},hover:{background:"var(--ap-error-tint)",borderColor:"color-mix(in srgb,var(--ap-error) 45%,transparent)"},active:{background:"var(--ap-error-tint)",borderColor:"var(--ap-error)"}}
};

const dangerSolid={rest:{background:"var(--ap-error)",color:"var(--ap-text-inverse)",borderColor:"transparent"},hover:{background:"#8C271C"},active:{background:"#79211A"}};

export function Button({variant="secondary",size="md",solid=false,disabled=false,type="button",onClick,style,children,...rest}){
  const [hover,setHover]=React.useState(false);
  const [down,setDown]=React.useState(false);
  const look=(variant==="danger"&&solid)?dangerSolid:(looks[variant]||looks.secondary);
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setDown(false);}}
      onMouseDown={()=>setDown(true)} onMouseUp={()=>setDown(false)}
      style={{...base,...sizes[size],...look.rest,...(hover&&!disabled?look.hover:null),...(down&&!disabled?look.active:null),...(disabled?{opacity:.4,cursor:"not-allowed"}:null),...style}} {...rest}>
      {children}
    </button>
  );
}
