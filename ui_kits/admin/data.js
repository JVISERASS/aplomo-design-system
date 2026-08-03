window.AP_DATA={
  services:[
    {id:"s1",ref:"SVC-4820-DE",name:"Facturacion",region:"eu-central-1",st:"ACTIVO",tone:"ok",p95:"128 ms",rpm:"42.108",ver:"4.18.2",owner:"Marta Iglesias",dep:"2026-07-29 14:02",err:"0,02%",nodes:"18",sla:"99,982%"},
    {id:"s2",ref:"SVC-4821-DE",name:"Conciliacion nocturna",region:"eu-central-1",st:"DEGRADADO",tone:"warn",p95:"184 ms",rpm:"8.412",ver:"4.18.2",owner:"Ignacio Ferrer",dep:"2026-07-29 14:02",err:"1,40%",nodes:"6",sla:"99,410%"},
    {id:"s3",ref:"SVC-3390-US",name:"Pasarela de pagos",region:"us-east-1",st:"ACTIVO",tone:"ok",p95:"96 ms",rpm:"128.402",ver:"4.18.1",owner:"Lucia Bernal",dep:"2026-07-24 09:41",err:"0,01%",nodes:"44",sla:"99,996%"},
    {id:"s4",ref:"SVC-3391-US",name:"Antifraude",region:"us-east-1",st:"ACTIVO",tone:"ok",p95:"212 ms",rpm:"31.980",ver:"4.17.9",owner:"Lucia Bernal",dep:"2026-07-18 11:20",err:"0,08%",nodes:"22",sla:"99,940%"},
    {id:"s5",ref:"SVC-7712-AP",name:"Liquidacion",region:"ap-south-1",st:"CAIDO",tone:"error",p95:"—",rpm:"0",ver:"4.16.4",owner:"Rahul Menon",dep:"2026-06-30 03:12",err:"100%",nodes:"0",sla:"98,120%"},
    {id:"s6",ref:"SVC-7713-AP",name:"Informes regulatorios",region:"ap-south-1",st:"EN COLA",tone:"neutral",p95:"—",rpm:"—",ver:"4.18.2",owner:"Rahul Menon",dep:"pendiente",err:"—",nodes:"4",sla:"—"},
    {id:"s7",ref:"SVC-5504-DE",name:"Catalogo de tarifas",region:"eu-central-1",st:"ACTIVO",tone:"ok",p95:"64 ms",rpm:"19.220",ver:"4.18.2",owner:"Marta Iglesias",dep:"2026-07-29 14:02",err:"0,00%",nodes:"12",sla:"99,999%"},
    {id:"s8",ref:"SVC-5505-DE",name:"Exportacion contable",region:"eu-central-1",st:"ACTIVO",tone:"ok",p95:"340 ms",rpm:"1.104",ver:"4.18.0",owner:"Ignacio Ferrer",dep:"2026-07-22 16:50",err:"0,12%",nodes:"4",sla:"99,880%"},
    {id:"s9",ref:"SVC-9001-BR",name:"Cobros recurrentes",region:"sa-east-1",st:"ACTIVO",tone:"ok",p95:"148 ms",rpm:"22.640",ver:"4.18.1",owner:"Ana Duarte",dep:"2026-07-26 08:15",err:"0,04%",nodes:"14",sla:"99,970%"},
    {id:"s10",ref:"SVC-9002-BR",name:"Reintentos de cobro",region:"sa-east-1",st:"DEGRADADO",tone:"warn",p95:"402 ms",rpm:"3.410",ver:"4.18.1",owner:"Ana Duarte",dep:"2026-07-26 08:15",err:"2,10%",nodes:"5",sla:"99,220%"}
  ],
  deployments:[
    {id:"d1",ref:"DPL-11482",ver:"4.18.2",target:"eu-central-1",st:"COMPLETADO",tone:"ok",started:"2026-07-29 13:58",dur:"4 min 12 s",author:"Marta Iglesias"},
    {id:"d2",ref:"DPL-11481",ver:"4.18.2",target:"ap-south-1",st:"REVERTIDO",tone:"error",started:"2026-07-29 11:04",dur:"9 min 40 s",author:"Rahul Menon"},
    {id:"d3",ref:"DPL-11480",ver:"4.18.1",target:"sa-east-1",st:"COMPLETADO",tone:"ok",started:"2026-07-26 08:11",dur:"3 min 02 s",author:"Ana Duarte"},
    {id:"d4",ref:"DPL-11479",ver:"4.18.1",target:"us-east-1",st:"COMPLETADO",tone:"ok",started:"2026-07-24 09:38",dur:"6 min 55 s",author:"Lucia Bernal"},
    {id:"d5",ref:"DPL-11478",ver:"4.18.0",target:"eu-central-1",st:"COMPLETADO",tone:"ok",started:"2026-07-22 16:44",dur:"4 min 48 s",author:"Ignacio Ferrer"}
  ],
  incidents:[
    {id:"i1",ref:"INC-2261",title:"Liquidacion sin respuesta en ap-south-1",sev:"SEV-1",tone:"error",opened:"2026-08-02 04:12",age:"31 h 20 min",owner:"Rahul Menon",st:"ABIERTA"},
    {id:"i2",ref:"INC-2260",title:"Reintentos de cobro por encima del objetivo p95",sev:"SEV-3",tone:"warn",opened:"2026-08-01 19:40",age:"39 h 52 min",owner:"Ana Duarte",st:"MITIGADA"},
    {id:"i3",ref:"INC-2259",title:"Conciliacion nocturna con 1,4% de error",sev:"SEV-3",tone:"warn",opened:"2026-07-31 02:05",age:"2 d 09 h",owner:"Ignacio Ferrer",st:"MITIGADA"},
    {id:"i4",ref:"INC-2258",title:"Exportacion contable lenta en cierre de mes",sev:"SEV-4",tone:"neutral",opened:"2026-07-28 22:31",age:"4 d 12 h",owner:"Ignacio Ferrer",st:"CERRADA"}
  ]
};
