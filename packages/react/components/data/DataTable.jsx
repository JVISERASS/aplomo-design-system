import React from "react";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Icon } from "../core/Icon.jsx";

/** Tabla densa: filas de 40px, separador de 1px, orden por columna y navegacion con teclado (↑↓ ↵ Esc). */
export function DataTable({columns=[],rows=[],selectedId,onSelectRow,selectable=false,checked=[],onCheck,rowRef,sort,onSort,keyboard=true,onEscape,style,...rest}){
  const [hover,setHover]=React.useState(null);
  const [cursor,setCursor]=React.useState(-1);
  const cells=React.useRef({});
  const grid=(selectable?"36px ":"")+columns.map(c=>c.width||"1fr").join(" ");

  const onKey=e=>{
    if(!keyboard||!rows.length) return;
    if(e.key==="ArrowDown"){e.preventDefault();setCursor(v=>Math.min((v<0?-1:v)+1,rows.length-1));}
    else if(e.key==="ArrowUp"){e.preventDefault();setCursor(v=>Math.max((v<0?rows.length:v)-1,0));}
    else if(e.key==="Enter"&&cursor>=0){e.preventDefault();const r=rows[cursor];if(r&&onSelectRow) onSelectRow(r,cells.current[r.id]);}
    else if(e.key==="Escape"){onEscape&&onEscape();}
  };

  const sortIcon=c=>{
    if(!c.sortable) return null;
    const active=sort&&sort.key===c.key;
    return <span style={{marginLeft:4,opacity:active?1:0.35,fontVariationSettings:"var(--ap-vf-data)"}}>{active&&sort.dir==="desc"?"▼":"▲"}</span>;
  };

  return (
    <div role="table" tabIndex={keyboard?0:undefined} onKeyDown={onKey} style={{width:"100%",outline:"none",...style}} {...rest}>
      <div role="row" style={{display:"grid",gridTemplateColumns:grid,alignItems:"center",height:32,padding:"0 var(--ap-space-4)",borderBottom:"1px solid var(--ap-border-strong)",background:"var(--ap-surface-sunken)",position:"sticky",top:0,zIndex:1}}>
        {selectable&&<span onClick={e=>e.stopPropagation()} style={{display:"inline-flex"}}><Checkbox checked={checked.length>0&&checked.length===rows.length} indeterminate={checked.length>0&&checked.length<rows.length} onChange={()=>onCheck&&onCheck("all")}/></span>}
        {columns.map(c=>(
          <span key={c.key} onClick={()=>c.sortable&&onSort&&onSort(c.key)}
            style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:sort&&sort.key===c.key?"var(--ap-text)":"var(--ap-text-muted)",textAlign:c.align||"left",paddingRight:"var(--ap-space-3)",cursor:c.sortable?"pointer":"default",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
            {c.label}{sortIcon(c)}
          </span>
        ))}
      </div>
      {rows.map((r,i)=>{
        const sel=selectedId===r.id, cur=cursor===i;
        return (
          <div role="row" key={r.id} onClick={()=>onSelectRow&&onSelectRow(r,cells.current[r.id])}
            onMouseEnter={()=>setHover(r.id)} onMouseLeave={()=>setHover(null)}
            className="ap-rise" style={{"--ap-delay":Math.min(i,7)*60+"ms",display:"grid",gridTemplateColumns:grid,alignItems:"center",height:"var(--ap-row-h)",padding:"0 var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)",background:sel?"var(--ap-accent-tint)":cur||hover===r.id?"var(--ap-surface-hover)":"transparent",boxShadow:sel?"inset 2px 0 0 var(--ap-accent)":cur?"inset 2px 0 0 var(--ap-gray-400)":"none",cursor:"pointer",transition:"background-color var(--ap-dur-micro) var(--ap-ease)"}}>
            {selectable&&<span onClick={e=>e.stopPropagation()} style={{display:"inline-flex"}}><Checkbox checked={checked.includes(r.id)} onChange={()=>onCheck&&onCheck(r.id)}/></span>}
            {columns.map(c=>(
              <span key={c.key} ref={c.shared?el=>{cells.current[r.id]=el;rowRef&&rowRef(r.id,el);}:undefined}
                style={{minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textAlign:c.align||"left",paddingRight:"var(--ap-space-3)",font:"var(--ap-text-ui)",color:c.tone==="muted"?"var(--ap-text-secondary)":"var(--ap-text)",fontVariationSettings:c.data?"var(--ap-vf-data)":"var(--ap-vf-prose)",fontVariantNumeric:c.data?"tabular-nums":"normal"}}>
                {c.render?c.render(r):r[c.key]}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
