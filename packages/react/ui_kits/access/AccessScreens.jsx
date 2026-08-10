const {CenteredPage,PageError,Panel,Button,Input,OtpInput,Checkbox,InlineAlert,DataValue,Stagger,Divider,SegmentedControl,CopyValue,Spinner,Steps}=(typeof window!=="undefined"&&window.AP_UI)||{};

const Wordmark=()=>(
  <div style={{display:"flex",alignItems:"center",gap:8}}>
    <span style={{font:"var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)",letterSpacing:"-0.02em"}}>Aplomo</span>
    <span style={{font:"var(--ap-text-micro)",fontVariationSettings:"var(--ap-vf-data)",color:"var(--ap-text-muted)"}}>consola de operacion</span>
  </div>
);
const Foot=()=>(<><span>Estado del servicio</span><DataValue value="99,982%" size="var(--ap-size-13)"/><span style={{color:"var(--ap-gray-300)"}}>/</span><DataValue value="v4.18.2" size="var(--ap-size-13)"/></>);

function LoginScreen({onNext}){
  const [user,setUser]=React.useState("marta.iglesias@empresa.es");
  const [pw,setPw]=React.useState("");
  const [busy,setBusy]=React.useState(false);
  const [keep,setKeep]=React.useState(true);
  const [err,setErr]=React.useState(false);
  const submit=e=>{
    e.preventDefault();
    if(pw.length<4){setErr(true);return;}
    setErr(false);setBusy(true);setTimeout(()=>{setBusy(false);onNext("otp");},700);
  };
  return (
    <CenteredPage brand={<Wordmark/>} footer={<Foot/>}>
      <Stagger step={60}>
        <div style={{marginBottom:"var(--ap-space-4)"}}>
          <h1 style={{margin:0,font:"var(--ap-weight-bold) var(--ap-size-23)/1.25 var(--ap-font-display)",letterSpacing:"-0.02em"}}>Acceso a la consola</h1>
          <p style={{margin:"var(--ap-space-2) 0 0",font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>Usa tu cuenta corporativa. La sesion caduca a las 12 h.</p>
        </div>
        <Panel padded>
          <form onSubmit={submit} style={{display:"grid",gap:"var(--ap-space-4)"}}>
            {err&&<InlineAlert tone="error" title="Credenciales incorrectas">Te quedan 4 intentos antes del bloqueo temporal.</InlineAlert>}
            <Input label="Cuenta" value={user} onChange={e=>setUser(e.target.value)} icon="mail" autoComplete="username"/>
            <Input label="Contrasena" type="password" value={pw} onChange={e=>setPw(e.target.value)} icon="lock" autoComplete="current-password" hint="Minimo 12 caracteres"/>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ap-space-3)"}}>
              <Checkbox label="Mantener la sesion" checked={keep} onChange={()=>setKeep(!keep)}/>
              <a href="#" style={{font:"var(--ap-text-small)"}}>He perdido el acceso</a>
            </div>
            <Button variant="primary" type="submit" size="lg" disabled={busy} style={{width:"100%"}}>{busy?"Verificando":"Continuar"}</Button>
            {busy&&<div style={{display:"flex",justifyContent:"center"}}><Spinner label="Comprobando credenciales"/></div>}
          </form>
        </Panel>
        <div style={{marginTop:"var(--ap-space-3)",display:"flex",justifyContent:"center"}}>
          <a href="#" style={{font:"var(--ap-text-small)"}}>Acceder con proveedor de identidad (SAML)</a>
        </div>
      </Stagger>
    </CenteredPage>
  );
}

function OtpScreen({onNext,onBack}){
  const [code,setCode]=React.useState("");
  const [err,setErr]=React.useState(false);
  const check=()=>{ if(code.length<6){setErr(true);return;} setErr(false); onNext("done"); };
  React.useEffect(()=>{ if(code.length===6){setErr(false);} },[code]);
  return (
    <CenteredPage brand={<Wordmark/>} footer={<Foot/>} width={420}>
      <Stagger step={60}>
        <div style={{marginBottom:"var(--ap-space-4)"}}>
          <h1 style={{margin:0,font:"var(--ap-weight-bold) var(--ap-size-23)/1.25 var(--ap-font-display)",letterSpacing:"-0.02em"}}>Segundo factor</h1>
          <p style={{margin:"var(--ap-space-2) 0 0",font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>Introduce el codigo de seis digitos de tu aplicacion de autenticacion.</p>
        </div>
        <Panel padded>
          <div style={{display:"grid",gap:"var(--ap-space-4)"}}>
            <OtpInput value={code} onChange={setCode} error={err?"El codigo debe tener 6 digitos":undefined}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--ap-space-3)"}}>
              <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Caduca en <DataValue value="00:42" size="var(--ap-size-13)"/></span>
              <a href="#" style={{font:"var(--ap-text-small)"}}>Usar clave de recuperacion</a>
            </div>
            <div style={{display:"flex",gap:"var(--ap-space-2)"}}>
              <Button onClick={onBack} style={{flex:1}}>Atras</Button>
              <Button variant="primary" onClick={check} style={{flex:2}}>Entrar</Button>
            </div>
          </div>
        </Panel>
      </Stagger>
    </CenteredPage>
  );
}

function DoneScreen({onBack}){
  return (
    <CenteredPage brand={<Wordmark/>} footer={<Foot/>} width={440}>
      <Stagger step={60}>
        <Panel padded>
          <div style={{display:"grid",gap:"var(--ap-space-4)"}}>
            <Steps current={3} steps={[{label:"Cuenta"},{label:"Contrasena"},{label:"Segundo factor"},{label:"Sesion abierta"}]}/>
            <Divider/>
            <div>
              <div style={{font:"var(--ap-text-subtitle)"}}>Sesion abierta como Marta Iglesias</div>
              <p style={{margin:"var(--ap-space-2) 0 0",font:"var(--ap-text-small)",color:"var(--ap-text-secondary)"}}>Guardia de eu-central-1. La sesion caduca el 2026-08-03 a las 21:12 UTC.</p>
            </div>
            <div style={{display:"flex",gap:"var(--ap-space-2)"}}>
              <Button variant="primary" onClick={()=>{window.location.href="../admin/index.html";}}>Ir a la consola</Button>
              <Button onClick={onBack}>Cerrar sesion</Button>
            </div>
          </div>
        </Panel>
      </Stagger>
    </CenteredPage>
  );
}

function ErrorScreen({code,onBack}){
  const extra=code==="500"?{requestId:"req_8f21c4b0d3"}:code==="503"?{eta:"2026-08-03 23:00 UTC"}:{};
  return (
    <CenteredPage brand={<Wordmark/>} footer={<Foot/>} width={460}>
      <Stagger step={60}>
        <PageError code={code} {...extra}
          actions={code==="500"?<><Button variant="primary">Reintentar</Button><Button>Abrir incidencia</Button></>:
                   code==="503"?<><Button variant="primary">Ver estado del servicio</Button></>:
                   code==="403"?<><Button variant="primary">Pedir acceso</Button><Button onClick={onBack}>Volver</Button></>:
                   <><Button variant="primary" onClick={onBack}>Volver al listado</Button><Button>Buscar con ⌘K</Button></>}/>
        {code==="500"&&<div style={{marginTop:"var(--ap-space-4)",display:"flex",alignItems:"center",gap:"var(--ap-space-2)"}}>
          <span style={{font:"var(--ap-text-small)",color:"var(--ap-text-muted)"}}>Copia el identificador al abrir la incidencia:</span><CopyValue value="req_8f21c4b0d3"/>
        </div>}
      </Stagger>
    </CenteredPage>
  );
}

function AccessKit(){
  const [screen,setScreen]=React.useState("login");
  const VIEWS={login:LoginScreen,otp:OtpScreen,done:DoneScreen};
  const isError=["404","403","500","503"].includes(screen);
  const View=VIEWS[screen];
  return (
    <div style={{minHeight:"100vh",display:"grid",gridTemplateRows:"auto 1fr"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ap-space-3)",padding:"var(--ap-space-2) var(--ap-space-4)",background:"var(--ap-gray-900)",color:"var(--ap-gray-200)"}}>
        <span style={{font:"var(--ap-text-micro)",letterSpacing:"var(--ap-tracking-label)",textTransform:"uppercase",color:"var(--ap-gray-400)"}}>Kit de acceso y errores — selector de pantalla</span>
        <SegmentedControl data size="sm" value={screen} onChange={setScreen} options={[{value:"login",label:"Login"},{value:"otp",label:"2FA"},{value:"done",label:"Sesion"},{value:"404",label:"404"},{value:"403",label:"403"},{value:"500",label:"500"},{value:"503",label:"503"}]}/>
      </div>
      <div key={screen}>
        {isError?<ErrorScreen code={screen} onBack={()=>setScreen("done")}/>:<View onNext={setScreen} onBack={()=>setScreen("login")}/>}
      </div>
    </div>
  );
}
Object.assign(window,{AccessKit,LoginScreen,OtpScreen,DoneScreen,ErrorScreen});
