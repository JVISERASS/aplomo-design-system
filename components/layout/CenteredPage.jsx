import React from "react";

/** Pagina sin sesion ni shell: acceso, error, mantenimiento. Contenido en una columna estrecha,
    marca arriba y pie de estado abajo. Fondo hundido, tarjeta con borde de 1px y cero sombra. */
export function CenteredPage({brand,width=380,footer,children,style,...rest}){
  return (
    <div style={{minHeight:"100vh",display:"grid",gridTemplateRows:"var(--ap-header-h) 1fr auto",background:"var(--ap-surface-sunken)",...style}} {...rest}>
      <div style={{display:"flex",alignItems:"center",padding:"0 var(--ap-space-6)",borderBottom:"1px solid var(--ap-border)",background:"var(--ap-surface)"}}>{brand}</div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"var(--ap-space-8) var(--ap-space-6)"}}>
        <div style={{width,maxWidth:"100%"}}>{children}</div>
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:"var(--ap-space-4)",padding:"var(--ap-space-4)",borderTop:"1px solid var(--ap-border)",font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>{footer}</div>
    </div>
  );
}
