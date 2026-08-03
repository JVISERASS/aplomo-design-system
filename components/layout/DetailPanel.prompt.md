Panel de detalle lateral, 420px, transicion de capa de 400ms.

```jsx
<DetailPanel open={!!sel} onClose={()=>setSel(null)} header={<SharedValue sharedKey={sel}>{row.ref}</SharedValue>} footer={<Button variant="primary" size="sm">Aplicar</Button>}>
  <KeyValue label="Region" value="eu-central-1" />
</DetailPanel>
```
