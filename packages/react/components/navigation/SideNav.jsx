import React from "react";
import { Icon } from "../core/Icon.jsx";
import { DataValue } from "../data/DataValue.jsx";

export function SideNav({brand,groups=[],value,onChange,footer,style,...rest}){
  const [hover,setHover]=React.useState(null);
  return (
    <nav style={{width:"var(--ap-sidebar-w)",flex:"0 0 auto",background:"var(--ap-surface-sunken)",borderRight:"1px solid var(--ap-border)",display:"flex",flexDirection:"column",...style}} {...rest}>
      {brand&&<div style={{height:"var(--ap-header-h)",display:"flex",alignItems:"center",padding:"0 var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)"}}>{brand}</div>}
      <div style={{flex:1,overflow:"auto",padding:"var(--ap-space-3) var(--ap-space-2)"}}>
        {groups.map(g=>(
          <div key={g.label} style={{marginBottom:"var(--ap-space-4)"}}>
            <div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",padding:"0 var(--ap-space-2) var(--ap-space-2)"}}>{g.label}</div>
            <div style={{display:"flex",flexDirection:"column",gap:2}}>
              {g.items.map(it=>{
                const on=value===it.value;
                return (
                  <button key={it.value} onClick={()=>onChange&&onChange(it.value)}
                    onMouseEnter={()=>setHover(it.value)} onMouseLeave={()=>setHover(null)}
                    style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",height:"var(--ap-control-h)",padding:"0 var(--ap-space-2)",border:0,borderRadius:"var(--ap-radius-control)",background:on?"var(--ap-gray-100)":hover===it.value?"var(--ap-gray-50)":"transparent",color:on?"var(--ap-text)":"var(--ap-text-secondary)",font:on?"var(--ap-text-ui-medium)":"var(--ap-text-ui)",cursor:"pointer",textAlign:"left",transition:"background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)"}}>
                    {it.icon&&<Icon name={it.icon} size={15}/>}
                    <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{it.label}</span>
                    {it.count!==undefined&&<DataValue value={it.count} size="var(--ap-size-12)" tone="muted"/>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {footer&&<div style={{padding:"var(--ap-space-3)",borderTop:"1px solid var(--ap-border)"}}>{footer}</div>}
    </nav>
  );
}
