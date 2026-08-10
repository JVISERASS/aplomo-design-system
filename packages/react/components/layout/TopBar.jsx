import React from "react";
import { Avatar } from "../core/Avatar.jsx";
import { DataValue } from "../data/DataValue.jsx";

/** Barra superior de 48px: marca a la izquierda, contexto en el centro, identidad a la derecha. */
export function TopBar({brand,center,right,user,style,...rest}){
  return (
    <header style={{display:"flex",alignItems:"center",gap:"var(--ap-space-4)",height:"var(--ap-header-h)",padding:"0 var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)",background:"var(--ap-surface)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)",minWidth:0}}>{brand}</div>
      <div style={{flex:1,display:"flex",justifyContent:"center",minWidth:0}}>{center}</div>
      <div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-3)"}}>
        {right}
        {user&&<div style={{display:"flex",alignItems:"center",gap:"var(--ap-space-2)",paddingLeft:"var(--ap-space-3)",borderLeft:"1px solid var(--ap-border)"}}>
          <Avatar name={user.name}/>
          <div style={{display:"grid",gap:1}}>
            <span style={{font:"var(--ap-text-small)",lineHeight:1.2}}>{user.name}</span>
            {user.meta&&<DataValue value={user.meta} size="var(--ap-size-11)" tone="muted"/>}
          </div>
        </div>}
      </div>
    </header>
  );
}
