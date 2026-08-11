/* AUTO-GENERADO por scripts/build-kits.mjs — edita los .jsx, no este fichero. */
(function(){
const { AppShell, TopBar, SideNav, PageHeader, Panel, Tabs, FormSection, FormActions, Input, Select, Switch, Checkbox, Radio, Textarea, UnitInput, DurationInput, OtpInput, DataTable, DataValue, Badge, Button, IconButton, Avatar, Divider, Quota, Stagger, SectionHeader, CopyValue, AuditTimeline, ConfigDiff, InlineAlert, Columns, Breadcrumb, Tooltip } = typeof window !== "undefined" && window.AP_UI || {};
const SESSIONS = [
  { id: "s1", device: "MacBook Pro \xB7 Chrome", ip: "88.12.44.201", place: "Madrid", last: "ahora", st: "ACTUAL", tone: "ok" },
  { id: "s2", device: "iPhone 16 \xB7 app", ip: "88.12.44.207", place: "Madrid", last: "hace 3 h", st: "ACTIVA", tone: "neutral" },
  { id: "s3", device: "Linux \xB7 Firefox", ip: "203.0.113.9", place: "Frankfurt", last: "hace 2 d", st: "REVISAR", tone: "warn" }
];
function AccountKit() {
  const [tab, setTab] = React.useState("perfil");
  const [dirty, setDirty] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [freq, setFreq] = React.useState("inmediato");
  const save = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setDirty(false);
    }, 700);
  };
  const cols = [
    { key: "device", label: "Dispositivo", width: "minmax(180px,1fr)" },
    { key: "ip", label: "IP", width: "128px", data: true, tone: "muted" },
    { key: "place", label: "Lugar", width: "110px" },
    { key: "st", label: "Estado", width: "104px", render: (r) => /* @__PURE__ */ React.createElement(Badge, { tone: r.tone }, r.st) },
    { key: "last", label: "Ultimo uso", width: "110px", align: "right", data: true },
    { key: "act", label: "", width: "90px", align: "right", render: (r) => r.st === "ACTUAL" ? null : /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "ghost" }, "Revocar") }
  ];
  return /* @__PURE__ */ React.createElement(
    AppShell,
    {
      topbar: /* @__PURE__ */ React.createElement(
        TopBar,
        {
          brand: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)", letterSpacing: "-0.02em" } }, "Aplomo"), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-muted)" } }, "cuenta")),
          center: /* @__PURE__ */ React.createElement(Breadcrumb, { items: ["Cuenta", "Marta Iglesias"] }),
          right: /* @__PURE__ */ React.createElement(Tooltip, { label: "Avisos" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "bell", label: "Avisos" })),
          user: { name: "Marta Iglesias", meta: "guardia \xB7 eu-central-1" }
        }
      ),
      nav: /* @__PURE__ */ React.createElement(SideNav, { value: "usr", groups: [{ label: "Operacion", items: [{ value: "ovw", label: "Resumen", icon: "layout-dashboard" }, { value: "svc", label: "Servicios", icon: "server", count: 248 }] }, { label: "Cuenta", items: [{ value: "usr", label: "Mi cuenta", icon: "user" }, { value: "set", label: "Ajustes", icon: "sliders-horizontal" }] }] })
    },
    /* @__PURE__ */ React.createElement(
      PageHeader,
      {
        eyebrow: "Cuenta",
        title: "Marta Iglesias",
        meta: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Avatar, { name: "Marta Iglesias", size: 20 }), /* @__PURE__ */ React.createElement(CopyValue, { value: "marta.iglesias@empresa.es", size: "var(--ap-size-13)" }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ap-gray-300)" } }, "/"), /* @__PURE__ */ React.createElement(DataValue, { value: "alta 2024-03-11" })),
        actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: save, disabled: !dirty || saving }, saving ? "Guardando" : "Guardar cambios")
      }
    ),
    /* @__PURE__ */ React.createElement(Tabs, { value: tab, onChange: setTab, tabs: [{ value: "perfil", label: "Perfil" }, { value: "pref", label: "Preferencias" }, { value: "seg", label: "Seguridad", count: 3 }, { value: "avisos", label: "Avisos" }] }),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6) 0", maxWidth: 900 } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, tab === "perfil" && /* @__PURE__ */ React.createElement("div", { onChange: () => setDirty(true) }, /* @__PURE__ */ React.createElement(FormSection, { title: "Identidad", description: "Como apareces en incidencias, despliegues y auditoria.", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement(Input, { label: "Nombre", defaultValue: "Marta Iglesias" }), /* @__PURE__ */ React.createElement(Input, { label: "Cuenta", data: true, defaultValue: "marta.iglesias@empresa.es" }), /* @__PURE__ */ React.createElement(Input, { label: "Equipo", defaultValue: "Plataforma de pagos" }), /* @__PURE__ */ React.createElement(Input, { label: "Telefono de guardia", data: true, defaultValue: "+34 600 12 34 56" })), /* @__PURE__ */ React.createElement(FormSection, { title: "Guardia", description: "Ventanas en las que recibes avisos directos y region por defecto." }, /* @__PURE__ */ React.createElement(Select, { label: "Region principal", options: ["eu-central-1", "us-east-1", "sa-east-1", "ap-south-1"] }), /* @__PURE__ */ React.createElement(UnitInput, { label: "Avisar si p95 >", unit: "ms", defaultValue: "200", width: "100%" }), /* @__PURE__ */ React.createElement(DurationInput, { label: "Silencio tras aviso", value: 15, unit: "min", width: "100%" }), /* @__PURE__ */ React.createElement(Switch, { label: "Avisos fuera de horario", defaultChecked: true })), /* @__PURE__ */ React.createElement(FormSection, { title: "Nota para el relevo", description: "Se muestra a quien recoge la guardia.", columns: 1 }, /* @__PURE__ */ React.createElement(Textarea, { rows: 3, defaultValue: "Conciliacion nocturna con p95 alto desde 4.18.2. Ver INC-2259." }))), tab === "pref" && /* @__PURE__ */ React.createElement("div", { onChange: () => setDirty(true) }, /* @__PURE__ */ React.createElement(FormSection, { title: "Presentacion", description: "Afecta solo a tu sesion.", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement(Select, { label: "Idioma", options: ["Espanol", "English"] }), /* @__PURE__ */ React.createElement(Select, { label: "Zona horaria", options: ["UTC", "Europe/Madrid", "America/New_York"] }), /* @__PURE__ */ React.createElement(Select, { label: "Formato de fecha", options: ["2026-08-03 14:02", "03/08/2026 14:02"] }), /* @__PURE__ */ React.createElement(Select, { label: "Densidad de tabla", options: ["Alta \xB7 40px", "Comoda \xB7 48px"] })), /* @__PURE__ */ React.createElement(FormSection, { title: "Vista por defecto", description: "Que abre la consola al entrar." }, /* @__PURE__ */ React.createElement(Radio, { name: "home", value: freq, onChange: (v) => {
      setFreq(v);
      setDirty(true);
    }, options: [{ value: "inmediato", label: "Portada de operacion" }, { value: "svc", label: "Listado de servicios" }, { value: "inc", label: "Incidencias abiertas" }] }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Checkbox, { label: "Mostrar la traza del asistente desplegada", defaultChecked: true }), /* @__PURE__ */ React.createElement(Checkbox, { label: "Recordar filtros entre sesiones", defaultChecked: true }), /* @__PURE__ */ React.createElement(Checkbox, { label: "Abrir el detalle con un solo clic" }))), /* @__PURE__ */ React.createElement(FormSection, { title: "Cuotas del plan", description: "Consumo de tu organizacion en el ciclo actual.", columns: 1 }, /* @__PURE__ */ React.createElement(Columns, { even: true, count: 2 }, /* @__PURE__ */ React.createElement(Quota, { label: "Peticiones", used: 182, total: 200, unit: "M" }), /* @__PURE__ */ React.createElement(Quota, { label: "Nodos", used: 124, total: 200 })))), tab === "seg" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormSection, { title: "Segundo factor", description: "Obligatorio para cuentas con acceso a produccion.", style: { paddingTop: 0 }, columns: 1 }, /* @__PURE__ */ React.createElement(InlineAlert, { tone: "ok", title: "Activo desde 2026-03-11" }, "Aplicacion de autenticacion \xB7 ultimo uso hoy 09:04"), /* @__PURE__ */ React.createElement(OtpInput, { label: "Confirma un codigo para regenerar las claves", value: otp, onChange: setOtp }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Button, null, "Regenerar claves de recuperacion"), /* @__PURE__ */ React.createElement(Button, { variant: "danger" }, "Desactivar"))), /* @__PURE__ */ React.createElement(FormSection, { title: "Sesiones activas", description: "Revoca cualquier sesion que no reconozcas.", columns: 1 }, /* @__PURE__ */ React.createElement(Panel, null, /* @__PURE__ */ React.createElement(DataTable, { columns: cols, rows: SESSIONS }))), /* @__PURE__ */ React.createElement(FormSection, { title: "Actividad de la cuenta", description: "Todo cambio queda registrado.", columns: 1 }, /* @__PURE__ */ React.createElement(AuditTimeline, { entries: [
      { at: "2026-08-03 09:04", actor: "Marta Iglesias", title: "Acceso desde Madrid", tag: "LOGIN", tone: "ok" },
      { at: "2026-07-30 18:22", actor: "Marta Iglesias", title: "Umbral de aviso modificado", tag: "CONFIG", children: /* @__PURE__ */ React.createElement(ConfigDiff, { changes: [{ key: "alert_p95", from: "250 ms", to: "200 ms" }] }) },
      { at: "2026-07-11 08:10", actor: "Ignacio Ferrer", title: "Rol ampliado a eu-central-1", tag: "ROL", tone: "warn" }
    ] }))), tab === "avisos" && /* @__PURE__ */ React.createElement("div", { onChange: () => setDirty(true) }, /* @__PURE__ */ React.createElement(FormSection, { title: "Canales", description: "Donde te llegan los avisos de guardia.", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Switch, { label: "Correo", defaultChecked: true }), /* @__PURE__ */ React.createElement(Switch, { label: "Telefono", defaultChecked: true }), /* @__PURE__ */ React.createElement(Switch, { label: "Aplicacion movil" })), /* @__PURE__ */ React.createElement(Select, { label: "Frecuencia del resumen", options: ["Inmediato", "Cada hora", "Diario a las 08:00"] })), /* @__PURE__ */ React.createElement(FormSection, { title: "Severidades", description: "Que te despierta y que espera al turno." }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Checkbox, { label: "SEV-1 \xB7 siempre, incluido de noche", defaultChecked: true }), /* @__PURE__ */ React.createElement(Checkbox, { label: "SEV-2 \xB7 siempre en horario", defaultChecked: true }), /* @__PURE__ */ React.createElement(Checkbox, { label: "SEV-3 \xB7 resumen" }), /* @__PURE__ */ React.createElement(Checkbox, { label: "SEV-4 \xB7 nunca" })), /* @__PURE__ */ React.createElement(Textarea, { label: "Excepciones", rows: 2, placeholder: "Servicios o regiones que siempre avisan" }))))), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 900, padding: "0 var(--ap-space-6)" } }, /* @__PURE__ */ React.createElement(FormActions, { dirty, count: 3, saving, onSave: save, onDiscard: () => setDirty(false) })))
  );
}
Object.assign(window, { AccountKit });

})();
(function(){
const mount = () => {
  if (typeof window.AccountKit !== "function") return setTimeout(mount, 60);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(AccountKit, null));
};
mount();

})();