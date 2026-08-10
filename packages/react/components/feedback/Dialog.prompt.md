Dialogo de confirmacion (capa flotante, 400ms, elevacion 2).

```jsx
<Dialog open={ask} title="Retirar SVC-4820-DE de produccion" description="El trafico se drenara en 5 minutos." onClose={cancel}
  footer={<><Button onClick={cancel}>Cancelar</Button><Button variant="danger" solid>Retirar</Button></>} />
```
