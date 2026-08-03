import React from "react";

export function Tooltip({label,children,style,...rest}){
  const [on,setOn]=React.useState(false);
  return (
    <span style={{position:"relative",display:"inline-flex"}} onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)} {...rest}>
      {children}
      <span role="tooltip" style={{position:"absolute",bottom:"calc(100% + 6px)",left:"50%",transform:on?"translate(-50%,0)":"translate(-50%,4px)",opacity:on?1:0,pointerEvents:"none",whiteSpace:"nowrap",padding:"4px 8px",borderRadius:"var(--ap-radius-chip)",background:"var(--ap-surface-inverse)",color:"var(--ap-text-inverse)",font:"var(--ap-text-micro)",boxShadow:"var(--ap-shadow-1)",transition:"opacity var(--ap-dur-micro) var(--ap-ease),transform var(--ap-dur-micro) var(--ap-ease)",zIndex:30,...style}}>{label}</span>
    </span>
  );
}
