Transicion de elemento compartido para identificadores.

```jsx
// en la fila
onSelectRow={row => { SharedValue.capture(row.id, refs.current[row.id]); setSel(row.id); }}
// en la cabecera del detalle
<SharedValue sharedKey={sel} style={{fontSize:"var(--ap-size-23)",fontWeight:700}}>{row.ref}</SharedValue>
```

Solo para el identificador, nunca para bloques enteros.
