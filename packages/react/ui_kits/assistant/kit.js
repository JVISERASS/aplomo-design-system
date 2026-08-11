/* AUTO-GENERADO por scripts/build-kits.mjs — edita los .jsx, no este fichero. */
(function(){
const { AppShell, TopBar, SideNav, Panel, Message, Composer, AssistantTrace, Citation, DataValue, Button, IconButton, Tooltip, EmptyState, Stagger, SectionHeader, KeyValue, Badge, Sparkline, Breadcrumb, Divider, Chip } = typeof window !== "undefined" && window.AP_UI || {};
const THREADS = [
  { id: "t1", label: "p95 de eu-central-1", meta: "09:12" },
  { id: "t2", label: "Coste del reintento de cobro", meta: "ayer" },
  { id: "t3", label: "Ventana de despliegue de agosto", meta: "31 jul" }
];
const ANSWER = {
  trace: [{ label: "metrics.p95(eu-central-1, 24h)", ms: 180 }, { label: "deploys.list(eu-central-1)", ms: 96 }, { label: "incidents.open()", ms: 42 }],
  cites: [{ label: "SVC-4821-DE", hint: "conciliacion" }, { label: "DPL-11482", hint: "despliegue", icon: "git-commit-horizontal" }]
};
function AssistantKit() {
  const [thread, setThread] = React.useState("t1");
  const [q, setQ] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [turns, setTurns] = React.useState([
    { role: "user", at: "09:12", text: "\xBFPor que ha subido el p95 en eu-central-1?" },
    { role: "assistant", at: "09:12", answer: true }
  ]);
  const send = (text) => {
    setTurns((t) => [...t, { role: "user", at: "09:14", text }]);
    setQ("");
    setBusy(true);
    setTimeout(() => {
      setTurns((t) => [...t, { role: "assistant", at: "09:14", answer: true }]);
      setBusy(false);
    }, 1200);
  };
  return /* @__PURE__ */ React.createElement(
    AppShell,
    {
      topbar: /* @__PURE__ */ React.createElement(
        TopBar,
        {
          brand: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)", letterSpacing: "-0.02em" } }, "Aplomo"), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-muted)" } }, "asistente")),
          center: /* @__PURE__ */ React.createElement(Breadcrumb, { items: ["Operacion", "Asistente"] }),
          right: /* @__PURE__ */ React.createElement(Tooltip, { label: "Historial" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "history", label: "Historial" })),
          user: { name: "Marta Iglesias", meta: "guardia \xB7 eu-central-1" }
        }
      ),
      nav: /* @__PURE__ */ React.createElement(
        SideNav,
        {
          value: thread,
          onChange: setThread,
          groups: [
            { label: "Conversaciones", items: THREADS.map((t) => ({ value: t.id, label: t.label, icon: "message-square" })) },
            { label: "Contexto", items: [{ value: "svc", label: "Servicios", icon: "server", count: 248 }, { value: "dep", label: "Despliegues", icon: "git-commit-horizontal", count: 12 }] }
          ],
          footer: /* @__PURE__ */ React.createElement(Button, { size: "sm", style: { width: "100%" } }, "Nueva conversacion")
        }
      ),
      aside: /* @__PURE__ */ React.createElement("aside", { style: { width: 300, flex: "0 0 auto", borderLeft: "1px solid var(--ap-border)", background: "var(--ap-surface-sunken)", padding: "var(--ap-space-4)", overflow: "auto" } }, /* @__PURE__ */ React.createElement(SectionHeader, { label: "Contexto de la respuesta" }), /* @__PURE__ */ React.createElement(Panel, { padded: true, style: { marginBottom: "var(--ap-space-3)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(DataValue, { value: "SVC-4821-DE", size: "var(--ap-size-13)", weight: 500 }), /* @__PURE__ */ React.createElement(Badge, { tone: "warn" }, "DEGRADADO")), /* @__PURE__ */ React.createElement(Sparkline, { data: [172, 174, 176, 180, 182, 184, 184, 186], width: 240, height: 26, tone: "warn" }), /* @__PURE__ */ React.createElement(KeyValue, { label: "p95", value: "184 ms" }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Error", value: "1,40%" }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Version", value: "4.18.2" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Chip, { data: true }, "eu-central-1"), /* @__PURE__ */ React.createElement(Chip, { data: true }, "24 h")), /* @__PURE__ */ React.createElement(Divider, { label: "Limites" }), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, font: "var(--ap-text-small)", color: "var(--ap-text-secondary)", textWrap: "pretty" } }, "El asistente lee metricas, despliegues e incidencias. No ejecuta acciones ni modifica configuracion."))
    },
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", padding: "var(--ap-space-4) var(--ap-space-6)" } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, turns.map((t, i) => t.role === "user" ? /* @__PURE__ */ React.createElement(Message, { key: i, role: "user", author: "Marta Iglesias", at: t.at }, t.text) : /* @__PURE__ */ React.createElement(Message, { key: i, at: t.at, footer: ANSWER.cites.map((c) => /* @__PURE__ */ React.createElement(Citation, { key: c.label, ...c })) }, /* @__PURE__ */ React.createElement(AssistantTrace, { steps: ANSWER.trace, style: { marginBottom: "var(--ap-space-3)" } }), "El p95 agregado pas\xF3 de ", /* @__PURE__ */ React.createElement(DataValue, { value: "172 ms" }), " a ", /* @__PURE__ */ React.createElement(DataValue, { value: "184 ms" }), " tras el despliegue de ", /* @__PURE__ */ React.createElement(DataValue, { value: "4.18.2" }), " el ", /* @__PURE__ */ React.createElement(DataValue, { value: "2026-07-29 14:02" }), ". El aumento se concentra en ", /* @__PURE__ */ React.createElement("b", { style: { fontWeight: 500 } }, "conciliaci\xF3n nocturna"), ", que sirve ", /* @__PURE__ */ React.createElement(DataValue, { value: "8.412" }), " peticiones por minuto con ", /* @__PURE__ */ React.createElement(DataValue, { value: "1,40%" }), " de error \u2014 el resto de servicios de la regi\xF3n siguen por debajo de ", /* @__PURE__ */ React.createElement(DataValue, { value: "130 ms" }), ".")), busy && /* @__PURE__ */ React.createElement(Message, { at: "09:14" }, /* @__PURE__ */ React.createElement(AssistantTrace, { running: true, defaultOpen: true, steps: [{ label: "metrics.p95(eu-central-1, 1h)", ms: 120 }, { label: "deploys.diff(4.18.1, 4.18.2)", status: "running" }] })), !turns.length && /* @__PURE__ */ React.createElement(EmptyState, { title: "Pregunta por un servicio, una region o un despliegue", description: "El asistente responde con datos del entorno y cita siempre sus fuentes.", style: { borderTop: 0 } }))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--ap-border)", padding: "var(--ap-space-3) var(--ap-space-6)", background: "var(--ap-surface)" } }, /* @__PURE__ */ React.createElement(Composer, { value: q, onChange: setQ, onSend: send, busy, onAttach: () => {
    }, hint: "Solo lectura: no ejecuta acciones" })))
  );
}
Object.assign(window, { AssistantKit });

})();
(function(){
const mount = () => {
  if (typeof window.AssistantKit !== "function") return setTimeout(mount, 60);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(AssistantKit, null));
};
mount();

})();