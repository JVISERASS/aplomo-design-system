import React from "react";

const origins=new Map();

/**
 * FIRMA 3 — elemento compartido. El identificador de la fila VIAJA a la cabecera del panel de detalle.
 * Captura el rect de origen con SharedValue.capture(key, el) al hacer clic en la fila, y monta
 * <SharedValue sharedKey={key}> en el destino: hace FLIP (translate + escala tipografica) en 400ms.
 */
export function SharedValue({sharedKey,children,style,...rest}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const el=ref.current,from=origins.get(sharedKey);
    if(!el||!from||Date.now()-from.t>800) return;
    const to=el.getBoundingClientRect();
    if(!to.width) return;
    const dx=from.rect.left-to.left,dy=from.rect.top+from.rect.height/2-(to.top+to.height/2),s=from.size/parseFloat(getComputedStyle(el).fontSize);
    el.animate([
      {transform:`translate(${dx}px,${dy}px) scale(${s})`,transformOrigin:"left center",opacity:.6},
      {transform:"none",transformOrigin:"left center",opacity:1}
    ],{duration:400,easing:"cubic-bezier(0.2,0,0,1)"});
    origins.delete(sharedKey);
  },[sharedKey]);
  return <span ref={ref} style={{display:"inline-block",fontVariationSettings:"var(--ap-vf-data)",fontVariantNumeric:"tabular-nums",...style}} {...rest}>{children}</span>;
}

SharedValue.capture=function(key,el){
  if(!el) return;
  const rect=el.getBoundingClientRect();
  origins.set(key,{rect,size:parseFloat(getComputedStyle(el).fontSize),t:Date.now()});
};
