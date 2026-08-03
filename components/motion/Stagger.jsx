import React from "react";

/**
 * FIRMA 2 — entrada coreografiada, una sola vez. La estructura no se anima; solo el contenido
 * entra en cascada: opacidad 0->1, translateY 8px->0, 60ms de desfase, maximo 8 escalonados.
 */
export function Stagger({children,step=60,max=8,as="div",style,...rest}){
  const items=React.Children.toArray(children);
  return React.createElement(as,{style,...rest},items.map((child,i)=>(
    <div key={i} className="ap-rise" style={{"--ap-delay":Math.min(i,max-1)*step+"ms"}}>{child}</div>
  )));
}
