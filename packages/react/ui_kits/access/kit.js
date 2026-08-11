/* AUTO-GENERADO por scripts/build-kits.mjs — edita los .jsx, no este fichero. */
(function(){
const { CenteredPage, PageError, Panel, Button, Input, OtpInput, Checkbox, InlineAlert, DataValue, Stagger, Divider, SegmentedControl, CopyValue, Spinner, Steps } = typeof window !== "undefined" && window.AP_UI || {};
const Wordmark = () => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)", letterSpacing: "-0.02em" } }, "Aplomo"), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-muted)" } }, "consola de operacion"));
const Foot = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Estado del servicio"), /* @__PURE__ */ React.createElement(DataValue, { value: "99,982%", size: "var(--ap-size-13)" }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ap-gray-300)" } }, "/"), /* @__PURE__ */ React.createElement(DataValue, { value: "v4.18.2", size: "var(--ap-size-13)" }));
function LoginScreen({ onNext }) {
  const [user, setUser] = React.useState("marta.iglesias@empresa.es");
  const [pw, setPw] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [keep, setKeep] = React.useState(true);
  const [err, setErr] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (pw.length < 4) {
      setErr(true);
      return;
    }
    setErr(false);
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      onNext("otp");
    }, 700);
  };
  return /* @__PURE__ */ React.createElement(CenteredPage, { brand: /* @__PURE__ */ React.createElement(Wordmark, null), footer: /* @__PURE__ */ React.createElement(Foot, null) }, /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, font: "var(--ap-weight-bold) var(--ap-size-23)/1.25 var(--ap-font-display)", letterSpacing: "-0.02em" } }, "Acceso a la consola"), /* @__PURE__ */ React.createElement("p", { style: { margin: "var(--ap-space-2) 0 0", font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, "Usa tu cuenta corporativa. La sesion caduca a las 12 h.")), /* @__PURE__ */ React.createElement(Panel, { padded: true }, /* @__PURE__ */ React.createElement("form", { onSubmit: submit, style: { display: "grid", gap: "var(--ap-space-4)" } }, err && /* @__PURE__ */ React.createElement(InlineAlert, { tone: "error", title: "Credenciales incorrectas" }, "Te quedan 4 intentos antes del bloqueo temporal."), /* @__PURE__ */ React.createElement(Input, { label: "Cuenta", value: user, onChange: (e) => setUser(e.target.value), icon: "mail", autoComplete: "username" }), /* @__PURE__ */ React.createElement(Input, { label: "Contrasena", type: "password", value: pw, onChange: (e) => setPw(e.target.value), icon: "lock", autoComplete: "current-password", hint: "Minimo 12 caracteres" }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ap-space-3)" } }, /* @__PURE__ */ React.createElement(Checkbox, { label: "Mantener la sesion", checked: keep, onChange: () => setKeep(!keep) }), /* @__PURE__ */ React.createElement("a", { href: "#", style: { font: "var(--ap-text-small)" } }, "He perdido el acceso")), /* @__PURE__ */ React.createElement(Button, { variant: "primary", type: "submit", size: "lg", disabled: busy, style: { width: "100%" } }, busy ? "Verificando" : "Continuar"), busy && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Spinner, { label: "Comprobando credenciales" })))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "var(--ap-space-3)", display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("a", { href: "#", style: { font: "var(--ap-text-small)" } }, "Acceder con proveedor de identidad (SAML)"))));
}
function OtpScreen({ onNext, onBack }) {
  const [code, setCode] = React.useState("");
  const [err, setErr] = React.useState(false);
  const check = () => {
    if (code.length < 6) {
      setErr(true);
      return;
    }
    setErr(false);
    onNext("done");
  };
  React.useEffect(() => {
    if (code.length === 6) {
      setErr(false);
    }
  }, [code]);
  return /* @__PURE__ */ React.createElement(CenteredPage, { brand: /* @__PURE__ */ React.createElement(Wordmark, null), footer: /* @__PURE__ */ React.createElement(Foot, null), width: 420 }, /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, font: "var(--ap-weight-bold) var(--ap-size-23)/1.25 var(--ap-font-display)", letterSpacing: "-0.02em" } }, "Segundo factor"), /* @__PURE__ */ React.createElement("p", { style: { margin: "var(--ap-space-2) 0 0", font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, "Introduce el codigo de seis digitos de tu aplicacion de autenticacion.")), /* @__PURE__ */ React.createElement(Panel, { padded: true }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(OtpInput, { value: code, onChange: setCode, error: err ? "El codigo debe tener 6 digitos" : void 0 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--ap-space-3)" } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Caduca en ", /* @__PURE__ */ React.createElement(DataValue, { value: "00:42", size: "var(--ap-size-13)" })), /* @__PURE__ */ React.createElement("a", { href: "#", style: { font: "var(--ap-text-small)" } }, "Usar clave de recuperacion")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Button, { onClick: onBack, style: { flex: 1 } }, "Atras"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: check, style: { flex: 2 } }, "Entrar"))))));
}
function DoneScreen({ onBack }) {
  return /* @__PURE__ */ React.createElement(CenteredPage, { brand: /* @__PURE__ */ React.createElement(Wordmark, null), footer: /* @__PURE__ */ React.createElement(Foot, null), width: 440 }, /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, /* @__PURE__ */ React.createElement(Panel, { padded: true }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(Steps, { current: 3, steps: [{ label: "Cuenta" }, { label: "Contrasena" }, { label: "Segundo factor" }, { label: "Sesion abierta" }] }), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { font: "var(--ap-text-subtitle)" } }, "Sesion abierta como Marta Iglesias"), /* @__PURE__ */ React.createElement("p", { style: { margin: "var(--ap-space-2) 0 0", font: "var(--ap-text-small)", color: "var(--ap-text-secondary)" } }, "Guardia de eu-central-1. La sesion caduca el 2026-08-03 a las 21:12 UTC.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => {
    window.location.href = "../admin/index.html";
  } }, "Ir a la consola"), /* @__PURE__ */ React.createElement(Button, { onClick: onBack }, "Cerrar sesion"))))));
}
function ErrorScreen({ code, onBack }) {
  const extra = code === "500" ? { requestId: "req_8f21c4b0d3" } : code === "503" ? { eta: "2026-08-03 23:00 UTC" } : {};
  return /* @__PURE__ */ React.createElement(CenteredPage, { brand: /* @__PURE__ */ React.createElement(Wordmark, null), footer: /* @__PURE__ */ React.createElement(Foot, null), width: 460 }, /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, /* @__PURE__ */ React.createElement(
    PageError,
    {
      code,
      ...extra,
      actions: code === "500" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Reintentar"), /* @__PURE__ */ React.createElement(Button, null, "Abrir incidencia")) : code === "503" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Ver estado del servicio")) : code === "403" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Pedir acceso"), /* @__PURE__ */ React.createElement(Button, { onClick: onBack }, "Volver")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: onBack }, "Volver al listado"), /* @__PURE__ */ React.createElement(Button, null, "Buscar con \u2318K"))
    }
  ), code === "500" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "var(--ap-space-4)", display: "flex", alignItems: "center", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Copia el identificador al abrir la incidencia:"), /* @__PURE__ */ React.createElement(CopyValue, { value: "req_8f21c4b0d3" }))));
}
function AccessKit() {
  const [screen, setScreen] = React.useState("login");
  const VIEWS = { login: LoginScreen, otp: OtpScreen, done: DoneScreen };
  const isError = ["404", "403", "500", "503"].includes(screen);
  const View = VIEWS[screen];
  return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ap-space-3)", padding: "var(--ap-space-2) var(--ap-space-4)", background: "var(--ap-gray-900)", color: "var(--ap-gray-200)" } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-gray-400)" } }, "Kit de acceso y errores \u2014 selector de pantalla"), /* @__PURE__ */ React.createElement(SegmentedControl, { data: true, size: "sm", value: screen, onChange: setScreen, options: [{ value: "login", label: "Login" }, { value: "otp", label: "2FA" }, { value: "done", label: "Sesion" }, { value: "404", label: "404" }, { value: "403", label: "403" }, { value: "500", label: "500" }, { value: "503", label: "503" }] })), /* @__PURE__ */ React.createElement("div", { key: screen }, isError ? /* @__PURE__ */ React.createElement(ErrorScreen, { code: screen, onBack: () => setScreen("done") }) : /* @__PURE__ */ React.createElement(View, { onNext: setScreen, onBack: () => setScreen("login") })));
}
Object.assign(window, { AccessKit, LoginScreen, OtpScreen, DoneScreen, ErrorScreen });

})();
(function(){
const mount = () => {
  if (typeof window.AccessKit !== "function") return setTimeout(mount, 60);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(AccessKit, null));
};
mount();

})();