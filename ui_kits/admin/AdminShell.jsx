const {SideNav,DataValue,IconButton,Tooltip,AppShell,TopBar,Breadcrumb}=(typeof window!=="undefined"&&window.AP_UI)||{};

function AdminShell(){
  const [view,setView]=React.useState("ovw");
  const groups=[
    {label:"Operacion",items:[{value:"ovw",label:"Resumen",icon:"layout-dashboard"},{value:"svc",label:"Servicios",icon:"server",count:10},{value:"dep",label:"Despliegues",icon:"git-commit-horizontal",count:5},{value:"inc",label:"Incidencias",icon:"activity",count:1}]},
    {label:"Cuenta",items:[{value:"set",label:"Ajustes",icon:"sliders-horizontal"},{value:"usr",label:"Usuarios",icon:"users"}]}
  ];
  const Views={ovw:OverviewView,svc:ServicesView,dep:DeploymentsView,inc:IncidentsView,set:SettingsView,usr:SettingsView};
  const View=Views[view]||ServicesView;
  const titles={ovw:"Resumen",svc:"Servicios",dep:"Despliegues",inc:"Incidencias",set:"Ajustes",usr:"Usuarios"};
  return (
    <AppShell
      topbar={<TopBar
        brand={<><span style={{font:"var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)",letterSpacing:"-0.02em"}}>Aplomo</span><span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-muted)"}}>4.18.2</span></>}
        center={<Breadcrumb items={["Operacion",titles[view]||"Servicios"]}/>}
        right={<Tooltip label="Avisos"><IconButton icon="bell" label="Avisos"/></Tooltip>}
        user={{name:"Marta Iglesias",meta:"guardia · eu-central-1"}}/>}
      nav={<SideNav value={view} onChange={setView} groups={groups}
        footer={<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <DataValue value="12 regiones · 248 servicios" size="var(--ap-size-11)" tone="muted"/>
          <Tooltip label="Cerrar sesion"><IconButton icon="log-out" label="Cerrar sesion" size="sm"/></Tooltip>
        </div>}/>}>
      <View key={view} onGo={setView}/>
    </AppShell>
  );
}
Object.assign(window,{AdminShell});
