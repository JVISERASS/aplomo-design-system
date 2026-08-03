const {AppShell,TopBar,SideNav,Panel,Message,Composer,AssistantTrace,Citation,DataValue,Button,IconButton,Tooltip,EmptyState,Stagger,SectionHeader,KeyValue,Badge,Sparkline,Breadcrumb,Divider,Chip}=(typeof window!=="undefined"&&window.AP_UI)||{};

const THREADS=[
  {id:"t1",label:"p95 de eu-central-1",meta:"09:12"},
  {id:"t2",label:"Coste del reintento de cobro",meta:"ayer"},
  {id:"t3",label:"Ventana de despliegue de agosto",meta:"31 jul"}
];
const ANSWER={
  trace:[{label:"metrics.p95(eu-central-1, 24h)",ms:180},{label:"deploys.list(eu-central-1)",ms:96},{label:"incidents.open()",ms:42}],
  cites:[{label:"SVC-4821-DE",hint:"conciliacion"},{label:"DPL-11482",hint:"despliegue",icon:"git-commit-horizontal"}]
};

function AssistantKit(){
  const [thread,setThread]=React.useState("t1");
  const [q,setQ]=React.useState("");
  const [busy,setBusy]=React.useState(false);
  const [turns,setTurns]=React.useState([
    {role:"user",at:"09:12",text:"¿Por que ha subido el p95 en eu-central-1?"},
    {role:"assistant",at:"09:12",answer:true}
  ]);
  const send=text=>{
    setTurns(t=>[...t,{role:"user",at:"09:14",text}]);
    setQ("");setBusy(true);
    setTimeout(()=>{ setTurns(t=>[...t,{role:"assistant",at:"09:14",answer:true}]); setBusy(false); },1200);
  };
  return (
    <AppShell
      topbar={<TopBar
        brand={<><span style={{font:"var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)",letterSpacing:"-0.02em"}}>Aplomo</span><span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-muted)"}}>asistente</span></>}
        center={<Breadcrumb items={["Operacion","Asistente"]}/>}
        right={<Tooltip label="Historial"><IconButton icon="history" label="Historial"/></Tooltip>}
        user={{name:"Marta Iglesias",meta:"guardia · eu-central-1"}}/>}
      nav={<SideNav value={thread} onChange={setThread}
        groups={[{label:"Conversaciones",items:THREADS.map(t=>({value:t.id,label:t.label,icon:"message-square"}))},
                 {label:"Contexto",items:[{value:"svc",label:"Servicios",icon:"server",count:248},{value:"dep",label:"Despliegues",icon:"git-commit-horizontal",count:12}]}]}
        footer={<Button size="sm" style={{width:"100%"}}>Nueva conversacion</Button>}/>}
      aside={<aside style={{width:300,flex:"0 0 auto",borderLeft:"1px solid var(--ap-border)",background:"var(--ap-surface-sunken)",padding:"var(--ap-space-4)",overflow:"auto"}}>
        <SectionHeader label="Contexto de la respuesta"/>
        <Panel padded style={{marginBottom:"var(--ap-space-3)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"var(--ap-space-2)"}}>
            <DataValue value="SVC-4821-DE" size="var(--ap-size-13)" weight={500}/><Badge tone="warn">DEGRADADO</Badge>
          </div>
          <Sparkline data={[172,174,176,180,182,184,184,186]} width={240} height={26} tone="warn"/>
          <KeyValue label="p95" value="184 ms"/>
          <KeyValue label="Error" value="1,40%"/>
          <KeyValue label="Version" value="4.18.2"/>
        </Panel>
        <div style={{display:"flex",flexWrap:"wrap",gap:"var(--ap-space-2)"}}>
          <Chip data>eu-central-1</Chip><Chip data>24 h</Chip>
        </div>
        <Divider label="Limites"/>
        <p style={{margin:0,font:"var(--ap-text-small)",color:"var(--ap-text-secondary)",textWrap:"pretty"}}>El asistente lee metricas, despliegues e incidencias. No ejecuta acciones ni modifica configuracion.</p>
      </aside>}>
      <div style={{flex:1,minHeight:0,display:"flex",flexDirection:"column"}}>
        <div style={{flex:1,overflow:"auto",padding:"var(--ap-space-4) var(--ap-space-6)"}}>
          <Stagger step={60}>
            {turns.map((t,i)=>t.role==="user"?
              <Message key={i} role="user" author="Marta Iglesias" at={t.at}>{t.text}</Message>:
              <Message key={i} at={t.at} footer={ANSWER.cites.map(c=><Citation key={c.label} {...c}/>)}>
                <AssistantTrace steps={ANSWER.trace} style={{marginBottom:"var(--ap-space-3)"}}/>
                El p95 agregado pasó de <DataValue value="172 ms"/> a <DataValue value="184 ms"/> tras el despliegue de <DataValue value="4.18.2"/> el <DataValue value="2026-07-29 14:02"/>. El aumento se concentra en <b style={{fontWeight:500}}>conciliación nocturna</b>, que sirve <DataValue value="8.412"/> peticiones por minuto con <DataValue value="1,40%"/> de error — el resto de servicios de la región siguen por debajo de <DataValue value="130 ms"/>.
              </Message>)}
            {busy&&<Message at="09:14"><AssistantTrace running defaultOpen steps={[{label:"metrics.p95(eu-central-1, 1h)",ms:120},{label:"deploys.diff(4.18.1, 4.18.2)",status:"running"}]}/></Message>}
            {!turns.length&&<EmptyState title="Pregunta por un servicio, una region o un despliegue" description="El asistente responde con datos del entorno y cita siempre sus fuentes." style={{borderTop:0}}/>}
          </Stagger>
        </div>
        <div style={{borderTop:"1px solid var(--ap-border)",padding:"var(--ap-space-3) var(--ap-space-6)",background:"var(--ap-surface)"}}>
          <Composer value={q} onChange={setQ} onSend={send} busy={busy} onAttach={()=>{}} hint="Solo lectura: no ejecuta acciones"/>
        </div>
      </div>
    </AppShell>
  );
}
Object.assign(window,{AssistantKit});
