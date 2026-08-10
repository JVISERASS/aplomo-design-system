import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Menu({open=false,items=[],onSelect,onClose,anchor="right",style,...rest}){
  const [hover,setHover]=React.useState(null);
  if(!open) return null;
  return (
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:40}}/>
      <div role="menu" style={{position:"absolute",top:"calc(100% + 4px)",[anchor]:0,zIndex:41,minWidth:200,padding:"var(--ap-space-1)",background:"var(--ap-surface)",border:"1px solid var(--ap-border-strong)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",animation:"ap-rise var(--ap-dur-state) var(--ap-ease) both",...style}} {...rest}>
        {items.map((it,i)=>it.divider?
          <div key={"d"+i} style={{height:1,background:"var(--ap-border)",margin:"var(--ap-space-1) 0"}}/>:
          <button key={it.value} role="menuitem" onClick={()=>{onSelect&&onSelect(it.value);onClose&&onClose();}}
            onMouseEnter={()=>setHover(it.value)} onMouseLeave={()=>setHover(null)}
            style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",width:"100%",height:"var(--ap-control-h)",padding:"0 var(--ap-space-2)",border:0,borderRadius:"var(--ap-radius-control)",background:hover===it.value?"var(--ap-surface-hover)":"transparent",color:it.tone==="danger"?"var(--ap-error)":"var(--ap-text)",font:"var(--ap-text-ui)",cursor:"pointer",textAlign:"left",transition:"background-color var(--ap-dur-micro) var(--ap-ease)"}}>
            {it.icon&&<Icon name={it.icon} size={15} style={{color:"var(--ap-text-muted)"}}/>}
            <span style={{flex:1}}>{it.label}</span>
            {it.shortcut&&<span style={{font:"var(--ap-text-micro)",color:"var(--ap-text-muted)",fontVariationSettings:"var(--ap-vf-data)"}}>{it.shortcut}</span>}
          </button>
        )}
      </div>
    </>
  );
}
