Listado denso. Columnas de datos con `data: true`; `sortable: true` en las que se ordenan; `shared: true` en la del identificador que viaja al detalle.

```jsx
<DataTable selectable keyboard sort={sort} onSort={k=>toggle(k)}
  columns={[{key:"ref",label:"Referencia",width:"140px",data:true,shared:true},{key:"name",label:"Servicio",width:"minmax(160px,1fr)"},{key:"p95",label:"p95",width:"76px",align:"right",data:true,sortable:true}]}
  rows={rows} selectedId={sel} onSelectRow={(r,el)=>{SharedValue.capture(r.id,el);setSel(r.id);}} onEscape={()=>setSel(null)} />
```

Da foco a la tabla para navegar: ↑↓ mueve el cursor (barra grafito), ↵ abre el detalle, Esc lo cierra.
