const {Panel,PageHeader,DataValue,Badge,Button,IconButton,Stagger,InlineAlert,Tooltip,DataTable,KeyValue,AsciiDiagram,AsciiMeter,BarSeries,Sparkline,ShareBar}=(typeof window!=="undefined"&&window.AP_UI)||{};

function OverviewView({onGo}){
  const [loading,setLoading]=React.useState(true);
  const [t,setT]=React.useState("24 h");
  React.useEffect(()=>{const x=setTimeout(()=>setLoading(false),700);return ()=>clearTimeout(x);},[]);
  const reload=()=>{setLoading(true);setTimeout(()=>setLoading(false),700);};
  const regions=[
    {id:"eu",name:"eu-central-1",rpm:"71.844",p95:"128 ms",st:"ACTIVA",tone:"ok",load:88},
    {id:"us",name:"us-east-1",rpm:"160.382",p95:"104 ms",st:"ACTIVA",tone:"ok",load:100},
    {id:"sa",name:"sa-east-1",rpm:"26.050",p95:"162 ms",st:"ACTIVA",tone:"ok",load:41},
    {id:"ap",name:"ap-south-1",rpm:"0",p95:"—",st:"DRENADA",tone:"error",load:0}
  ];
  const lab={font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)"};

  return (
    <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <PageHeader eyebrow="Portada de operacion · 2026-08-03 09:12 UTC" title="Todo en marcha salvo una region"
        meta={<><DataValue value="10 servicios" loading={loading} placeholder="00 servicios"/><span style={{color:"var(--ap-gray-300)"}}>/</span><DataValue value="1 incidencia abierta" loading={loading} placeholder="0 incidencias"/></>}
        actions={<><Tooltip label="Recalcular ahora"><IconButton icon="refresh-cw" label="Recargar" onClick={reload}/></Tooltip><Button variant="primary" onClick={()=>onGo&&onGo("svc")}>Ir a servicios</Button></>}/>

      <div style={{flex:1,overflow:"auto"}}>
        <Stagger step={60} style={{display:"flex",flexDirection:"column"}}>

          <div style={{borderTop:"1px solid var(--ap-border)",borderBottom:"1px solid var(--ap-border)",padding:"var(--ap-space-8) var(--ap-space-6)",display:"grid",gridTemplateColumns:"minmax(0,1.15fr) 1px minmax(0,1fr)",gap:"var(--ap-space-8)",alignItems:"end"}}>
            <div>
              <div style={{...lab,marginBottom:10}}>Peticiones por minuto · agregado</div>
              <div style={{display:"flex",alignItems:"baseline",gap:12}}>
                <DataValue value="258.276" loading={loading} placeholder="000.000" size="var(--ap-size-48)" weight={500} style={{letterSpacing:"-0.03em",lineHeight:1}}/>
                <DataValue value="+2,1%" loading={loading} placeholder="—" size="var(--ap-size-16)" weight={500} tone="ok"/>
              </div>
              <div style={{marginTop:18}}>
                <BarSeries data={[38,42,40,47,52,49,58,61,57,64,60,68,72,69,74,78,71,76,82,79,86,84,91,88]} labels={["hace 24 h","ahora"]} loading={loading} height={56}/>
              </div>
            </div>
            <div style={{background:"var(--ap-border)",alignSelf:"stretch"}}/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",rowGap:"var(--ap-space-6)",columnGap:"var(--ap-space-6)"}}>
              {[["p95 agregado","184 ms","+12 ms","warn"],["Disponibilidad","99,982%","objetivo 99,900%",undefined],["Tasa de error","0,31%","−0,04%","ok"],["MTTR semana","42 min","4 incidencias",undefined]].map(([k,v,d,tone])=>(
                <div key={k}>
                  <div style={{...lab,marginBottom:6}}>{k}</div>
                  <DataValue value={v} loading={loading} placeholder="—" size="var(--ap-size-23)" weight={500} style={{letterSpacing:"-0.02em"}}/>
                  <div style={{marginTop:2}}><DataValue value={d} loading={loading} placeholder="—" size="var(--ap-size-12)" tone={tone||"muted"}/></div>
                </div>))}
            </div>
          </div>

          <div style={{padding:"var(--ap-space-4) var(--ap-space-6) 0"}}>
            <InlineAlert tone="error" title="ap-south-1 drenada desde 2026-08-02 04:12">SVC-7712-AP sin respuesta. INC-2261 abierta, guardia Rahul Menon.</InlineAlert>
          </div>

          <div style={{padding:"var(--ap-space-4) var(--ap-space-6)"}}>
            <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:12}}>
              <div style={lab}>Carga por region</div>
              <div style={{display:"flex",gap:16}}>{["1 h","24 h","7 d"].map(x=>(
                <button key={x} onClick={()=>setT(x)} style={{border:0,background:"transparent",padding:0,cursor:"pointer",font:"var(--ap-text-small)",fontVariationSettings:"var(--ap-vf-data)",color:t===x?"var(--ap-text)":"var(--ap-text-muted)",borderBottom:t===x?"1px solid var(--ap-gray-900)":"1px solid transparent"}}>{x}</button>))}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",border:"1px solid var(--ap-border)",borderRadius:"var(--ap-radius-panel)",overflow:"hidden"}}>
              {regions.map((r,i)=>(
                <div key={r.id} style={{padding:"var(--ap-space-4)",borderRight:i<3?"1px solid var(--ap-border)":0,display:"grid",gap:10}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
                    <DataValue value={r.name} size="var(--ap-size-13)" weight={500}/>
                    <Badge tone={r.tone}>{r.st}</Badge>
                  </div>
                  <div style={{display:"flex",alignItems:"baseline",gap:8}}>
                    <DataValue value={r.rpm} loading={loading} placeholder="000.000" size="var(--ap-size-29)" weight={500} style={{letterSpacing:"-0.02em",lineHeight:1.05}}/>
                    <span style={{font:"var(--ap-text-micro)",color:"var(--ap-text-muted)"}}>pet./min</span>
                  </div>
                  <AsciiMeter value={loading?0:r.load} tone={r.tone==="error"?"error":"default"} showValue={!loading}/>
                  <Sparkline data={r.tone==="error"?[40,32,20,12,6,2,0,0]:[52,49,58,61,57,64,60,68]} width={140} height={22} tone={r.tone==="error"?"error":"default"}/>
                  <DataValue value={"p95 "+r.p95} loading={loading} placeholder="p95 —" size="var(--ap-size-12)" tone="muted"/>
                </div>))}
            </div>
          </div>

          <div style={{padding:"var(--ap-space-4) var(--ap-space-6) 0"}}>
            <Panel title="Topologia de trafico" padded actions={<Button size="sm" onClick={()=>onGo&&onGo("dep")}>Ver despliegues</Button>}>
              <AsciiDiagram>{` cliente ──▶ borde ──┬──▶ eu-central-1   4.18.2   ${loading?"[░░░░░░░░░░]":"[████████░░]  88%"}
                     ├──▶ us-east-1      4.18.1   ${loading?"[░░░░░░░░░░]":"[██████████] 100%"}
                     ├──▶ sa-east-1      4.18.1   ${loading?"[░░░░░░░░░░]":"[████░░░░░░]  41%"}
                     └──▶ ap-south-1     4.16.4   ${loading?"[░░░░░░░░░░]":"[░░░░░░░░░░] drenada"}`}</AsciiDiagram>
            </Panel>
          </div>

          <div style={{padding:"var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)",display:"grid",gridTemplateColumns:"minmax(0,1.4fr) minmax(0,1fr)",gap:"var(--ap-space-4)",alignItems:"start"}}>
            <Panel title="Requiere atencion" actions={<Button size="sm" onClick={()=>onGo&&onGo("inc")}>Ver incidencias</Button>}>
              <DataTable
                columns={[{key:"ref",label:"Referencia",width:"128px",data:true},{key:"what",label:"Asunto",width:"1fr"},{key:"age",label:"Antiguedad",width:"116px",align:"right",data:true}]}
                rows={[{id:"a",ref:"INC-2261",what:"Liquidacion sin respuesta en ap-south-1",age:"31 h 20 min"},{id:"b",ref:"INC-2260",what:"Reintentos de cobro por encima del objetivo p95",age:"39 h 52 min"},{id:"c",ref:"SVC-5505-DE",what:"Exportacion contable con p95 de 340 ms",age:"12 d"}]}
                onSelectRow={()=>onGo&&onGo("inc")}/>
            </Panel>
            <div style={{display:"grid",gap:"var(--ap-space-4)"}}>
            <Panel title="Reparto de version" padded>
              <ShareBar loading={loading} segments={[{label:"4.18.2",value:62},{label:"4.18.1",value:30},{label:"4.16.4",value:8,tone:"error"}]}/>
            </Panel>
            <Panel title="Ventana de despliegue" padded>
              <KeyValue label="Proxima ventana" value="2026-08-04 22:00 UTC" loading={loading}/>
              <KeyValue label="Version candidata" value="4.18.3" loading={loading}/>
              <KeyValue label="Regiones pendientes" value="ap-south-1, sa-east-1" loading={loading}/>
              <KeyValue label="Aprobaciones" value="1 de 2" loading={loading}/>
              <div style={{marginTop:"var(--ap-space-4)",display:"flex",gap:"var(--ap-space-2)"}}>
                <Button size="sm" onClick={()=>onGo&&onGo("dep")}>Ver despliegues</Button>
                <Button size="sm" onClick={()=>onGo&&onGo("set")}>Ajustar umbrales</Button>
              </div>
            </Panel>
            </div>
          </div>

        </Stagger>
      </div>
    </div>
  );
}
Object.assign(window,{OverviewView});
