# UI kit — Asistente

Conversación con el entorno de operación. Reglas del sistema aplicadas:

- La respuesta del asistente va **a sangre sobre blanco**; el turno de la persona, en tarjeta gris. Sin burbujas con cola, sin colores por rol, sin emoji.
- **Todo dato citado va en `DataValue`**: cifras, versiones y fechas cuajan en MONO 1 al llegar. Así se distingue de un vistazo lo que el asistente afirma de lo que mide.
- **`AssistantTrace` es obligatorio**: qué consultó y cuánto tardó, plegable. Sin esto el asistente no es auditable. Sustituye a cualquier animación de "pensando".
- **`Citation`** para cada fuente, navegable al recurso real.
- El panel derecho muestra el contexto de la respuesta (servicio, serie, versión) para poder comprobarla sin salir.
- Límite explícito escrito en la interfaz: el asistente lee, no ejecuta.
