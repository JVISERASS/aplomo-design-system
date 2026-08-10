import React from "react";
import { Button } from "../core/Button.jsx";
import { DataValue } from "../data/DataValue.jsx";

const COPY={
  "404":{title:"Esta ruta no existe",detail:"Comprueba la referencia o vuelve al listado. Si has llegado desde un enlace guardado, el recurso puede haberse retirado."},
  "403":{title:"No tienes acceso a este recurso",detail:"Tu rol no incluye esta region. Pide acceso a la persona responsable del servicio."},
  "500":{title:"Algo ha fallado en el servidor",detail:"El fallo esta registrado con el identificador de abajo. Si persiste, adjuntalo al abrir la incidencia."},
  "503":{title:"Servicio en mantenimiento",detail:"Ventana programada de mantenimiento. La consola vuelve a estar disponible al terminar."}
};

/** Pagina de error completa: el codigo es el dato mas grande de la pantalla, y siempre hay una salida. */
export function PageError({code="404",title,detail,requestId,eta,actions,style,...rest}){
  const c=COPY[String(code)]||{};
  return (
    <div style={{display:"grid",gap:"var(--ap-space-4)",...style}} {...rest}>
      <DataValue value={code} size="var(--ap-size-48)" weight={500} style={{letterSpacing:"-0.03em",lineHeight:1,color:String(code)==="500"?"var(--ap-error)":"var(--ap-text)"}}/>
      <div style={{display:"grid",gap:"var(--ap-space-2)"}}>
        <h1 style={{margin:0,font:"var(--ap-weight-bold) var(--ap-size-23)/1.25 var(--ap-font-display)",letterSpacing:"-0.02em"}}>{title||c.title}</h1>
        <p style={{margin:0,font:"var(--ap-text-prose)",fontSize:"var(--ap-size-14)",color:"var(--ap-text-secondary)",maxWidth:"56ch",textWrap:"pretty"}}>{detail||c.detail}</p>
      </div>
      {(requestId||eta)&&<div style={{display:"grid",gap:"var(--ap-space-1)",padding:"var(--ap-space-3)",background:"var(--ap-surface-subtle)",border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-control)"}}>
        {requestId&&<div style={{display:"flex",justifyContent:"space-between",gap:"var(--ap-space-3)"}}><span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Identificador</span><DataValue value={requestId} size="var(--ap-size-12)"/></div>}
        {eta&&<div style={{display:"flex",justifyContent:"space-between",gap:"var(--ap-space-3)"}}><span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Fin previsto</span><DataValue value={eta} size="var(--ap-size-12)"/></div>}
      </div>}
      <div style={{display:"flex",gap:"var(--ap-space-2)",flexWrap:"wrap"}}>{actions||<Button variant="primary">Volver al listado</Button>}</div>
    </div>
  );
}
