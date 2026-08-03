Aparece al marcar filas; va dentro del contenedor con scroll del listado.

```jsx
<BulkActionBar count={checked.length} onClear={()=>setChecked([])}
  actions={[{label:"Drenar"},{label:"Retirar",tone:"danger",onClick:confirm}]} />
```
