import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";

/** Entrada del asistente: textarea que crece, atajos visibles y una sola accion primaria. */
export function Composer({value="",onChange,onSend,onAttach,placeholder="Pregunta por un servicio, una region o un despliegue",disabled,busy=false,hint,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const ref=React.useRef(null);
  React.useEffect(()=>{ const el=ref.current; if(el){ el.style.height="auto"; el.style.height=Math.min(el.scrollHeight,160)+"px"; } },[value]);
  const keys=e=>{ if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); if(value.trim()&&!busy) onSend&&onSend(value); } };
  return (
    <div style={{display:"grid",gap:"var(--ap-space-2)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"flex-end",gap:"var(--ap-space-2)",padding:"var(--ap-space-2)",background:"var(--ap-surface)",border:"1px solid "+(focus?"var(--ap-accent)":"var(--ap-border-input)"),borderRadius:"var(--ap-radius-panel)",transition:"border-color var(--ap-dur-micro) var(--ap-ease)"}}>
        {onAttach&&<button type="button" onClick={onAttach} aria-label="Adjuntar" style={{width:32,height:32,display:"inline-flex",alignItems:"center",justifyContent:"center",border:0,borderRadius:"var(--ap-radius-control)",background:"transparent",color:"var(--ap-text-muted)",cursor:"pointer"}}><Icon name="paperclip" size={15}/></button>}
        <textarea ref={ref} rows={1} value={value} disabled={disabled} placeholder={placeholder}
          onChange={e=>onChange&&onChange(e.target.value)} onKeyDown={keys}
          onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
          style={{flex:1,minWidth:0,resize:"none",border:0,outline:"none",background:"transparent",padding:"6px 0",font:"var(--ap-weight-body) var(--ap-size-14)/var(--ap-leading-ui) var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-prose)",maxHeight:160}}/>
        <Button variant="primary" onClick={()=>value.trim()&&onSend&&onSend(value)} disabled={disabled||busy||!value.trim()}>{busy?"Trabajando":"Enviar"}</Button>
      </div>
      <div style={{display:"flex",gap:"var(--ap-space-4)",font:"var(--ap-text-micro)",color:"var(--ap-text-muted)"}}>
        <span style={{fontVariationSettings:"var(--ap-vf-data)"}}>↵ enviar</span>
        <span style={{fontVariationSettings:"var(--ap-vf-data)"}}>⇧↵ salto de linea</span>
        {hint&&<span>{hint}</span>}
      </div>
    </div>
  );
}
