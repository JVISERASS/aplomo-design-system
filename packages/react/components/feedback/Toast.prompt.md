Confirmacion reversible.

```jsx
<Toast toasts={[{id:"1",message:"Filtro guardado",action:"Deshacer"}]} onDismiss={drop} onAction={undo}/>
```

No lo uses para progreso ni para errores: eso es `OperationLog` e `InlineAlert`.
