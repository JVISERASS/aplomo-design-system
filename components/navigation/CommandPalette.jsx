import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Paleta de comandos (⌘K). Navegacion real de una consola: referencia, region o accion. */
export function CommandPalette({open=false,onClose,items=[],onSelect,placeholder="Referencia, region o accion"}){
  const [q,setQ]=React.useState("");
  const [i,setI]=React.useState(0);
  const inputRef=React.useRef(null);
  const hits=items.filter(it=>(it.label+" "+(it.hint||"")).toLowerCase().includes(q.toLowerCase())).slice(0,8);
  React.useEffect(()=>{ if(open){setQ("");setI(0);setTimeout(()=>inputRef.current&&inputRef.current.focus(),0);} },[open]);
  React.useEffect(()=>{
    if(!open) return;
    const onKey=e=>{
      if(e.key==="Escape") onClose&&onClose();
      if(e.key==="ArrowDown"){e.preventDefault();setI(v=>Math.min(v+1,hits.length-1));}
      if(e.key==="ArrowUp"){e.preventDefault();setI(v=>Math.max(v-1,0));}
      if(e.key==="Enter"&&hits[i]){e.preventDefault();onSelect&&onSelect(hits[i]);onClose&&onClose();}
    };
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[open,hits,i,onClose,onSelect]);
  if(!open) return null;
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgb(20 19 17 / 0.32)",display:"flex",justifyContent:"center",alignItems:"flex-start",paddingTop:"12vh",zIndex:60}}>
      <div onClick={e=>e.stopPropagation()} style={{width:560,maxWidth:"calc(100vw - 32px)",background:"var(--ap-surface)",border:"1px solid var(--ap-border-strong)",borderRadius:"var(--ap-radius-panel)",boxShadow:"var(--ap-shadow-2)",overflow:"hidden",animation:"ap-rise var(--ap-dur-layer) var(--ap-ease) both"}}>
        <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",padding:"0 var(--ap-space-4)",height:48,borderBottom:"1px solid var(--ap-border)"}}>
          <Icon name="search" size={16} style={{color:"var(--ap-text-muted)"}}/>
          <input ref={inputRef} value={q} onChange={e=>{setQ(e.target.value);setI(0);}} placeholder={placeholder}
            style={{flex:1,border:0,outline:"none",background:"transparent",font:"var(--ap-text-ui)",fontVariationSettings:"var(--ap-vf-prose)"}}/>
          <span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-muted)"}}>ESC</span>
        </div>
        <div style={{maxHeight:320,overflow:"auto",padding:"var(--ap-space-1)"}}>
          {hits.length?hits.map((it,idx)=>(
            <button key={it.id||it.label} onMouseEnter={()=>setI(idx)} onClick={()=>{onSelect&&onSelect(it);onClose&&onClose();}}
              style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)",width:"100%",height:"var(--ap-row-h)",padding:"0 var(--ap-space-3)",border:0,borderRadius:"var(--ap-radius-control)",background:idx===i?"var(--ap-surface-hover)":"transparent",cursor:"pointer",textAlign:"left"}}>
              {it.icon&&<Icon name={it.icon} size={15} style={{color:"var(--ap-text-muted)"}}/>}
              <span style={{flex:1,font:"var(--ap-text-ui)",fontVariationSettings:it.data?"var(--ap-vf-data)":"var(--ap-vf-prose)"}}>{it.label}</span>
              {it.hint&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)",fontVariationSettings:"var(--ap-vf-data)"}}>{it.hint}</span>}
            </button>
          )):<div style={{padding:"var(--ap-space-4) var(--ap-space-3)",font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Sin coincidencias</div>}
        </div>
        <div style={{display:"flex",gap:"var(--ap-space-4)",padding:"var(--ap-space-2) var(--ap-space-4)",borderTop:"1px solid var(--ap-border)",font:"var(--ap-text-micro)",color:"var(--ap-text-muted)"}}>
          <span style={{fontVariationSettings:"var(--ap-vf-data)"}}>↑↓ mover</span><span style={{fontVariationSettings:"var(--ap-vf-data)"}}>↵ abrir</span><span style={{fontVariationSettings:"var(--ap-vf-data)"}}>⌘K cerrar</span>
        </div>
      </div>
    </div>
  );
}
