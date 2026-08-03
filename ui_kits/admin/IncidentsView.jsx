const {Panel,PageHeader,Toolbar,DataTable,DataValue,Badge,Button,IconButton,SearchField,Select,Stagger,Tabs,EmptyState,SegmentedControl,List,Steps,LogStream,SectionHeader,Columns}=(typeof window!=="undefined"&&window.AP_UI)||{};

function IncidentsView(){
  const all=window.AP_DATA.incidents;
  const [tab,setTab]=React.useState("open");
  const [mode,setMode]=React.useState("Tabla");
  const [sel,setSel]=React.useState("i1");
  const rows=all.filter(i=>tab==="all"||(tab==="open"&&i.st!=="CERRADA")||(tab==="closed"&&i.st==="CERRADA"));
  const cols=[
    {key:"ref",label:"Referencia",width:"128px",data:true},
    {key:"sev",label:"Severidad",width:"104px",render:r=><Badge tone={r.tone}>{r.sev}</Badge>},
    {key:"title",label:"Asunto",width:"1fr"},
    {key:"st",label:"Estado",width:"112px",data:true,tone:"muted"},
    {key:"opened",label:"Apertura",width:"160px",align:"right",data:true},
    {key:"age",label:"Antiguedad",width:"112px",align:"right",data:true},
    {key:"owner",label:"Guardia",width:"150px"}
  ];
  return (
    <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <PageHeader eyebrow="Operacion" title="Incidencias" meta={<><DataValue value="1 abierta"/><span style={{color:"var(--ap-gray-300)"}}>/</span><DataValue value="MTTR 42 min"/></>} actions={<Button variant="primary">Abrir incidencia</Button>}/>
      <Tabs tabs={[{value:"open",label:"Abiertas",count:all.filter(i=>i.st!=="CERRADA").length},{value:"closed",label:"Cerradas",count:all.filter(i=>i.st==="CERRADA").length},{value:"all",label:"Todas",count:all.length}]} value={tab} onChange={setTab}/>
      <Toolbar left={<><SearchField placeholder="Referencia o asunto"/><Select options={["Todas las guardias","Marta Iglesias","Rahul Menon","Ana Duarte"]} style={{width:190}}/></>} right={<SegmentedControl value={mode} onChange={setMode} options={["Tabla","Lista"]}/>}/>
      <div style={{flex:1,overflow:"auto",padding:"var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)"}}>
        <Stagger step={60} style={{display:"grid",gap:"var(--ap-space-4)"}}>
          <Panel>{!rows.length?<EmptyState title="Sin incidencias en este estado" style={{borderTop:0}}/>:
            mode==="Tabla"?<DataTable columns={cols} rows={rows}/>:
            <List selectedId={sel} onSelect={it=>setSel(it.id)} items={rows.map(r=>({id:r.id,title:r.title,ref:r.ref,subtitle:r.owner+" · "+r.st,meta:r.age,tone:r.tone}))}/>}</Panel>
          <Panel title="Mitigacion de INC-2261" padded>
            <Steps current={2} steps={[{label:"Detectada",meta:"04:12"},{label:"Region drenada",meta:"04:15"},{label:"Nodos sustituidos",meta:"en curso"},{label:"Cerrada"}]}/>
            <div style={{marginTop:"var(--ap-space-4)"}}>
              <SectionHeader label="Salida del nodo 7" meta="ap-south-1"/>
              <LogStream height={132} lines={[
                {at:"04:12:02",level:"ERROR",text:"health check sin respuesta · 3 intentos"},
                {at:"04:15:40",level:"INFO",text:"drenaje de region iniciado"},
                {at:"04:19:11",level:"OK",text:"trafico redirigido a us-east-1"},
                {at:"05:02:38",level:"WARN",text:"sustitucion de nodo pendiente de cuota"}]}/>
            </div>
          </Panel>
          <Panel title="Tiempos de la ultima semana" padded>
            <div style={{display:"flex",gap:"var(--ap-space-10)"}}>
              {[["Deteccion","3 min"],["Mitigacion","18 min"],["Resolucion","42 min"],["Incidencias","4"]].map(([k,v])=>(
                <div key={k}><div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",marginBottom:4}}>{k}</div>
                <DataValue value={v} size="var(--ap-size-23)" weight={500}/></div>))}
            </div>
          </Panel>
        </Stagger>
      </div>
    </div>
  );
}
Object.assign(window,{IncidentsView});
