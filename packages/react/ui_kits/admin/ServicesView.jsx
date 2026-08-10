const {Panel,Toolbar,PageHeader,DetailPanel,DataTable,DataValue,MetricTile,KeyValue,Badge,Button,IconButton,SearchField,Select,Chip,Tabs,Menu,Dialog,InlineAlert,EmptyState,Stagger,SharedValue,AsciiDiagram,CopyValue,BulkActionBar,ColumnManager,CommandPalette,OperationLog,Sparkline,Pagination,AuditTimeline,ConfigDiff}=(typeof window!=="undefined"&&window.AP_UI)||{};

const SERIES={s1:[38,42,40,47,52,49,58,61,57,64],s2:[62,58,66,71,80,88,96,102,110,118],s3:[96,94,98,92,90,95,93,91,96,94],s4:[180,190,205,199,210,215,208,212,214,212],s5:[40,32,20,12,6,2,0,0,0,0],s6:[0,0,0,0,0,0,0,0,0,0],s7:[60,62,58,64,66,63,61,65,64,64],s8:[300,310,320,318,330,336,340,338,341,340],s9:[140,142,138,146,150,148,152,149,147,148],s10:[300,340,360,380,392,398,400,402,401,402]};

function ServicesView({onGo}){
  const all=window.AP_DATA.services;
  const [tab,setTab]=React.useState("all");
  const [q,setQ]=React.useState("");
  const [region,setRegion]=React.useState("todas");
  const [sel,setSel]=React.useState(null);
  const [checked,setChecked]=React.useState([]);
  const [menu,setMenu]=React.useState(false);
  const [colsOpen,setColsOpen]=React.useState(false);
  const [hidden,setHidden]=React.useState([]);
  const [ask,setAsk]=React.useState(false);
  const [loading,setLoading]=React.useState(true);
  const [sort,setSort]=React.useState({key:"p95",dir:"asc"});
  const [palette,setPalette]=React.useState(false);
  const [ops,setOps]=React.useState([]);
  const refs=React.useRef({});

  React.useEffect(()=>{const t=setTimeout(()=>setLoading(false),700);return ()=>clearTimeout(t);},[]);
  React.useEffect(()=>{
    const onKey=e=>{ if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setPalette(p=>!p);} };
    window.addEventListener("keydown",onKey);return ()=>window.removeEventListener("keydown",onKey);
  },[]);

  const num=v=>{const n=parseFloat(String(v).replace(/\./g,"").replace(",","."));return isNaN(n)?-1:n;};
  const filtered=all.filter(s=>(tab==="all"||(tab==="deg"&&s.tone!=="ok")||(tab==="ret"&&s.st==="EN COLA"))
    &&(region==="todas"||s.region===region)
    &&(q===""||(s.name+" "+s.ref).toLowerCase().includes(q.toLowerCase())));
  const rows=[...filtered].sort((a,b)=>{
    const k=sort.key,va=k==="name"||k==="region"?String(a[k]):num(a[k]),vb=k==="name"||k==="region"?String(b[k]):num(b[k]);
    const r=va<vb?-1:va>vb?1:0; return sort.dir==="asc"?r:-r;
  });

  const allCols=[
    {key:"ref",label:"Referencia",width:"140px",data:true,shared:true,locked:true},
    {key:"name",label:"Servicio",width:"minmax(160px,1fr)",sortable:true},
    {key:"region",label:"Region",width:"112px",data:true,tone:"muted",sortable:true},
    {key:"st",label:"Estado",width:"108px",render:r=><Badge tone={r.tone}>{r.st}</Badge>},
    {key:"trend",label:"24 h",width:"92px",render:r=><Sparkline data={SERIES[r.id]||[]} width={80} height={20} tone={r.tone==="ok"?"default":r.tone}/>},
    {key:"p95",label:"p95",width:"76px",align:"right",data:true,sortable:true},
    {key:"rpm",label:"Pet./min",width:"84px",align:"right",data:true,sortable:true}
  ];
  const cols=allCols.filter(c=>!hidden.includes(c.key));
  const row=all.find(s=>s.id===sel);

  const open=(r,el)=>{SharedValue.capture(r.id,el||refs.current[r.id]);setSel(r.id);};
  const drain=name=>{
    const id="op"+Date.now();
    setOps(o=>[...o,{id,title:"Drenando "+name,progress:8,detail:"5 min restantes",status:"running"}]);
    let p=8;
    const t=setInterval(()=>{
      p+=23;
      setOps(o=>o.map(x=>x.id===id?{...x,progress:Math.min(p,100),detail:p>=100?"completado":Math.max(1,Math.round((100-p)/20))+" min restantes",status:p>=100?"ok":"running"}:x));
      if(p>=100) clearInterval(t);
    },900);
  };

  return (
    <div style={{display:"flex",minWidth:0,flex:1,overflow:"hidden"}}>
      <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <PageHeader eyebrow="Infraestructura" title="Servicios en produccion"
          meta={<><DataValue value={rows.length+" de "+all.length+" servicios"} loading={loading} placeholder="00 de 00 servicios"/><span style={{color:"var(--ap-gray-300)"}}>/</span><span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Pulsa <span style={{fontVariationSettings:"var(--ap-vf-data)"}}>⌘K</span> para buscar o ejecutar</span></>}
          actions={<><div style={{position:"relative"}}><IconButton icon="more-horizontal" label="Mas acciones" selected={menu} onClick={()=>setMenu(!menu)}/>
            <Menu open={menu} onClose={()=>setMenu(false)} items={[{value:"exp",label:"Exportar CSV",icon:"download",shortcut:"⌘E"},{value:"pal",label:"Paleta de comandos",icon:"search",shortcut:"⌘K"},{divider:true},{value:"del",label:"Retirar seleccion",icon:"trash-2",tone:"danger"}]} onSelect={v=>{if(v==="del")setAsk(true);if(v==="pal")setPalette(true);}}/></div>
            <Button variant="primary">Nuevo servicio</Button></>}/>
        <Tabs tabs={[{value:"all",label:"Todos",count:all.length},{value:"deg",label:"Con incidencia",count:all.filter(s=>s.tone!=="ok").length},{value:"ret",label:"En cola",count:all.filter(s=>s.st==="EN COLA").length}]} value={tab} onChange={setTab}/>
        <Toolbar left={<><SearchField value={q} onChange={e=>setQ(e.target.value)} placeholder="Nodo, region, referencia"/>
            <Select value={region} onChange={e=>setRegion(e.target.value)} options={[{value:"todas",label:"Todas las regiones"},"eu-central-1","us-east-1","ap-south-1","sa-east-1"]} style={{width:190}}/>
            {region!=="todas"&&<Chip data onRemove={()=>setRegion("todas")}>{region}</Chip>}</>}
          right={<><div style={{position:"relative"}}><IconButton icon="columns-3" label="Columnas" selected={colsOpen} onClick={()=>setColsOpen(!colsOpen)}/>
              <ColumnManager open={colsOpen} onClose={()=>setColsOpen(false)} columns={allCols} hidden={hidden} onToggle={k=>setHidden(h=>h.includes(k)?h.filter(x=>x!==k):[...h,k])}/></div>
            <IconButton icon="refresh-cw" label="Recargar" onClick={()=>{setLoading(true);setTimeout(()=>setLoading(false),700);}}/></>}/>

        <div style={{flex:1,overflow:"auto"}}>
          <Stagger step={60} style={{display:"flex",flexDirection:"column"}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",borderBottom:"1px solid var(--ap-border)",background:"var(--ap-surface)"}}>
              <MetricTile label="Peticiones / min" value="257.096" delta="+2,1% 24 h" deltaTone="ok" loading={loading}/>
              <MetricTile label="p95 agregado" value="184" unit="ms" delta="+12 ms 24 h" deltaTone="warn" loading={loading}/>
              <MetricTile label="Disponibilidad" value="99,982%" delta="objetivo 99,900%" loading={loading}/>
              <MetricTile label="Incidencias abiertas" value="1" delta="SEV-1" deltaTone="error" loading={loading} style={{borderRight:0}}/>
            </div>
            {rows.some(r=>r.tone==="error")&&<div style={{padding:"var(--ap-space-4) var(--ap-space-6) 0"}}>
              <InlineAlert tone="error" title="SVC-7712-AP sin respuesta desde 2026-08-02 04:12">La region ap-south-1 esta drenada. La incidencia INC-2261 sigue abierta.</InlineAlert></div>}
            <div style={{padding:"var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)"}}>
              <Panel>
                {rows.length?
                  <DataTable columns={cols} rows={rows} selectable selectedId={sel} onSelectRow={open} sort={sort}
                    onSort={k=>setSort(s=>({key:k,dir:s.key===k&&s.dir==="asc"?"desc":"asc"}))}
                    onEscape={()=>setSel(null)}
                    checked={checked} onCheck={id=>setChecked(c=>id==="all"?(c.length===rows.length?[]:rows.map(r=>r.id)):c.includes(id)?c.filter(x=>x!==id):[...c,id])}
                    rowRef={(id,el)=>{refs.current[id]=el;}}/>:
                  <div style={{padding:"var(--ap-space-8) var(--ap-space-6)",display:"grid",gap:"var(--ap-space-6)",justifyItems:"start"}}>
                    <AsciiDiagram tone="muted">{` ┌──────┐   ┌──────┐   ┌──────┐
 │      │   │      │   │      │
 └──────┘   └──────┘   └──────┘
    ░░         ░░         ░░
 sin coincidencias en el filtro actual`}</AsciiDiagram>
                    <EmptyState title="Ningun servicio coincide con estos filtros" description="Quita la region o amplia la busqueda." action={<Button size="sm" onClick={()=>{setQ("");setRegion("todas");setTab("all");}}>Limpiar filtros</Button>} style={{borderTop:0,padding:0}}/>
                  </div>}
                {rows.length>0&&<Pagination from={1} to={rows.length} total={all.length} pageSize={40} loading={loading}/>}
              </Panel>
              <BulkActionBar count={checked.length} onClear={()=>setChecked([])}
                actions={[{label:"Drenar",onClick:()=>{drain(checked.length+" servicios");setChecked([]);}},{label:"Exportar"},{label:"Retirar",tone:"danger",onClick:()=>setAsk(true)}]}/>
            </div>
          </Stagger>
        </div>
      </div>

      <DetailPanel open={!!row} onClose={()=>setSel(null)}
        header={row&&<div>
          <div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",marginBottom:4}}>{row.name}</div>
          <SharedValue sharedKey={row.id} style={{font:"var(--ap-weight-bold) var(--ap-size-23)/1.2 var(--ap-font-core)",letterSpacing:"-0.02em"}}>{row.ref}</SharedValue>
          <div style={{marginTop:8,display:"flex",gap:8,alignItems:"center"}}><Badge tone={row.tone}>{row.st}</Badge><DataValue value={row.region} size="var(--ap-size-12)" tone="muted"/></div>
        </div>}
        footer={row&&<><Button size="sm" variant="danger" onClick={()=>setAsk(true)}>Retirar</Button><Button variant="primary" size="sm" onClick={()=>drain(row.ref)}>Drenar trafico</Button></>}>
        {row&&<Stagger step={60}>
          <div style={{display:"flex",gap:"var(--ap-space-6)",paddingBottom:"var(--ap-space-4)",borderBottom:"1px solid var(--ap-border)"}}>
            {[["p95",row.p95],["Error",row.err],["Nodos",row.nodes]].map(([k,v])=>(
              <div key={k}><div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",marginBottom:4}}>{k}</div>
              <DataValue value={v} size="var(--ap-size-19)" weight={500}/></div>))}
            <div style={{marginLeft:"auto",alignSelf:"flex-end"}}><Sparkline data={SERIES[row.id]||[]} width={104} height={28} tone={row.tone==="ok"?"default":row.tone}/></div>
          </div>
          <div style={{paddingTop:"var(--ap-space-3)"}}>
            <div style={{display:"grid",gridTemplateColumns:"128px 1fr",gap:"var(--ap-space-3)",alignItems:"center",padding:"var(--ap-space-1) 0",borderBottom:"1px solid var(--ap-border)"}}>
              <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Referencia</span><CopyValue value={row.ref}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"128px 1fr",gap:"var(--ap-space-3)",alignItems:"center",padding:"var(--ap-space-1) 0",borderBottom:"1px solid var(--ap-border)"}}>
              <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Ruta</span><CopyValue value={"/api/v4/"+row.name.toLowerCase().split(" ")[0]}/>
            </div>
            <KeyValue label="Version" value={row.ver}/>
            <KeyValue label="Ultimo despliegue" value={row.dep}/>
            <KeyValue label="Cumplimiento SLA" value={row.sla}/>
            <KeyValue label="Responsable" value={row.owner} data={false}/>
          </div>
          <div style={{paddingTop:"var(--ap-space-4)"}}>
            <div style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-text-muted)",marginBottom:8}}>Auditoria</div>
            <AuditTimeline loading={loading} entries={[
              {at:"2026-08-02 04:12",actor:"sistema",title:"Nodo 7 sin respuesta",tag:"SEV-1",tone:"error"},
              {at:"2026-07-29 14:02",actor:"Marta Iglesias",title:"Umbral de reversion modificado",tag:"CONFIG",children:<ConfigDiff changes={[{key:"error_max",from:"2,00%",to:"1,00%"}]}/>},
              {at:"2026-07-29 13:58",actor:"sistema",title:"Despliegue "+row.ver+" completado",tag:"OK",tone:"ok"}
            ]}/>
          </div>
        </Stagger>}
      </DetailPanel>

      <CommandPalette open={palette} onClose={()=>setPalette(false)}
        items={[...all.map(s=>({id:s.id,label:s.ref,hint:s.name+" · "+s.region,data:true,icon:"server",action:"open"})),
          {id:"go-dep",label:"Ir a despliegues",hint:"vista",icon:"git-commit-horizontal",action:"dep"},
          {id:"go-inc",label:"Ir a incidencias",hint:"vista",icon:"activity",action:"inc"},
          {id:"drain",label:"Drenar trafico de la region",hint:"accion",icon:"activity",action:"drain"}]}
        onSelect={it=>{
          if(it.action==="open"){const r=all.find(s=>s.id===it.id);if(r)open(r);}
          else if(it.action==="drain") drain("eu-central-1");
          else if(onGo) onGo(it.action);
        }}/>

      <OperationLog operations={ops} onDismiss={id=>setOps(o=>o.filter(x=>x.id!==id))}/>

      <Dialog open={ask} onClose={()=>setAsk(false)} title={"Retirar "+(row?row.ref:"la seleccion")+" de produccion"}
        description="El trafico se drenara durante 5 minutos antes de retirar el servicio. La operacion no es reversible."
        footer={<><Button onClick={()=>setAsk(false)}>Cancelar</Button><Button variant="danger" solid onClick={()=>{setAsk(false);drain(row?row.ref:"la seleccion");}}>Retirar</Button></>}/>
    </div>
  );
}
Object.assign(window,{ServicesView});
