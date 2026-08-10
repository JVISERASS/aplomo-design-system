Boton de accion. Alturas 24/32/40, radius 5px, peso 500, sin sombra nunca. Si la etiqueta contiene un dato (version, duracion, cifra), envuelvelo en `DataValue` para que salga en MONO 1.

```jsx
<Button variant="primary">Nuevo servicio</Button>
<Button>Desplegar <DataValue value="4.18.2" size="var(--ap-size-14)"/></Button>
<Button variant="ghost" size="sm">Ver historial</Button>
<Button variant="danger">Retirar</Button>
<Button variant="danger" solid>Retirar</Button>   {/* solo en el dialogo de confirmacion */}
```

Variantes: `primary` (cobalto relleno, una vez por pantalla), `secondary` (borde grafito, el default), `ghost` (barras de herramientas), `danger` (contorno rojo; `solid` solo al confirmar). Hover = un paso de fondo; press = un paso mas; sin escalado ni elevacion.
