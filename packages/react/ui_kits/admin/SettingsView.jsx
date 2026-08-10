const {Panel,PageHeader,Button,Input,Select,Checkbox,Switch,Stagger,KeyValue,DataValue,InlineAlert,Breadcrumb,UnitInput,DurationInput,AuditTimeline,ConfigDiff,CopyValue,Radio,Textarea,FileDrop,Quota,Columns,Divider}=(typeof window!=="undefined"&&window.AP_UI)||{};

function SettingsView(){
  const [auto,setAuto]=React.useState(true);
  const [strict,setStrict]=React.useState(false);
  const [saved,setSaved]=React.useState(false);
  const [win,setWin]=React.useState({value:5,unit:"min"});
  const [strategy,setStrategy]=React.useState("canary");
  return (
    <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <PageHeader eyebrow="Cuenta" title="Ajustes de despliegue" meta={<Breadcrumb items={["Cuenta","Ajustes",{label:"eu-central-1",data:true}]}/>} actions={<Button variant="primary" onClick={()=>setSaved(true)}>Guardar cambios</Button>}/>
      <div style={{flex:1,overflow:"auto",padding:"var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)"}}>
        <Stagger step={60} style={{display:"grid",gap:"var(--ap-space-4)",maxWidth:760}}>
          {saved&&<InlineAlert tone="ok" title="Ajustes guardados">La proxima ventana de despliegue aplicara estos umbrales.</InlineAlert>}
          <Panel title="Umbrales de reversion" padded>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--ap-space-4)"}}>
              <UnitInput label="Error maximo" unit="%" defaultValue="1,00" hint="Se evalua durante 10 min" width="100%"/>
              <UnitInput label="p95 maximo" unit="ms" defaultValue="250" width="100%"/>
              <Radio name="strategy" value={strategy} onChange={setStrategy} options={[{value:"canary",label:"Canaria",hint:"5% / 25% / 100%"},{value:"bg",label:"Azul-verde"},{value:"direct",label:"Directa"}]}/>
              <DurationInput label="Ventana de drenaje" value={win.value} unit={win.unit} onChange={setWin} width="100%"/>
            </div>
            <div style={{display:"flex",gap:"var(--ap-space-6)",marginTop:"var(--ap-space-4)",paddingTop:"var(--ap-space-4)",borderTop:"1px solid var(--ap-border)"}}>
              <Switch checked={auto} onChange={()=>setAuto(!auto)} label="Reversion automatica"/>
              <Switch checked={strict} onChange={()=>setStrict(!strict)} label="Bloquear fuera de ventana"/>
            </div>
          </Panel>
          <Panel title="Cuotas del plan" padded>
            <Columns even count={2}>
              <Quota label="Peticiones" used={182} total={200} unit="M"/>
              <Quota label="Nodos" used={124} total={200}/>
            </Columns>
          </Panel>
          <Panel title="Aprobaciones" padded>
            <div style={{display:"grid",gap:"var(--ap-space-3)"}}>
              <Checkbox checked label="Exigir una aprobacion para SEV-1"/>
              <Checkbox label="Exigir aprobacion en cierre de mes"/>
              <Checkbox checked label="Notificar a la guardia al iniciar"/>
            </div>
          </Panel>
          <Panel title="Importar servicios" padded>
            <FileDrop accept=".csv" hint="CSV con referencia, region y version. Hasta 5 MB." files={[{name:"servicios-eu.csv",size:"48 kB"}]} onRemove={()=>{}}/>
            <Divider label="Motivo"/>
            <Textarea rows={2} placeholder="Queda registrado en la auditoria"/>
          </Panel>
          <Panel title="Credenciales" padded>
            <div style={{display:"grid",gridTemplateColumns:"128px 1fr",gap:"var(--ap-space-3)",alignItems:"center",padding:"var(--ap-space-1) 0",borderBottom:"1px solid var(--ap-border)"}}><span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Clave activa</span><CopyValue value="ak_live_4f81···9c2e"/></div>
            <KeyValue label="Rotada" value="2026-07-24 09:41"/>
            <KeyValue label="Caduca" value="2026-10-24"/>
            <div style={{marginTop:"var(--ap-space-4)",display:"flex",gap:"var(--ap-space-2)",alignItems:"center"}}>
              <Button size="sm">Rotar clave</Button>
              <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Ultimo uso <DataValue value="hace 2 min" size="var(--ap-size-13)" tone="muted"/></span>
            </div>
          </Panel>
          <Panel title="Auditoria de esta configuracion" padded>
            <AuditTimeline entries={[
              {at:"2026-07-29 14:02",actor:"Marta Iglesias",title:"Umbral de reversion modificado",tag:"CONFIG",children:<ConfigDiff changes={[{key:"error_max",from:"2,00%",to:"1,00%"},{key:"drain_window",from:"3 min",to:"5 min"}]}/>},
              {at:"2026-07-26 08:15",actor:"Ana Duarte",title:"Estrategia cambiada a canaria",tag:"CONFIG",children:<ConfigDiff changes={[{key:"strategy",from:"directa",to:"canaria 5/25/100"}]}/>},
              {at:"2026-07-24 09:41",actor:"Lucia Bernal",title:"Rotacion de credenciales",tag:"CLAVE",tone:"ok"}
            ]}/>
          </Panel>
        </Stagger>
      </div>
    </div>
  );
}
Object.assign(window,{SettingsView});
