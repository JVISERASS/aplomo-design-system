import React from "react";
import { Icon } from "../core/Icon.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Zona de subida: borde discontinuo de 1px, sin iconos grandes ni ilustracion. */
export function FileDrop({label="Arrastra un archivo o pulsa para elegir",hint,accept,files=[],onFiles,onRemove,style,...rest}){
  const [over,setOver]=React.useState(false);
  const input=React.useRef(null);
  const take=list=>onFiles&&onFiles(Array.from(list||[]));
  return (
    <div style={{display:"grid",gap:"var(--ap-space-2)",...style}} {...rest}>
      <button type="button" onClick={()=>input.current&&input.current.click()}
        onDragOver={e=>{e.preventDefault();setOver(true);}} onDragLeave={()=>setOver(false)}
        onDrop={e=>{e.preventDefault();setOver(false);take(e.dataTransfer.files);}}
        style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--ap-space-2)",padding:"var(--ap-space-6)",border:"1px dashed "+(over?"var(--ap-accent)":"var(--ap-border-strong)"),borderRadius:"var(--ap-radius-panel)",background:over?"var(--ap-accent-tint)":"var(--ap-surface-sunken)",cursor:"pointer",transition:"background-color var(--ap-dur-micro) var(--ap-ease),border-color var(--ap-dur-micro) var(--ap-ease)"}}>
        <Icon name="upload" size={15} style={{color:"var(--ap-text-muted)"}}/>
        <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>{label}</span>
      </button>
      <input ref={input} type="file" accept={accept} multiple onChange={e=>take(e.target.files)} style={{display:"none"}}/>
      {hint&&<span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>{hint}</span>}
      {files.length>0&&<div style={{border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-control)"}}>
        {files.map((file,i)=>(
          <div key={file.name+i} style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",height:"var(--ap-row-h)",padding:"0 var(--ap-space-3)",borderTop:i?"1px solid var(--ap-border)":0}}>
            <Icon name="file" size={14} style={{color:"var(--ap-text-muted)"}}/>
            <span style={{flex:1,font:"var(--ap-text-small)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{file.name}</span>
            <DataValue value={file.size} size="var(--ap-size-11)" tone="muted"/>
            {onRemove&&<button type="button" onClick={()=>onRemove(file)} aria-label="Quitar" style={{border:0,background:"transparent",cursor:"pointer",color:"var(--ap-text-muted)",padding:0,display:"inline-flex"}}><Icon name="x" size={12}/></button>}
          </div>))}
      </div>}
    </div>
  );
}
