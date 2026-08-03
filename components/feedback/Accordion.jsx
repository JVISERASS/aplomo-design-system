import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Acordeon de resumen: cabecera de 40px, contenido con borde superior. Sin animacion de altura. */
export function Accordion({items=[],defaultOpen=[],style,...rest}){
  const [open,setOpen]=React.useState(defaultOpen);
  const toggle=id=>setOpen(o=>o.includes(id)?o.filter(x=>x!==id):[...o,id]);
  return (
    <div style={{border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-panel)",overflow:"hidden",...style}} {...rest}>
      {items.map((it,i)=>{
        const id=it.id||it.title,on=open.includes(id);
        return (
          <div key={id} style={{borderTop:i?"1px solid var(--ap-border)":0}}>
            <button type="button" onClick={()=>toggle(id)} aria-expanded={on}
              style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)",width:"100%",height:"var(--ap-row-h)",padding:"0 var(--ap-space-4)",border:0,background:on?"var(--ap-surface-subtle)":"transparent",cursor:"pointer",textAlign:"left"}}>
              <Icon name={on?"chevron-down":"chevron-right"} size={14} style={{color:"var(--ap-text-muted)"}}/>
              <span style={{flex:1,font:"var(--ap-text-ui-medium)"}}>{it.title}</span>
              {it.meta&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums"}}>{it.meta}</span>}
            </button>
            {on&&<div style={{padding:"var(--ap-space-4)",borderTop:"1px solid var(--ap-border)"}}>{it.children}</div>}
          </div>
        );
      })}
    </div>
  );
}
