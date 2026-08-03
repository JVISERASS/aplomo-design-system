import React from "react";

/** Armazon de la aplicacion: barra superior opcional, navegacion lateral y area principal.
    Es estructura: aparece instantanea, nunca se anima al cargar. */
export function AppShell({topbar,nav,aside,children,style,...rest}){
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden",background:"var(--ap-surface)",...style}} {...rest}>
      {topbar}
      <div style={{flex:1,display:"flex",minHeight:0}}>
        {nav}
        <main style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>{children}</main>
        {aside}
      </div>
    </div>
  );
}
