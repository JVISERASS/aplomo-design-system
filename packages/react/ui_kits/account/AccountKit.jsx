const {AppShell,TopBar,SideNav,PageHeader,Panel,Tabs,FormSection,FormActions,Input,Select,Switch,Checkbox,Radio,Textarea,UnitInput,DurationInput,OtpInput,DataTable,DataValue,Badge,Button,IconButton,Avatar,Divider,Quota,Stagger,SectionHeader,CopyValue,AuditTimeline,ConfigDiff,InlineAlert,Columns,Breadcrumb,Tooltip}=(typeof window!=="undefined"&&window.AP_UI)||{};

const SESSIONS=[
  {id:"s1",device:"MacBook Pro · Chrome",ip:"88.12.44.201",place:"Madrid",last:"ahora",st:"ACTUAL",tone:"ok"},
  {id:"s2",device:"iPhone 16 · app",ip:"88.12.44.207",place:"Madrid",last:"hace 3 h",st:"ACTIVA",tone:"neutral"},
  {id:"s3",device:"Linux · Firefox",ip:"203.0.113.9",place:"Frankfurt",last:"hace 2 d",st:"REVISAR",tone:"warn"}
];

function AccountKit(){
  const [tab,setTab]=React.useState("perfil");
  const [dirty,setDirty]=React.useState(false);
  const [saving,setSaving]=React.useState(false);
  const [otp,setOtp]=React.useState("");
  const [freq,setFreq]=React.useState("inmediato");
  const save=()=>{setSaving(true);setTimeout(()=>{setSaving(false);setDirty(false);},700);};
  const cols=[
    {key:"device",label:"Dispositivo",width:"minmax(180px,1fr)"},
    {key:"ip",label:"IP",width:"128px",data:true,tone:"muted"},
    {key:"place",label:"Lugar",width:"110px"},
    {key:"st",label:"Estado",width:"104px",render:r=><Badge tone={r.tone}>{r.st}</Badge>},
    {key:"last",label:"Ultimo uso",width:"110px",align:"right",data:true},
    {key:"act",label:"",width:"90px",align:"right",render:r=>r.st==="ACTUAL"?null:<Button size="sm" variant="ghost">Revocar</Button>}
  ];
  return (
    <AppShell
      topbar={<TopBar
        brand={<><span style={{font:"var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)",letterSpacing:"-0.02em"}}>Aplomo</span><span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-muted)"}}>cuenta</span></>}
        center={<Breadcrumb items={["Cuenta","Marta Iglesias"]}/>}
        right={<Tooltip label="Avisos"><IconButton icon="bell" label="Avisos"/></Tooltip>}
        user={{name:"Marta Iglesias",meta:"guardia · eu-central-1"}}/>}
      nav={<SideNav value="usr" groups={[{label:"Operacion",items:[{value:"ovw",label:"Resumen",icon:"layout-dashboard"},{value:"svc",label:"Servicios",icon:"server",count:248}]},{label:"Cuenta",items:[{value:"usr",label:"Mi cuenta",icon:"user"},{value:"set",label:"Ajustes",icon:"sliders-horizontal"}]}]}/>}>
      <PageHeader eyebrow="Cuenta"
        title="Marta Iglesias"
        meta={<><Avatar name="Marta Iglesias" size={20}/><CopyValue value="marta.iglesias@empresa.es" size="var(--ap-size-13)"/><span style={{color:"var(--ap-gray-300)"}}>/</span><DataValue value="alta 2024-03-11"/></>}
        actions={<Button variant="primary" onClick={save} disabled={!dirty||saving}>{saving?"Guardando":"Guardar cambios"}</Button>}/>
      <Tabs value={tab} onChange={setTab} tabs={[{value:"perfil",label:"Perfil"},{value:"pref",label:"Preferencias"},{value:"seg",label:"Seguridad",count:3},{value:"avisos",label:"Avisos"}]}/>
      <div style={{flex:1,overflow:"auto"}}>
        <div style={{padding:"var(--ap-space-4) var(--ap-space-6) 0",maxWidth:900}}>
          <Stagger step={60}>
            {tab==="perfil"&&<div onChange={()=>setDirty(true)}>
              <FormSection title="Identidad" description="Como apareces en incidencias, despliegues y auditoria." style={{paddingTop:0}}>
                <Input label="Nombre" defaultValue="Marta Iglesias"/>
                <Input label="Cuenta" data defaultValue="marta.iglesias@empresa.es"/>
                <Input label="Equipo" defaultValue="Plataforma de pagos"/>
                <Input label="Telefono de guardia" data defaultValue="+34 600 12 34 56"/>
              </FormSection>
              <FormSection title="Guardia" description="Ventanas en las que recibes avisos directos y region por defecto.">
                <Select label="Region principal" options={["eu-central-1","us-east-1","sa-east-1","ap-south-1"]}/>
                <UnitInput label="Avisar si p95 >" unit="ms" defaultValue="200" width="100%"/>
                <DurationInput label="Silencio tras aviso" value={15} unit="min" width="100%"/>
                <Switch label="Avisos fuera de horario" defaultChecked/>
              </FormSection>
              <FormSection title="Nota para el relevo" description="Se muestra a quien recoge la guardia." columns={1}>
                <Textarea rows={3} defaultValue="Conciliacion nocturna con p95 alto desde 4.18.2. Ver INC-2259."/>
              </FormSection>
            </div>}

            {tab==="pref"&&<div onChange={()=>setDirty(true)}>
              <FormSection title="Presentacion" description="Afecta solo a tu sesion." style={{paddingTop:0}}>
                <Select label="Idioma" options={["Espanol","English"]}/>
                <Select label="Zona horaria" options={["UTC","Europe/Madrid","America/New_York"]}/>
                <Select label="Formato de fecha" options={["2026-08-03 14:02","03/08/2026 14:02"]}/>
                <Select label="Densidad de tabla" options={["Alta · 40px","Comoda · 48px"]}/>
              </FormSection>
              <FormSection title="Vista por defecto" description="Que abre la consola al entrar.">
                <Radio name="home" value={freq} onChange={v=>{setFreq(v);setDirty(true);}} options={[{value:"inmediato",label:"Portada de operacion"},{value:"svc",label:"Listado de servicios"},{value:"inc",label:"Incidencias abiertas"}]}/>
                <div style={{display:"grid",gap:"var(--ap-space-2)"}}>
                  <Checkbox label="Mostrar la traza del asistente desplegada" defaultChecked/>
                  <Checkbox label="Recordar filtros entre sesiones" defaultChecked/>
                  <Checkbox label="Abrir el detalle con un solo clic"/>
                </div>
              </FormSection>
              <FormSection title="Cuotas del plan" description="Consumo de tu organizacion en el ciclo actual." columns={1}>
                <Columns even count={2}><Quota label="Peticiones" used={182} total={200} unit="M"/><Quota label="Nodos" used={124} total={200}/></Columns>
              </FormSection>
            </div>}

            {tab==="seg"&&<div>
              <FormSection title="Segundo factor" description="Obligatorio para cuentas con acceso a produccion." style={{paddingTop:0}} columns={1}>
                <InlineAlert tone="ok" title="Activo desde 2026-03-11">Aplicacion de autenticacion · ultimo uso hoy 09:04</InlineAlert>
                <OtpInput label="Confirma un codigo para regenerar las claves" value={otp} onChange={setOtp}/>
                <div style={{display:"flex",gap:"var(--ap-space-2)"}}><Button>Regenerar claves de recuperacion</Button><Button variant="danger">Desactivar</Button></div>
              </FormSection>
              <FormSection title="Sesiones activas" description="Revoca cualquier sesion que no reconozcas." columns={1}>
                <Panel><DataTable columns={cols} rows={SESSIONS}/></Panel>
              </FormSection>
              <FormSection title="Actividad de la cuenta" description="Todo cambio queda registrado." columns={1}>
                <AuditTimeline entries={[
                  {at:"2026-08-03 09:04",actor:"Marta Iglesias",title:"Acceso desde Madrid",tag:"LOGIN",tone:"ok"},
                  {at:"2026-07-30 18:22",actor:"Marta Iglesias",title:"Umbral de aviso modificado",tag:"CONFIG",children:<ConfigDiff changes={[{key:"alert_p95",from:"250 ms",to:"200 ms"}]}/>},
                  {at:"2026-07-11 08:10",actor:"Ignacio Ferrer",title:"Rol ampliado a eu-central-1",tag:"ROL",tone:"warn"}
                ]}/>
              </FormSection>
            </div>}

            {tab==="avisos"&&<div onChange={()=>setDirty(true)}>
              <FormSection title="Canales" description="Donde te llegan los avisos de guardia." style={{paddingTop:0}}>
                <div style={{display:"grid",gap:"var(--ap-space-2)"}}>
                  <Switch label="Correo" defaultChecked/><Switch label="Telefono" defaultChecked/><Switch label="Aplicacion movil"/>
                </div>
                <Select label="Frecuencia del resumen" options={["Inmediato","Cada hora","Diario a las 08:00"]}/>
              </FormSection>
              <FormSection title="Severidades" description="Que te despierta y que espera al turno.">
                <div style={{display:"grid",gap:"var(--ap-space-2)"}}>
                  <Checkbox label="SEV-1 · siempre, incluido de noche" defaultChecked/>
                  <Checkbox label="SEV-2 · siempre en horario" defaultChecked/>
                  <Checkbox label="SEV-3 · resumen"/>
                  <Checkbox label="SEV-4 · nunca"/>
                </div>
                <Textarea label="Excepciones" rows={2} placeholder="Servicios o regiones que siempre avisan"/>
              </FormSection>
            </div>}
          </Stagger>
        </div>
        <div style={{maxWidth:900,padding:"0 var(--ap-space-6)"}}>
          <FormActions dirty={dirty} count={3} saving={saving} onSave={save} onDiscard={()=>setDirty(false)}/>
        </div>
      </div>
    </AppShell>
  );
}
Object.assign(window,{AccountKit});
