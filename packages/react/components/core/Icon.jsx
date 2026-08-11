import React from "react";
import { AP_ICONS } from "./icon-data.js";

/** Set activo: arranca con los iconos que incrusta el sistema y crece con registerApIcons. */
const registro = new Map(Object.entries(AP_ICONS));

/**
 * Registra iconos adicionales, disponibles para cualquier `Icon` por su nombre.
 *
 * Aplomo incrusta solo los iconos que usa (unos 50). Para cualquier otro, importalo tu de
 * `lucide` —asi tu bundler solo se lleva los que nombras— y registralo al arrancar la app:
 *
 *   import { Rocket } from "lucide";
 *   import { registerApIcons } from "@jviserass/aplomo";
 *   registerApIcons({ rocket: Rocket });
 */
export function registerApIcons(iconos) {
  for (const [nombre, nodo] of Object.entries(iconos)) registro.set(nombre, nodo);
}

/** Nombres disponibles ahora mismo. Util para diagnosticar un icono que no aparece. */
export function apIconNames() {
  return [...registro.keys()].sort();
}

/**
 * Icono del sistema. Los trazos son de Lucide (ISC, https://lucide.dev), incrustados en el
 * paquete: no hay peticion de red ni dependencia de un script externo.
 *
 * Un nombre no registrado deja un hueco vacio del tamano pedido, en vez de romper el layout.
 */
export function Icon({name,size=16,strokeWidth=1.5,style,...rest}){
  const node=registro.get(name);
  const box={display:"inline-flex",width:size,height:size,flex:"0 0 auto",...style};
  if(!node) return <span aria-hidden="true" style={box} {...rest}/>;
  return (
    <span aria-hidden="true" style={box} {...rest}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
        fill="none" stroke="currentColor" strokeWidth={strokeWidth}
        strokeLinecap="round" strokeLinejoin="round" style={{display:"block"}}>
        {node.map(([tag,attrs],i)=>React.createElement(tag,{key:i,...attrs}))}
      </svg>
    </span>
  );
}
