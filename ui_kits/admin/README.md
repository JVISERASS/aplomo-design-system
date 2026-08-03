# UI kit — Panel de administracion

Recreacion viva de la vista listado + detalle del brief. Cinco superficies en un shell.

| Archivo | Superficie |
| --- | --- |
| `AdminShell.jsx` | Shell: navegacion lateral 232px, marca en tipo, pie con la guardia |
| `ServicesView.jsx` | Listado + panel de detalle. Contiene los tres elementos firma |
| `DeploymentsView.jsx` | Historial de despliegues + distribucion por region |
| `IncidentsView.jsx` | Incidencias por severidad y tiempos de la semana |
| `SettingsView.jsx` | Formularios: umbrales, aprobaciones, credenciales |
| `data.js` | Datos simulados (`window.AP_DATA`) |

## Los tres elementos firma

1. **Cuajado del eje MONO.** Las cifras arrancan en MONO 0 atenuado y cuajan a MONO 1 en 250 ms al llegar. Pulsa "Recargar" en la barra de herramientas para repetirlo.
2. **Entrada coreografiada.** Al cambiar de vista el shell aparece instantaneo; solo el contenido entra con opacidad 0->1 y translateY 8px->0, 60 ms de desfase, maximo 8 elementos.
3. **Elemento compartido.** Al abrir una fila, su referencia viaja de la celda a la cabecera del detalle en 400 ms, escalando de 14px a 23px.

## Regla del acento

Por vista, el cobalto aparece dos veces: la accion principal de la cabecera y la fila seleccionada. Todo lo demas es grafito.
