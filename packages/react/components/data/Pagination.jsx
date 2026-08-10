import React from "react";
import { DataValue } from "./DataValue.jsx";
import { IconButton } from "../core/IconButton.jsx";
import { Select } from "../forms/Select.jsx";

/** Paginacion de listado: rango visible, tamano de pagina y dos flechas. Nada de numeros de pagina. */
export function Pagination({from=1,to=40,total=0,pageSize=40,onPageSize,onPrev,onNext,loading=false,style,...rest}){
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ap-space-3)",height:"var(--ap-header-h)",padding:"0 var(--ap-space-4)",borderTop:"1px solid var(--ap-border)",...style}} {...rest}>
      <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>
        <DataValue value={from+"–"+to} loading={loading} placeholder="0–00"/> de <DataValue value={total} loading={loading} placeholder="000"/>
      </span>
      <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)"}}>
        <Select value={String(pageSize)} onChange={e=>onPageSize&&onPageSize(Number(e.target.value))} options={[{value:"40",label:"40 por pagina"},{value:"80",label:"80 por pagina"},{value:"200",label:"200 por pagina"}]} style={{width:150}}/>
        <div style={{display:"flex",gap:"var(--ap-space-1)"}}>
          <IconButton icon="chevron-left" label="Pagina anterior" onClick={onPrev} disabled={from<=1}/>
          <IconButton icon="chevron-right" label="Pagina siguiente" onClick={onNext} disabled={to>=total}/>
        </div>
      </div>
    </div>
  );
}
