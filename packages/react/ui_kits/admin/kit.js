/* AUTO-GENERADO por scripts/build-kits.mjs — edita los .jsx, no este fichero. */
(function(){
const { Panel, PageHeader, DataValue, Badge, Button, IconButton, Stagger, InlineAlert, Tooltip, DataTable, KeyValue, AsciiDiagram, AsciiMeter, BarSeries, Sparkline, ShareBar } = typeof window !== "undefined" && window.AP_UI || {};
function OverviewView({ onGo }) {
  const [loading, setLoading] = React.useState(true);
  const [t, setT] = React.useState("24 h");
  React.useEffect(() => {
    const x = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(x);
  }, []);
  const reload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 700);
  };
  const regions = [
    { id: "eu", name: "eu-central-1", rpm: "71.844", p95: "128 ms", st: "ACTIVA", tone: "ok", load: 88 },
    { id: "us", name: "us-east-1", rpm: "160.382", p95: "104 ms", st: "ACTIVA", tone: "ok", load: 100 },
    { id: "sa", name: "sa-east-1", rpm: "26.050", p95: "162 ms", st: "ACTIVA", tone: "ok", load: 41 },
    { id: "ap", name: "ap-south-1", rpm: "0", p95: "\u2014", st: "DRENADA", tone: "error", load: 0 }
  ];
  const lab = { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)" };
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
    PageHeader,
    {
      eyebrow: "Portada de operacion \xB7 2026-08-03 09:12 UTC",
      title: "Todo en marcha salvo una region",
      meta: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DataValue, { value: "10 servicios", loading, placeholder: "00 servicios" }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ap-gray-300)" } }, "/"), /* @__PURE__ */ React.createElement(DataValue, { value: "1 incidencia abierta", loading, placeholder: "0 incidencias" })),
      actions: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip, { label: "Recalcular ahora" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "refresh-cw", label: "Recargar", onClick: reload })), /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => onGo && onGo("svc") }, "Ir a servicios"))
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto" } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--ap-border)", borderBottom: "1px solid var(--ap-border)", padding: "var(--ap-space-8) var(--ap-space-6)", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) 1px minmax(0,1fr)", gap: "var(--ap-space-8)", alignItems: "end" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...lab, marginBottom: 10 } }, "Peticiones por minuto \xB7 agregado"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12 } }, /* @__PURE__ */ React.createElement(DataValue, { value: "258.276", loading, placeholder: "000.000", size: "var(--ap-size-48)", weight: 500, style: { letterSpacing: "-0.03em", lineHeight: 1 } }), /* @__PURE__ */ React.createElement(DataValue, { value: "+2,1%", loading, placeholder: "\u2014", size: "var(--ap-size-16)", weight: 500, tone: "ok" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18 } }, /* @__PURE__ */ React.createElement(BarSeries, { data: [38, 42, 40, 47, 52, 49, 58, 61, 57, 64, 60, 68, 72, 69, 74, 78, 71, 76, 82, 79, 86, 84, 91, 88], labels: ["hace 24 h", "ahora"], loading, height: 56 }))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--ap-border)", alignSelf: "stretch" } }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "var(--ap-space-6)", columnGap: "var(--ap-space-6)" } }, [["p95 agregado", "184 ms", "+12 ms", "warn"], ["Disponibilidad", "99,982%", "objetivo 99,900%", void 0], ["Tasa de error", "0,31%", "\u22120,04%", "ok"], ["MTTR semana", "42 min", "4 incidencias", void 0]].map(([k, v, d, tone]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { ...lab, marginBottom: 6 } }, k), /* @__PURE__ */ React.createElement(DataValue, { value: v, loading, placeholder: "\u2014", size: "var(--ap-size-23)", weight: 500, style: { letterSpacing: "-0.02em" } }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2 } }, /* @__PURE__ */ React.createElement(DataValue, { value: d, loading, placeholder: "\u2014", size: "var(--ap-size-12)", tone: tone || "muted" })))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6) 0" } }, /* @__PURE__ */ React.createElement(InlineAlert, { tone: "error", title: "ap-south-1 drenada desde 2026-08-02 04:12" }, "SVC-7712-AP sin respuesta. INC-2261 abierta, guardia Rahul Menon.")), /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: lab }, "Carga por region"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16 } }, ["1 h", "24 h", "7 d"].map((x) => /* @__PURE__ */ React.createElement("button", { key: x, onClick: () => setT(x), style: { border: 0, background: "transparent", padding: 0, cursor: "pointer", font: "var(--ap-text-small)", fontVariationSettings: "var(--ap-vf-data)", color: t === x ? "var(--ap-text)" : "var(--ap-text-muted)", borderBottom: t === x ? "1px solid var(--ap-gray-900)" : "1px solid transparent" } }, x)))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid var(--ap-border)", borderRadius: "var(--ap-radius-panel)", overflow: "hidden" } }, regions.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: r.id, style: { padding: "var(--ap-space-4)", borderRight: i < 3 ? "1px solid var(--ap-border)" : 0, display: "grid", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ React.createElement(DataValue, { value: r.name, size: "var(--ap-size-13)", weight: 500 }), /* @__PURE__ */ React.createElement(Badge, { tone: r.tone }, r.st)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement(DataValue, { value: r.rpm, loading, placeholder: "000.000", size: "var(--ap-size-29)", weight: 500, style: { letterSpacing: "-0.02em", lineHeight: 1.05 } }), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-micro)", color: "var(--ap-text-muted)" } }, "pet./min")), /* @__PURE__ */ React.createElement(AsciiMeter, { value: loading ? 0 : r.load, tone: r.tone === "error" ? "error" : "default", showValue: !loading }), /* @__PURE__ */ React.createElement(Sparkline, { data: r.tone === "error" ? [40, 32, 20, 12, 6, 2, 0, 0] : [52, 49, 58, 61, 57, 64, 60, 68], width: 140, height: 22, tone: r.tone === "error" ? "error" : "default" }), /* @__PURE__ */ React.createElement(DataValue, { value: "p95 " + r.p95, loading, placeholder: "p95 \u2014", size: "var(--ap-size-12)", tone: "muted" }))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6) 0" } }, /* @__PURE__ */ React.createElement(Panel, { title: "Topologia de trafico", padded: true, actions: /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => onGo && onGo("dep") }, "Ver despliegues") }, /* @__PURE__ */ React.createElement(AsciiDiagram, null, ` cliente \u2500\u2500\u25B6 borde \u2500\u2500\u252C\u2500\u2500\u25B6 eu-central-1   4.18.2   ${loading ? "[\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591]" : "[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591]  88%"}
                     \u251C\u2500\u2500\u25B6 us-east-1      4.18.1   ${loading ? "[\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591]" : "[\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%"}
                     \u251C\u2500\u2500\u25B6 sa-east-1      4.18.1   ${loading ? "[\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591]" : "[\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591]  41%"}
                     \u2514\u2500\u2500\u25B6 ap-south-1     4.16.4   ${loading ? "[\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591]" : "[\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591] drenada"}`))), /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: "var(--ap-space-4)", alignItems: "start" } }, /* @__PURE__ */ React.createElement(Panel, { title: "Requiere atencion", actions: /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => onGo && onGo("inc") }, "Ver incidencias") }, /* @__PURE__ */ React.createElement(
    DataTable,
    {
      columns: [{ key: "ref", label: "Referencia", width: "128px", data: true }, { key: "what", label: "Asunto", width: "1fr" }, { key: "age", label: "Antiguedad", width: "116px", align: "right", data: true }],
      rows: [{ id: "a", ref: "INC-2261", what: "Liquidacion sin respuesta en ap-south-1", age: "31 h 20 min" }, { id: "b", ref: "INC-2260", what: "Reintentos de cobro por encima del objetivo p95", age: "39 h 52 min" }, { id: "c", ref: "SVC-5505-DE", what: "Exportacion contable con p95 de 340 ms", age: "12 d" }],
      onSelectRow: () => onGo && onGo("inc")
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(Panel, { title: "Reparto de version", padded: true }, /* @__PURE__ */ React.createElement(ShareBar, { loading, segments: [{ label: "4.18.2", value: 62 }, { label: "4.18.1", value: 30 }, { label: "4.16.4", value: 8, tone: "error" }] })), /* @__PURE__ */ React.createElement(Panel, { title: "Ventana de despliegue", padded: true }, /* @__PURE__ */ React.createElement(KeyValue, { label: "Proxima ventana", value: "2026-08-04 22:00 UTC", loading }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Version candidata", value: "4.18.3", loading }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Regiones pendientes", value: "ap-south-1, sa-east-1", loading }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Aprobaciones", value: "1 de 2", loading }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "var(--ap-space-4)", display: "flex", gap: "var(--ap-space-2)" } }, /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => onGo && onGo("dep") }, "Ver despliegues"), /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => onGo && onGo("set") }, "Ajustar umbrales"))))))));
}
Object.assign(window, { OverviewView });

})();
(function(){
const { Panel, Toolbar, PageHeader, DetailPanel, DataTable, DataValue, MetricTile, KeyValue, Badge, Button, IconButton, SearchField, Select, Chip, Tabs, Menu, Dialog, InlineAlert, EmptyState, Stagger, SharedValue, AsciiDiagram, CopyValue, BulkActionBar, ColumnManager, CommandPalette, OperationLog, Sparkline, Pagination, AuditTimeline, ConfigDiff } = typeof window !== "undefined" && window.AP_UI || {};
const SERIES = { s1: [38, 42, 40, 47, 52, 49, 58, 61, 57, 64], s2: [62, 58, 66, 71, 80, 88, 96, 102, 110, 118], s3: [96, 94, 98, 92, 90, 95, 93, 91, 96, 94], s4: [180, 190, 205, 199, 210, 215, 208, 212, 214, 212], s5: [40, 32, 20, 12, 6, 2, 0, 0, 0, 0], s6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], s7: [60, 62, 58, 64, 66, 63, 61, 65, 64, 64], s8: [300, 310, 320, 318, 330, 336, 340, 338, 341, 340], s9: [140, 142, 138, 146, 150, 148, 152, 149, 147, 148], s10: [300, 340, 360, 380, 392, 398, 400, 402, 401, 402] };
function ServicesView({ onGo }) {
  const all = window.AP_DATA.services;
  const [tab, setTab] = React.useState("all");
  const [q, setQ] = React.useState("");
  const [region, setRegion] = React.useState("todas");
  const [sel, setSel] = React.useState(null);
  const [checked, setChecked] = React.useState([]);
  const [menu, setMenu] = React.useState(false);
  const [colsOpen, setColsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState([]);
  const [ask, setAsk] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [sort, setSort] = React.useState({ key: "p95", dir: "asc" });
  const [palette, setPalette] = React.useState(false);
  const [ops, setOps] = React.useState([]);
  const refs = React.useRef({});
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const num = (v) => {
    const n = parseFloat(String(v).replace(/\./g, "").replace(",", "."));
    return isNaN(n) ? -1 : n;
  };
  const filtered = all.filter((s) => (tab === "all" || tab === "deg" && s.tone !== "ok" || tab === "ret" && s.st === "EN COLA") && (region === "todas" || s.region === region) && (q === "" || (s.name + " " + s.ref).toLowerCase().includes(q.toLowerCase())));
  const rows = [...filtered].sort((a, b) => {
    const k = sort.key, va = k === "name" || k === "region" ? String(a[k]) : num(a[k]), vb = k === "name" || k === "region" ? String(b[k]) : num(b[k]);
    const r = va < vb ? -1 : va > vb ? 1 : 0;
    return sort.dir === "asc" ? r : -r;
  });
  const allCols = [
    { key: "ref", label: "Referencia", width: "140px", data: true, shared: true, locked: true },
    { key: "name", label: "Servicio", width: "minmax(160px,1fr)", sortable: true },
    { key: "region", label: "Region", width: "112px", data: true, tone: "muted", sortable: true },
    { key: "st", label: "Estado", width: "108px", render: (r) => /* @__PURE__ */ React.createElement(Badge, { tone: r.tone }, r.st) },
    { key: "trend", label: "24 h", width: "92px", render: (r) => /* @__PURE__ */ React.createElement(Sparkline, { data: SERIES[r.id] || [], width: 80, height: 20, tone: r.tone === "ok" ? "default" : r.tone }) },
    { key: "p95", label: "p95", width: "76px", align: "right", data: true, sortable: true },
    { key: "rpm", label: "Pet./min", width: "84px", align: "right", data: true, sortable: true }
  ];
  const cols = allCols.filter((c) => !hidden.includes(c.key));
  const row = all.find((s) => s.id === sel);
  const open = (r, el) => {
    SharedValue.capture(r.id, el || refs.current[r.id]);
    setSel(r.id);
  };
  const drain = (name) => {
    const id = "op" + Date.now();
    setOps((o) => [...o, { id, title: "Drenando " + name, progress: 8, detail: "5 min restantes", status: "running" }]);
    let p = 8;
    const t = setInterval(() => {
      p += 23;
      setOps((o) => o.map((x) => x.id === id ? { ...x, progress: Math.min(p, 100), detail: p >= 100 ? "completado" : Math.max(1, Math.round((100 - p) / 20)) + " min restantes", status: p >= 100 ? "ok" : "running" } : x));
      if (p >= 100) clearInterval(t);
    }, 900);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", minWidth: 0, flex: 1, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
    PageHeader,
    {
      eyebrow: "Infraestructura",
      title: "Servicios en produccion",
      meta: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DataValue, { value: rows.length + " de " + all.length + " servicios", loading, placeholder: "00 de 00 servicios" }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ap-gray-300)" } }, "/"), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Pulsa ", /* @__PURE__ */ React.createElement("span", { style: { fontVariationSettings: "var(--ap-vf-data)" } }, "\u2318K"), " para buscar o ejecutar")),
      actions: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(IconButton, { icon: "more-horizontal", label: "Mas acciones", selected: menu, onClick: () => setMenu(!menu) }), /* @__PURE__ */ React.createElement(Menu, { open: menu, onClose: () => setMenu(false), items: [{ value: "exp", label: "Exportar CSV", icon: "download", shortcut: "\u2318E" }, { value: "pal", label: "Paleta de comandos", icon: "search", shortcut: "\u2318K" }, { divider: true }, { value: "del", label: "Retirar seleccion", icon: "trash-2", tone: "danger" }], onSelect: (v) => {
        if (v === "del") setAsk(true);
        if (v === "pal") setPalette(true);
      } })), /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Nuevo servicio"))
    }
  ), /* @__PURE__ */ React.createElement(Tabs, { tabs: [{ value: "all", label: "Todos", count: all.length }, { value: "deg", label: "Con incidencia", count: all.filter((s) => s.tone !== "ok").length }, { value: "ret", label: "En cola", count: all.filter((s) => s.st === "EN COLA").length }], value: tab, onChange: setTab }), /* @__PURE__ */ React.createElement(
    Toolbar,
    {
      left: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SearchField, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Nodo, region, referencia" }), /* @__PURE__ */ React.createElement(Select, { value: region, onChange: (e) => setRegion(e.target.value), options: [{ value: "todas", label: "Todas las regiones" }, "eu-central-1", "us-east-1", "ap-south-1", "sa-east-1"], style: { width: 190 } }), region !== "todas" && /* @__PURE__ */ React.createElement(Chip, { data: true, onRemove: () => setRegion("todas") }, region)),
      right: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(IconButton, { icon: "columns-3", label: "Columnas", selected: colsOpen, onClick: () => setColsOpen(!colsOpen) }), /* @__PURE__ */ React.createElement(ColumnManager, { open: colsOpen, onClose: () => setColsOpen(false), columns: allCols, hidden, onToggle: (k) => setHidden((h) => h.includes(k) ? h.filter((x) => x !== k) : [...h, k]) })), /* @__PURE__ */ React.createElement(IconButton, { icon: "refresh-cw", label: "Recargar", onClick: () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 700);
      } }))
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto" } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", borderBottom: "1px solid var(--ap-border)", background: "var(--ap-surface)" } }, /* @__PURE__ */ React.createElement(MetricTile, { label: "Peticiones / min", value: "257.096", delta: "+2,1% 24 h", deltaTone: "ok", loading }), /* @__PURE__ */ React.createElement(MetricTile, { label: "p95 agregado", value: "184", unit: "ms", delta: "+12 ms 24 h", deltaTone: "warn", loading }), /* @__PURE__ */ React.createElement(MetricTile, { label: "Disponibilidad", value: "99,982%", delta: "objetivo 99,900%", loading }), /* @__PURE__ */ React.createElement(MetricTile, { label: "Incidencias abiertas", value: "1", delta: "SEV-1", deltaTone: "error", loading, style: { borderRight: 0 } })), rows.some((r) => r.tone === "error") && /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6) 0" } }, /* @__PURE__ */ React.createElement(InlineAlert, { tone: "error", title: "SVC-7712-AP sin respuesta desde 2026-08-02 04:12" }, "La region ap-south-1 esta drenada. La incidencia INC-2261 sigue abierta.")), /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)" } }, /* @__PURE__ */ React.createElement(Panel, null, rows.length ? /* @__PURE__ */ React.createElement(
    DataTable,
    {
      columns: cols,
      rows,
      selectable: true,
      selectedId: sel,
      onSelectRow: open,
      sort,
      onSort: (k) => setSort((s) => ({ key: k, dir: s.key === k && s.dir === "asc" ? "desc" : "asc" })),
      onEscape: () => setSel(null),
      checked,
      onCheck: (id) => setChecked((c) => id === "all" ? c.length === rows.length ? [] : rows.map((r) => r.id) : c.includes(id) ? c.filter((x) => x !== id) : [...c, id]),
      rowRef: (id, el) => {
        refs.current[id] = el;
      }
    }
  ) : /* @__PURE__ */ React.createElement("div", { style: { padding: "var(--ap-space-8) var(--ap-space-6)", display: "grid", gap: "var(--ap-space-6)", justifyItems: "start" } }, /* @__PURE__ */ React.createElement(AsciiDiagram, { tone: "muted" }, ` \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2510   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2510
 \u2502      \u2502   \u2502      \u2502   \u2502      \u2502
 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518
    \u2591\u2591         \u2591\u2591         \u2591\u2591
 sin coincidencias en el filtro actual`), /* @__PURE__ */ React.createElement(EmptyState, { title: "Ningun servicio coincide con estos filtros", description: "Quita la region o amplia la busqueda.", action: /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => {
    setQ("");
    setRegion("todas");
    setTab("all");
  } }, "Limpiar filtros"), style: { borderTop: 0, padding: 0 } })), rows.length > 0 && /* @__PURE__ */ React.createElement(Pagination, { from: 1, to: rows.length, total: all.length, pageSize: 40, loading })), /* @__PURE__ */ React.createElement(
    BulkActionBar,
    {
      count: checked.length,
      onClear: () => setChecked([]),
      actions: [{ label: "Drenar", onClick: () => {
        drain(checked.length + " servicios");
        setChecked([]);
      } }, { label: "Exportar" }, { label: "Retirar", tone: "danger", onClick: () => setAsk(true) }]
    }
  ))))), /* @__PURE__ */ React.createElement(
    DetailPanel,
    {
      open: !!row,
      onClose: () => setSel(null),
      header: row && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", marginBottom: 4 } }, row.name), /* @__PURE__ */ React.createElement(SharedValue, { sharedKey: row.id, style: { font: "var(--ap-weight-bold) var(--ap-size-23)/1.2 var(--ap-font-core)", letterSpacing: "-0.02em" } }, row.ref), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, display: "flex", gap: 8, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Badge, { tone: row.tone }, row.st), /* @__PURE__ */ React.createElement(DataValue, { value: row.region, size: "var(--ap-size-12)", tone: "muted" }))),
      footer: row && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "danger", onClick: () => setAsk(true) }, "Retirar"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", onClick: () => drain(row.ref) }, "Drenar trafico"))
    },
    row && /* @__PURE__ */ React.createElement(Stagger, { step: 60 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "var(--ap-space-6)", paddingBottom: "var(--ap-space-4)", borderBottom: "1px solid var(--ap-border)" } }, [["p95", row.p95], ["Error", row.err], ["Nodos", row.nodes]].map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", marginBottom: 4 } }, k), /* @__PURE__ */ React.createElement(DataValue, { value: v, size: "var(--ap-size-19)", weight: 500 }))), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", alignSelf: "flex-end" } }, /* @__PURE__ */ React.createElement(Sparkline, { data: SERIES[row.id] || [], width: 104, height: 28, tone: row.tone === "ok" ? "default" : row.tone }))), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: "var(--ap-space-3)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "128px 1fr", gap: "var(--ap-space-3)", alignItems: "center", padding: "var(--ap-space-1) 0", borderBottom: "1px solid var(--ap-border)" } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Referencia"), /* @__PURE__ */ React.createElement(CopyValue, { value: row.ref })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "128px 1fr", gap: "var(--ap-space-3)", alignItems: "center", padding: "var(--ap-space-1) 0", borderBottom: "1px solid var(--ap-border)" } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Ruta"), /* @__PURE__ */ React.createElement(CopyValue, { value: "/api/v4/" + row.name.toLowerCase().split(" ")[0] })), /* @__PURE__ */ React.createElement(KeyValue, { label: "Version", value: row.ver }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Ultimo despliegue", value: row.dep }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Cumplimiento SLA", value: row.sla }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Responsable", value: row.owner, data: false })), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", marginBottom: 8 } }, "Auditoria"), /* @__PURE__ */ React.createElement(AuditTimeline, { loading, entries: [
      { at: "2026-08-02 04:12", actor: "sistema", title: "Nodo 7 sin respuesta", tag: "SEV-1", tone: "error" },
      { at: "2026-07-29 14:02", actor: "Marta Iglesias", title: "Umbral de reversion modificado", tag: "CONFIG", children: /* @__PURE__ */ React.createElement(ConfigDiff, { changes: [{ key: "error_max", from: "2,00%", to: "1,00%" }] }) },
      { at: "2026-07-29 13:58", actor: "sistema", title: "Despliegue " + row.ver + " completado", tag: "OK", tone: "ok" }
    ] })))
  ), /* @__PURE__ */ React.createElement(
    CommandPalette,
    {
      open: palette,
      onClose: () => setPalette(false),
      items: [
        ...all.map((s) => ({ id: s.id, label: s.ref, hint: s.name + " \xB7 " + s.region, data: true, icon: "server", action: "open" })),
        { id: "go-dep", label: "Ir a despliegues", hint: "vista", icon: "git-commit-horizontal", action: "dep" },
        { id: "go-inc", label: "Ir a incidencias", hint: "vista", icon: "activity", action: "inc" },
        { id: "drain", label: "Drenar trafico de la region", hint: "accion", icon: "activity", action: "drain" }
      ],
      onSelect: (it) => {
        if (it.action === "open") {
          const r = all.find((s) => s.id === it.id);
          if (r) open(r);
        } else if (it.action === "drain") drain("eu-central-1");
        else if (onGo) onGo(it.action);
      }
    }
  ), /* @__PURE__ */ React.createElement(OperationLog, { operations: ops, onDismiss: (id) => setOps((o) => o.filter((x) => x.id !== id)) }), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: ask,
      onClose: () => setAsk(false),
      title: "Retirar " + (row ? row.ref : "la seleccion") + " de produccion",
      description: "El trafico se drenara durante 5 minutos antes de retirar el servicio. La operacion no es reversible.",
      footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { onClick: () => setAsk(false) }, "Cancelar"), /* @__PURE__ */ React.createElement(Button, { variant: "danger", solid: true, onClick: () => {
        setAsk(false);
        drain(row ? row.ref : "la seleccion");
      } }, "Retirar"))
    }
  ));
}
Object.assign(window, { ServicesView });

})();
(function(){
const { Panel, PageHeader, Toolbar, DataTable, DataValue, Badge, Button, IconButton, SearchField, Stagger, InlineAlert, Tooltip, DateRange, ErrorState, ShareBar } = typeof window !== "undefined" && window.AP_UI || {};
function DeploymentsView() {
  const rows = window.AP_DATA.deployments;
  const [q, setQ] = React.useState("");
  const [range, setRange] = React.useState("7d");
  const [failed, setFailed] = React.useState(false);
  const cols = [
    { key: "ref", label: "Referencia", width: "140px", data: true },
    { key: "ver", label: "Version", width: "96px", data: true },
    { key: "target", label: "Destino", width: "1fr", data: true, tone: "muted" },
    { key: "st", label: "Estado", width: "136px", render: (r) => /* @__PURE__ */ React.createElement(Badge, { tone: r.tone }, r.st) },
    { key: "started", label: "Inicio", width: "168px", align: "right", data: true },
    { key: "dur", label: "Duracion", width: "110px", align: "right", data: true },
    { key: "author", label: "Autor", width: "156px" }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(PageHeader, { eyebrow: "Entrega continua", title: "Despliegues", meta: /* @__PURE__ */ React.createElement(DataValue, { value: "4.18.2 \xB7 ultimo hace 4 d" }), actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Desplegar version") }), /* @__PURE__ */ React.createElement(Toolbar, { left: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SearchField, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Version, destino, autor" }), /* @__PURE__ */ React.createElement(DateRange, { value: range, onChange: setRange, absolute: "2026-07-27 \u2192 2026-08-03" })), right: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Tooltip, { label: "Historial completo" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "history", label: "Historial" })), /* @__PURE__ */ React.createElement(IconButton, { icon: "download", label: "Exportar" })) }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", padding: "var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)" } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60, style: { display: "grid", gap: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(InlineAlert, { tone: "warn", title: "DPL-11481 revertido automaticamente" }, "El umbral de error del 1% se supero a los 6 min 02 s. ap-south-1 sigue en 4.16.4."), /* @__PURE__ */ React.createElement(Panel, { title: "Ultimos despliegues", actions: /* @__PURE__ */ React.createElement(Button, { size: "sm" }, "Comparar versiones") }, /* @__PURE__ */ React.createElement(DataTable, { columns: cols, rows: rows.filter((r) => q === "" || (r.ver + r.target + r.author).toLowerCase().includes(q.toLowerCase())) })), /* @__PURE__ */ React.createElement(Panel, { title: "Distribucion por region", padded: true, actions: /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => setFailed((f) => !f) }, failed ? "Reintentar" : "Simular fallo") }, failed ? /* @__PURE__ */ React.createElement(ErrorState, { code: "HTTP 503", detail: "El agregador de metricas no responde. La ultima lectura es de hace 4 min.", onRetry: () => setFailed(false), style: { padding: 0 } }) : /* @__PURE__ */ React.createElement(ShareBar, { segments: [{ label: "4.18.2 \xB7 eu-central-1", value: 38 }, { label: "4.18.1 \xB7 us-east-1", value: 32 }, { label: "4.18.1 \xB7 sa-east-1", value: 22 }, { label: "4.16.4 \xB7 ap-south-1", value: 8, tone: "error" }] })))));
}
Object.assign(window, { DeploymentsView });

})();
(function(){
const { Panel, PageHeader, Toolbar, DataTable, DataValue, Badge, Button, IconButton, SearchField, Select, Stagger, Tabs, EmptyState, SegmentedControl, List, Steps, LogStream, SectionHeader, Columns } = typeof window !== "undefined" && window.AP_UI || {};
function IncidentsView() {
  const all = window.AP_DATA.incidents;
  const [tab, setTab] = React.useState("open");
  const [mode, setMode] = React.useState("Tabla");
  const [sel, setSel] = React.useState("i1");
  const rows = all.filter((i) => tab === "all" || tab === "open" && i.st !== "CERRADA" || tab === "closed" && i.st === "CERRADA");
  const cols = [
    { key: "ref", label: "Referencia", width: "128px", data: true },
    { key: "sev", label: "Severidad", width: "104px", render: (r) => /* @__PURE__ */ React.createElement(Badge, { tone: r.tone }, r.sev) },
    { key: "title", label: "Asunto", width: "1fr" },
    { key: "st", label: "Estado", width: "112px", data: true, tone: "muted" },
    { key: "opened", label: "Apertura", width: "160px", align: "right", data: true },
    { key: "age", label: "Antiguedad", width: "112px", align: "right", data: true },
    { key: "owner", label: "Guardia", width: "150px" }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(PageHeader, { eyebrow: "Operacion", title: "Incidencias", meta: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DataValue, { value: "1 abierta" }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ap-gray-300)" } }, "/"), /* @__PURE__ */ React.createElement(DataValue, { value: "MTTR 42 min" })), actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary" }, "Abrir incidencia") }), /* @__PURE__ */ React.createElement(Tabs, { tabs: [{ value: "open", label: "Abiertas", count: all.filter((i) => i.st !== "CERRADA").length }, { value: "closed", label: "Cerradas", count: all.filter((i) => i.st === "CERRADA").length }, { value: "all", label: "Todas", count: all.length }], value: tab, onChange: setTab }), /* @__PURE__ */ React.createElement(Toolbar, { left: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SearchField, { placeholder: "Referencia o asunto" }), /* @__PURE__ */ React.createElement(Select, { options: ["Todas las guardias", "Marta Iglesias", "Rahul Menon", "Ana Duarte"], style: { width: 190 } })), right: /* @__PURE__ */ React.createElement(SegmentedControl, { value: mode, onChange: setMode, options: ["Tabla", "Lista"] }) }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", padding: "var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)" } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60, style: { display: "grid", gap: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(Panel, null, !rows.length ? /* @__PURE__ */ React.createElement(EmptyState, { title: "Sin incidencias en este estado", style: { borderTop: 0 } }) : mode === "Tabla" ? /* @__PURE__ */ React.createElement(DataTable, { columns: cols, rows }) : /* @__PURE__ */ React.createElement(List, { selectedId: sel, onSelect: (it) => setSel(it.id), items: rows.map((r) => ({ id: r.id, title: r.title, ref: r.ref, subtitle: r.owner + " \xB7 " + r.st, meta: r.age, tone: r.tone })) })), /* @__PURE__ */ React.createElement(Panel, { title: "Mitigacion de INC-2261", padded: true }, /* @__PURE__ */ React.createElement(Steps, { current: 2, steps: [{ label: "Detectada", meta: "04:12" }, { label: "Region drenada", meta: "04:15" }, { label: "Nodos sustituidos", meta: "en curso" }, { label: "Cerrada" }] }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(SectionHeader, { label: "Salida del nodo 7", meta: "ap-south-1" }), /* @__PURE__ */ React.createElement(LogStream, { height: 132, lines: [
    { at: "04:12:02", level: "ERROR", text: "health check sin respuesta \xB7 3 intentos" },
    { at: "04:15:40", level: "INFO", text: "drenaje de region iniciado" },
    { at: "04:19:11", level: "OK", text: "trafico redirigido a us-east-1" },
    { at: "05:02:38", level: "WARN", text: "sustitucion de nodo pendiente de cuota" }
  ] }))), /* @__PURE__ */ React.createElement(Panel, { title: "Tiempos de la ultima semana", padded: true }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "var(--ap-space-10)" } }, [["Deteccion", "3 min"], ["Mitigacion", "18 min"], ["Resolucion", "42 min"], ["Incidencias", "4"]].map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { font: "var(--ap-text-micro)", letterSpacing: "var(--ap-tracking-label)", textTransform: "uppercase", color: "var(--ap-text-muted)", marginBottom: 4 } }, k), /* @__PURE__ */ React.createElement(DataValue, { value: v, size: "var(--ap-size-23)", weight: 500 }))))))));
}
Object.assign(window, { IncidentsView });

})();
(function(){
const { Panel, PageHeader, Button, Input, Select, Checkbox, Switch, Stagger, KeyValue, DataValue, InlineAlert, Breadcrumb, UnitInput, DurationInput, AuditTimeline, ConfigDiff, CopyValue, Radio, Textarea, FileDrop, Quota, Columns, Divider } = typeof window !== "undefined" && window.AP_UI || {};
function SettingsView() {
  const [auto, setAuto] = React.useState(true);
  const [strict, setStrict] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [win, setWin] = React.useState({ value: 5, unit: "min" });
  const [strategy, setStrategy] = React.useState("canary");
  return /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(PageHeader, { eyebrow: "Cuenta", title: "Ajustes de despliegue", meta: /* @__PURE__ */ React.createElement(Breadcrumb, { items: ["Cuenta", "Ajustes", { label: "eu-central-1", data: true }] }), actions: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => setSaved(true) }, "Guardar cambios") }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", padding: "var(--ap-space-4) var(--ap-space-6) var(--ap-space-10)" } }, /* @__PURE__ */ React.createElement(Stagger, { step: 60, style: { display: "grid", gap: "var(--ap-space-4)", maxWidth: 760 } }, saved && /* @__PURE__ */ React.createElement(InlineAlert, { tone: "ok", title: "Ajustes guardados" }, "La proxima ventana de despliegue aplicara estos umbrales."), /* @__PURE__ */ React.createElement(Panel, { title: "Umbrales de reversion", padded: true }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ap-space-4)" } }, /* @__PURE__ */ React.createElement(UnitInput, { label: "Error maximo", unit: "%", defaultValue: "1,00", hint: "Se evalua durante 10 min", width: "100%" }), /* @__PURE__ */ React.createElement(UnitInput, { label: "p95 maximo", unit: "ms", defaultValue: "250", width: "100%" }), /* @__PURE__ */ React.createElement(Radio, { name: "strategy", value: strategy, onChange: setStrategy, options: [{ value: "canary", label: "Canaria", hint: "5% / 25% / 100%" }, { value: "bg", label: "Azul-verde" }, { value: "direct", label: "Directa" }] }), /* @__PURE__ */ React.createElement(DurationInput, { label: "Ventana de drenaje", value: win.value, unit: win.unit, onChange: setWin, width: "100%" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "var(--ap-space-6)", marginTop: "var(--ap-space-4)", paddingTop: "var(--ap-space-4)", borderTop: "1px solid var(--ap-border)" } }, /* @__PURE__ */ React.createElement(Switch, { checked: auto, onChange: () => setAuto(!auto), label: "Reversion automatica" }), /* @__PURE__ */ React.createElement(Switch, { checked: strict, onChange: () => setStrict(!strict), label: "Bloquear fuera de ventana" }))), /* @__PURE__ */ React.createElement(Panel, { title: "Cuotas del plan", padded: true }, /* @__PURE__ */ React.createElement(Columns, { even: true, count: 2 }, /* @__PURE__ */ React.createElement(Quota, { label: "Peticiones", used: 182, total: 200, unit: "M" }), /* @__PURE__ */ React.createElement(Quota, { label: "Nodos", used: 124, total: 200 }))), /* @__PURE__ */ React.createElement(Panel, { title: "Aprobaciones", padded: true }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "var(--ap-space-3)" } }, /* @__PURE__ */ React.createElement(Checkbox, { checked: true, label: "Exigir una aprobacion para SEV-1" }), /* @__PURE__ */ React.createElement(Checkbox, { label: "Exigir aprobacion en cierre de mes" }), /* @__PURE__ */ React.createElement(Checkbox, { checked: true, label: "Notificar a la guardia al iniciar" }))), /* @__PURE__ */ React.createElement(Panel, { title: "Importar servicios", padded: true }, /* @__PURE__ */ React.createElement(FileDrop, { accept: ".csv", hint: "CSV con referencia, region y version. Hasta 5 MB.", files: [{ name: "servicios-eu.csv", size: "48 kB" }], onRemove: () => {
  } }), /* @__PURE__ */ React.createElement(Divider, { label: "Motivo" }), /* @__PURE__ */ React.createElement(Textarea, { rows: 2, placeholder: "Queda registrado en la auditoria" })), /* @__PURE__ */ React.createElement(Panel, { title: "Credenciales", padded: true }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "128px 1fr", gap: "var(--ap-space-3)", alignItems: "center", padding: "var(--ap-space-1) 0", borderBottom: "1px solid var(--ap-border)" } }, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Clave activa"), /* @__PURE__ */ React.createElement(CopyValue, { value: "ak_live_4f81\xB7\xB7\xB79c2e" })), /* @__PURE__ */ React.createElement(KeyValue, { label: "Rotada", value: "2026-07-24 09:41" }), /* @__PURE__ */ React.createElement(KeyValue, { label: "Caduca", value: "2026-10-24" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "var(--ap-space-4)", display: "flex", gap: "var(--ap-space-2)", alignItems: "center" } }, /* @__PURE__ */ React.createElement(Button, { size: "sm" }, "Rotar clave"), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-small)", color: "var(--ap-text-muted)" } }, "Ultimo uso ", /* @__PURE__ */ React.createElement(DataValue, { value: "hace 2 min", size: "var(--ap-size-13)", tone: "muted" })))), /* @__PURE__ */ React.createElement(Panel, { title: "Auditoria de esta configuracion", padded: true }, /* @__PURE__ */ React.createElement(AuditTimeline, { entries: [
    { at: "2026-07-29 14:02", actor: "Marta Iglesias", title: "Umbral de reversion modificado", tag: "CONFIG", children: /* @__PURE__ */ React.createElement(ConfigDiff, { changes: [{ key: "error_max", from: "2,00%", to: "1,00%" }, { key: "drain_window", from: "3 min", to: "5 min" }] }) },
    { at: "2026-07-26 08:15", actor: "Ana Duarte", title: "Estrategia cambiada a canaria", tag: "CONFIG", children: /* @__PURE__ */ React.createElement(ConfigDiff, { changes: [{ key: "strategy", from: "directa", to: "canaria 5/25/100" }] }) },
    { at: "2026-07-24 09:41", actor: "Lucia Bernal", title: "Rotacion de credenciales", tag: "CLAVE", tone: "ok" }
  ] })))));
}
Object.assign(window, { SettingsView });

})();
(function(){
const { SideNav, DataValue, IconButton, Tooltip, AppShell, TopBar, Breadcrumb } = typeof window !== "undefined" && window.AP_UI || {};
function AdminShell() {
  const [view, setView] = React.useState("ovw");
  const groups = [
    { label: "Operacion", items: [{ value: "ovw", label: "Resumen", icon: "layout-dashboard" }, { value: "svc", label: "Servicios", icon: "server", count: 10 }, { value: "dep", label: "Despliegues", icon: "git-commit-horizontal", count: 5 }, { value: "inc", label: "Incidencias", icon: "activity", count: 1 }] },
    { label: "Cuenta", items: [{ value: "set", label: "Ajustes", icon: "sliders-horizontal" }, { value: "usr", label: "Usuarios", icon: "users" }] }
  ];
  const Views = { ovw: OverviewView, svc: ServicesView, dep: DeploymentsView, inc: IncidentsView, set: SettingsView, usr: SettingsView };
  const View = Views[view] || ServicesView;
  const titles = { ovw: "Resumen", svc: "Servicios", dep: "Despliegues", inc: "Incidencias", set: "Ajustes", usr: "Usuarios" };
  return /* @__PURE__ */ React.createElement(
    AppShell,
    {
      topbar: /* @__PURE__ */ React.createElement(
        TopBar,
        {
          brand: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-weight-bold) var(--ap-size-16)/1 var(--ap-font-display)", letterSpacing: "-0.02em" } }, "Aplomo"), /* @__PURE__ */ React.createElement("span", { style: { font: "var(--ap-text-micro)", fontVariationSettings: "var(--ap-vf-data)", color: "var(--ap-text-muted)" } }, "4.18.2")),
          center: /* @__PURE__ */ React.createElement(Breadcrumb, { items: ["Operacion", titles[view] || "Servicios"] }),
          right: /* @__PURE__ */ React.createElement(Tooltip, { label: "Avisos" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "bell", label: "Avisos" })),
          user: { name: "Marta Iglesias", meta: "guardia \xB7 eu-central-1" }
        }
      ),
      nav: /* @__PURE__ */ React.createElement(
        SideNav,
        {
          value: view,
          onChange: setView,
          groups,
          footer: /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(DataValue, { value: "12 regiones \xB7 248 servicios", size: "var(--ap-size-11)", tone: "muted" }), /* @__PURE__ */ React.createElement(Tooltip, { label: "Cerrar sesion" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "log-out", label: "Cerrar sesion", size: "sm" })))
        }
      )
    },
    /* @__PURE__ */ React.createElement(View, { key: view, onGo: setView })
  );
}
Object.assign(window, { AdminShell });

})();
(function(){
const NEEDED = ["OverviewView", "ServicesView", "DeploymentsView", "IncidentsView", "SettingsView", "AdminShell"];
const ready = () => NEEDED.every((k) => typeof window[k] === "function");
const mount = () => {
  if (!ready()) return setTimeout(mount, 50);
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(AdminShell, null));
};
mount();

})();