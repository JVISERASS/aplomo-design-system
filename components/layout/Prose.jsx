import React from "react";

/** Prosa larga: 15px / 1.65, maximo 68ch, text-wrap pretty. Unico sitio con medida de lectura. */
export function Prose({children,style,...rest}){
  return <div style={{font:"var(--ap-weight-body) var(--ap-size-15)/var(--ap-leading-prose) var(--ap-font-core)",fontVariationSettings:"var(--ap-vf-prose)",maxWidth:"var(--ap-measure-prose)",textWrap:"pretty",color:"var(--ap-text)",...style}} {...rest}>{children}</div>;
}
