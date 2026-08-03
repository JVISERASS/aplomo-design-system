const {Panel,PageHeader,Toolbar,DataTable,DataValue,Badge,Button,IconButton,SearchField,Stagger,InlineAlert,Tooltip,DateRange,ErrorState,ShareBar}=(typeof window!=="undefined"&&window.AP_UI)||{};

function DeploymentsView(){
  const rows=window.AP_DATA.deployments;
  const [q,setQ]=React.useState("");
  const [range,setRange]=React.useState("7d");
  const [failed,setFailed]=React.useState(false);
  const cols=[
    {key:"ref",label:"Referencia",width:"140px",data:true},
    {key:"ver",label:"Version",width:"96px",data:true},
    {key:"target",label:"Destino",width:"1fr",data:true,tone:"muted"},
    {key:"st",label:"Estado",width:"136px",render:r=><Badge tone={r.tone}>{r.st}</Badge>},
    {key:"started",label:"Inicio",width:"168px",align:"right",data:true},
    {key:"dur",label:"Duracion",width:"110px",align:"right",data:true},
    {key:"author",label:"Autor",width:"156px"}
  ];
  return (
    <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <PageHeader eyebrow="Entrega continua" title="Despliegues" meta={<DataValue value="4.18.2 · ultimo hace 4 d"/>} actions={<Button variant="primary">Desplegar version</Button>}/>
      <Toolbar left={<><SearchField value={q} onChange={e=>setQ(e.target.value)} placeholder="Version, destino, autor"/><DateRange value={range} onChange={setRange} absolute="2026-07-27 → 2026-08-03"/></>} right={<><Tooltip label="Historial completo"><IconButton icon="history" label="Historial"/></Tooltip><IconButton icon="download" label="Exportar"/></>}/>
      <div style={{flex:1,overflow:"auto",padding:"var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)"}}>
        <Stagger step={60} style={{display:"grid",gap:"var(--ap-space-4)"}}>
          <InlineAlert tone="warn" title="DPL-11481 revertido automaticamente">El umbral de error del 1% se supero a los 6 min 02 s. ap-south-1 sigue en 4.16.4.</InlineAlert>
          <Panel title="Ultimos despliegues" actions={<Button size="sm">Comparar versiones</Button>}>
            <DataTable columns={cols} rows={rows.filter(r=>q===""||(r.ver+r.target+r.author).toLowerCase().includes(q.toLowerCase()))}/>
          </Panel>
          <Panel title="Distribucion por region" padded actions={<Button size="sm" onClick={()=>setFailed(f=>!f)}>{failed?"Reintentar":"Simular fallo"}</Button>}>
            {failed?<ErrorState code="HTTP 503" detail="El agregador de metricas no responde. La ultima lectura es de hace 4 min." onRetry={()=>setFailed(false)} style={{padding:0}}/>:
            <ShareBar segments={[{label:"4.18.2 · eu-central-1",value:38},{label:"4.18.1 · us-east-1",value:32},{label:"4.18.1 · sa-east-1",value:22},{label:"4.16.4 · ap-south-1",value:8,tone:"error"}]}/>}
          </Panel>
        </Stagger>
      </div>
    </div>
  );
}
Object.assign(window,{DeploymentsView});
