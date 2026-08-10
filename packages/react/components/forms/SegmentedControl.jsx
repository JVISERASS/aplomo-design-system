import React from "react";

/** Conmutador de 2-4 opciones cortas. Grafito: el seleccionado es fondo activo, no acento. */
export function SegmentedControl({options=[],value,onChange,size="md",data=false,style,...rest}){
  const h=size==="sm"?"var(--ap-control-h-sm)":"var(--ap-control-h)";
  return (
    <div role="tablist" style={{display:"inline-flex",height:h,border:"1px solid var(--ap-border-input)",borderRadius:"var(--ap-radius-control)",overflow:"hidden",background:"var(--ap-surface)",...style}} {...rest}>
      {options.map((o,i)=>{
        const v=typeof o==="string"?o:o.value,l=typeof o==="string"?o:o.label;
        const on=value===v;
        return (
          <button key={v} type="button" role="tab" aria-selected={on} onClick={()=>onChange&&onChange(v)}
            style={{padding:"0 12px",border:0,borderLeft:i?"1px solid var(--ap-border)":0,background:on?"var(--ap-surface-active)":"transparent",color:on?"var(--ap-text)":"var(--ap-text-secondary)",font:on?"var(--ap-text-ui-medium)":"var(--ap-text-ui)",fontSize:size==="sm"?"var(--ap-size-13)":"var(--ap-size-14)",fontVariationSettings:data?"var(--ap-vf-data)":"var(--ap-vf-prose)",cursor:"pointer",whiteSpace:"nowrap",transition:"background-color var(--ap-dur-micro) var(--ap-ease),color var(--ap-dur-micro) var(--ap-ease)"}}>{l}</button>
        );
      })}
    </div>
  );
}
