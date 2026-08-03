import { Button, Badge, Input, DataValue } from "@jviserass/aplomo";

export function App() {
  return (
    <div style={{ padding: 48, maxWidth: 720, margin: "0 auto" }}>
      <h1 className="ap-display">Aplomo — demo</h1>
      <p className="ap-longform">
        Esta app consume el paquete{" "}
        <DataValue value="@jviserass/aplomo" /> ya construido desde <code>dist/</code>.
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 24,
        }}
      >
        <Button variant="primary">Acción principal</Button>
        <Button variant="secondary">Secundaria</Button>
        <Button variant="ghost">Ghost</Button>
        <Badge tone="ok">activo</Badge>
        <Badge tone="warn">pendiente</Badge>
        <Badge tone="error">caído</Badge>
      </div>

      <div style={{ marginTop: 24, maxWidth: 320 }}>
        <Input label="Nombre" hint="Tu nombre completo" placeholder="Ada Lovelace" />
      </div>
    </div>
  );
}
