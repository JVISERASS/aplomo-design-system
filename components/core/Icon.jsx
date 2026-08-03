import React from "react";

const pascal=n=>String(n).split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join("");

/** Envoltorio del set Lucide (cargado por CDN en la pagina). Sustitucion declarada en readme.md.
    El SVG se inyecta DENTRO de un span propiedad de React: React nunca ve el nodo inyectado,
    asi que ningun cambio de estado puede provocar un removeChild sobre un nodo que lucide sustituyo. */
export function Icon({name,size=16,strokeWidth=1.5,style,...rest}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    let alive=true,tries=0;
    const paint=()=>{
      if(!alive) return;
      const el=ref.current;
      if(!el) return;
      const lucide=window.lucide;
      if(!lucide||!lucide.icons||!lucide.createElement){
        if(tries++<20) setTimeout(paint,100);
        return;
      }
      const node=lucide.icons[pascal(name)];
      el.textContent="";
      if(!node) return;
      const svg=lucide.createElement(node);
      svg.setAttribute("width",size);
      svg.setAttribute("height",size);
      svg.setAttribute("stroke-width",strokeWidth);
      svg.style.display="block";
      el.appendChild(svg);
    };
    paint();
    return ()=>{ alive=false; const el=ref.current; if(el) el.textContent=""; };
  },[name,size,strokeWidth]);
  return <span ref={ref} aria-hidden="true" style={{display:"inline-flex",width:size,height:size,flex:"0 0 auto",...style}} {...rest}/>;
}
