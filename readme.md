# Aplomo — Design System

Sistema de diseño para **software de producto de empresa grande**: paneles de administración, consolas de operación, vistas de listado + detalle. La credibilidad viene de la contención. Casi todo es deliberadamente sobrio y toda la personalidad se concentra en dos sitios: **la tipografía** y **la coreografía del movimiento**. El color casi no habla.

Referencia mental: señalética de infraestructura — aeropuertos, control de tráfico. Jerarquía inmediata, legible de un vistazo, sin adornos, alta confianza. Debe parecer inevitable, no "diseñado".

## Instalación y uso como paquete

Publicado como **`@jviserass/aplomo`** (React ≥18).

```bash
npm install @jviserass/aplomo
# react y react-dom son peerDependencies (>=18); instálalos si no los tienes
```

Importa los estilos globales **una vez** (raíz de tu app) y luego los componentes:

```tsx
import "@jviserass/aplomo/styles.css";        // tokens + fuentes + resets
import { Button, Badge, Input } from "@jviserass/aplomo";

export function App() {
  return <Button variant="primary">Acción principal</Button>;
}
```

- **`@jviserass/aplomo/styles.css`** — todo: fuentes (Google Fonts), variables y resets base.
- **`@jviserass/aplomo/tokens.css`** — solo las variables `--ap-*`, sin resets globales (si ya tienes tu propio reset).
- **Iconos:** el componente `Icon` usa el set **Lucide cargado por CDN** (sustitución declarada). Para que se pinten, incluye en tu HTML:
  `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>`. Sin él, `Icon` degrada a un hueco vacío (no rompe).
- ESM y CJS: el paquete expone ambos (`import` y `require`) con tipos TypeScript incluidos.

### Desarrollo del propio paquete

```bash
npm install
npm run build        # tsup (ESM+CJS+d.ts) + CSS aplanado a dist/
npm test             # vitest (smoke tests de render)
npm run typecheck    # tsc --noEmit
npm run storybook    # catálogo navegable de los 78 componentes
```

### Publicar una versión

`npm version <patch|minor|major>` → `git push --tags`. El tag `v*` dispara la Action `release.yml`,
que hace build + test y `npm publish` con el secret **`NPM_TOKEN`** del repositorio.

## Fuentes de este sistema

- **Brief de dirección de arte** proporcionado por el usuario en el chat (agosto de 2026): tokens, tipografía, forma, movimiento y los tres elementos firma. Es la única fuente: **no se entregó código, Figma, logotipo ni binarios de fuente**.
- **Nombre de marca:** no se entregó ninguno. "Aplomo" es un nombre de trabajo elegido para poder nombrar el sistema y coincide con el prefijo de tokens `--ap-` del brief. Sustitúyelo cuando exista marca real.
- **Tipografía:** Recursive variable (UI y datos) + **Stack Sans Notch** (titulares, a peticion del usuario), ambas desde Google Fonts (`tokens/fonts.css`). No hay binarios en el proyecto.
- **Iconografía:** Lucide desde CDN (sustitución declarada, ver abajo).
- **Diagramas ASCII:** `--ap-font-ascii` apunta a la monoespaciada del sistema (`ui-monospace`, `SF Mono`, `Menlo`, `Consolas`, `monospace`). No se envía ningún binario: se usa la monoespaciada del sistema. Si quieres una monoespaciada de marca, súbela y escribo su `@font-face`.

## Anti-brief — si el resultado se parece a esto, está mal

- El aspecto Linear/Vercel: fondo casi negro, Inter, degradado sutil de marca, glow en bordes, tarjeta con borde iluminado.
- Azul #3B82F6 + radius 8px + sombra suave (shadcn sin decisiones).
- Glassmorphism, orbes, mallas de puntos, ilustraciones isométricas.
- Animación decorativa: nada se mueve "porque queda bien".
- Emoji, iconos de colores, ilustraciones de vacío tipo mascota.
- Más de dos elementos en acento por pantalla.

---

# CONTENT FUNDAMENTALS

**Idioma y persona.** Español de España, neutro y operativo. Se habla del sistema en tercera persona ("el tráfico se drenará", "la operación no es reversible"), no en primera ("hemos guardado tus cambios") ni con tono de acompañante. Al usuario se le tutea sólo cuando hay que darle una instrucción directa ("Quita la región o amplía el intervalo"). Nunca "¡Vaya!", nunca "Ups", nunca disculpas.

**Casing.** Sentence case en todo: títulos, botones, etiquetas de campo. Nunca Title Case. Las versalitas (uppercase + tracking 0.04em) están reservadas a dos cosas: etiquetas de sección/columna y estados en clave (`ACTIVO`, `SEV-1`, `REVERTIDO`).

**Concisión.** Etiquetas de 1–3 palabras ("Referencia", "Último despliegue", "Ventana de drenaje"). Los botones nombran la acción y su objeto: "Nuevo servicio", "Desplegar 4.18.2", "Rotar clave" — nunca "Enviar", "OK", "Continuar".

**Los datos se nombran, no se adornan.** `p95`, `SLA`, `MTTR`, `SEV-1`, `eu-central-1` se escriben tal cual: el lector de este producto conoce su vocabulario. No se traducen ni se explican con paréntesis salvo que el dato tenga un objetivo asociado ("objetivo 99,900%").

**Formato numérico español.** Coma decimal y punto de millar: `99,982%`, `128.402`. Fechas ISO con hora de 24 h: `2026-07-29 14:02`. Duraciones explícitas: `4 min 12 s`, `31 h 20 min`. Todo esto va en MONO 1.

**Mensajes de estado.** Describen el hecho y su consecuencia, en ese orden, sin dramatismo:
- "Latencia p95 por encima del objetivo — dos nodos de eu-central-1 llevan 14 min degradados."
- "DPL-11481 revertido automáticamente — el umbral de error del 1% se superó a los 6 min 02 s."
- "El tráfico se drenará durante 5 minutos antes de retirar el servicio. La operación no es reversible."

**Estados vacíos.** Diagnóstico + salida, sin ilustración: "Ningún servicio coincide con estos filtros / Quita la región o amplía el intervalo."

**Emoji:** nunca. **Signos de exclamación:** nunca. **Mayúsculas para enfatizar:** nunca.

---

# VISUAL FOUNDATIONS

## Color
Neutros **grafito cálidos** (hue 30, saturación 2–4%) para que el sistema no se lea como el gris azulado por defecto de Tailwind: 12 pasos de `#FFFFFF` a `#141311`. Fondo de aplicación `--ap-gray-25` (#FAF9F8), superficies blancas, hundidos `--ap-gray-50`.

**Acento único:** cobalto `#1F3CE8` (hover `#1730C4`, tinte `#ECEEFD`). **Regla dura: máximo DOS apariciones por pantalla** — la acción principal y el elemento seleccionado. Todo lo demás es grafito: las pestañas activas, el item activo de la navegación, el interruptor encendido, los indicadores y **los enlaces** (grafito con subrayado de 1px; el acento entra sólo en `:hover`). La única excepción admitida es el anillo de foco, porque aparece por interacción y no por decoración. Un panel con seis cosas azules no tiene jerarquía, tiene ruido.

**Estados apagados a propósito:** correcto `#1B6B4C`, atención `#8A6314`, error `#A32E22`. Siempre tinte pálido de fondo + el color en el texto y el icono; nunca relleno saturado, con una única excepción: el botón destructivo de un diálogo de confirmación.

## Tipografía
**Dos familias, con un reparto estricto.** **Stack Sans Notch** (Google Fonts) sólo en titulares de 23px o más — display, `PageHeader`, wordmark. Todo lo demás, incluido cualquier dato, es **Recursive variable**.

**Recursive variable** es el motor semántico del sistema: `CASL 0` siempre (nada informal). `slnt 0` salvo microinteracciones. El eje que hace el trabajo semántico es **MONO**:
- **MONO 0** → prosa, etiquetas, títulos, botones.
- **MONO 1** → *todo* dato: cifras, importes, fechas, identificadores, referencias, porcentajes, estados en clave, rutas, versiones. Siempre con `tabular-nums`.

Un lector debe distinguir "contenido" de "dato" sin leer, sólo por la forma de la letra. Es la idea central del sistema. En código: el componente `DataValue` (o la clase `.ap-data`) es la única forma correcta de pintar un dato.

Pesos: 400 cuerpo, 500 énfasis y etiquetas, 700 títulos. Display (Stack Sans Notch): 700, tracking −0.025em, line-height 1.1, sentence case. UI: 14px / 1.55. Prosa larga: 15px / 1.65, máx 68ch. Escala: 11 · 12 · 13 · 14 · 16 · 19 · 23 · 29 · 37 · 48.

## Forma, borde y elevación
Radius **5px** en controles, **8px** en paneles y tarjetas, **3px** en chips. Rejilla de 4px. Alto de control 32px (24 y 40 para sm/lg), fila de tabla 40px, cabecera 48px, navegación lateral 232px, panel de detalle 420px.

**El borde de 1px es el separador principal**: hace el trabajo que en otros sistemas hace la sombra. Una tarjeta es fondo blanco + borde `--ap-gray-100` + radius 8px, y nada más — sin sombra, sin borde de acento a la izquierda, sin gradiente.

**Elevación: dos niveles y sólo para capas flotantes** (menú, panel lateral, diálogo): `0 1px 2px rgb(20 19 17 / .05)` y `0 12px 32px rgb(20 19 17 / .12)`. Nada en el flujo normal lleva sombra. El velo del diálogo es grafito 900 al 32%: sin blur, sin transparencias glass en ningún sitio.

## Fondos e imagen
Fondos planos. No hay degradados, ni texturas, ni patrones, ni ilustraciones, ni imágenes a sangre, ni grano. La única "ilustración" admitida es el **diagrama ASCII** (`AsciiDiagram`, `AsciiMeter`): topologías, flujos y medidores escritos en caracteres de caja y bloque, en MONO 1 y grafito — el sistema no dibuja, escribe. En superficies de marca (terminal, documentación, portadas) se admiten además dos motivos de ASCII art: el wordmark en bloques y la **plomada** — el significado del nombre — recogidos en la tarjeta *Brand · ASCII art de marca*. Si algún día entra fotografía, será documental y desaturada, nunca decorativa. Los gráficos de datos son barras y líneas en grafito 500 sobre pista grafito 100 — el color entra sólo si codifica un estado.

## Gráficos
SVG y caracteres, nunca una librería con paleta propia. `Sparkline` (serie sin ejes, para celdas y junto a una cifra), `BarSeries` (serie temporal con eje de 1px, umbral en discontinua y la última barra en grafito 700 porque es "ahora") y `ShareBar` (reparto de un total en una escala de grafitos). El color entra sólo cuando codifica un estado; nunca hay leyendas de colores ni degradados de relleno. Un gráfico nunca va solo: acompaña a una cifra en `DataValue`.

## Asistente
La conversación sigue las reglas del sistema, no las del chat de consumo: la respuesta va **a sangre sobre blanco** (es contenido) y el turno de la persona en tarjeta gris; sin burbujas con cola, sin colores por rol, sin emoji. Todo dato citado se pinta con `DataValue`, así que se distingue lo que el asistente afirma de lo que mide. `AssistantTrace` es obligatorio — qué consultó y cuánto tardó — y sustituye a cualquier animación de "pensando": el movimiento explica el trabajo, no lo decora. Cada fuente va en `Citation`, navegable al recurso real. Los límites del asistente se escriben en la interfaz ("solo lectura: no ejecuta acciones").

## Formularios largos
`FormSection` reparte explicación a la izquierda y campos a la derecha, separados por borde de 1px y sin tarjetas anidadas; la ayuda vive junto al campo, nunca en un tooltip. `FormActions` entra desde abajo en 250 ms al primer cambio y dice cuántos campos están sin guardar. Cada entrada usa su campo específico: `UnitInput` para umbrales, `DurationInput` para ventanas, `OtpInput` para códigos, `Radio` para excluyentes, `Switch` para canales. Ningún dato se teclea con su unidad dentro.

## Errores y acceso
Cuatro páginas de error con copia propia (404, 403, 500, 503) sobre `CenteredPage`: el código es el dato más grande de la pantalla (48px, MONO 1; rojo sólo en 500), el texto dice qué ha pasado y qué hacer, y siempre hay una salida. El 500 expone un identificador copiable para adjuntar a la incidencia; el 503 muestra el fin previsto de la ventana. Nunca hay ilustración, mascota, disculpa ni humor. El acceso usa la misma página centrada: cuenta + contraseña, `OtpInput` de seis celdas para el segundo factor y caducidad de sesión siempre explícita.

## Espera y carga
Tres patrones, en este orden: `Skeleton` + el cuajado MONO para cargar datos; `ProgressBar` / `OperationLog` para operaciones con progreso conocido; `Spinner` sólo para esperas de menos de dos segundos dentro de una acción. `FrozenState` para datos que dejaron de refrescarse, `ErrorState` para el fallo con reintento. `Toast` queda reservado a confirmaciones reversibles ("Filtro guardado · Deshacer"): nunca para progreso ni para errores.

## Teclado
El listado es navegable sin ratón: la tabla toma foco, ↑↓ mueven un cursor marcado con barra grafito de 2px (distinto del azul de la selección), ↵ abre el detalle y dispara el viaje del identificador, Esc lo cierra. ⌘K abre la paleta de comandos. Los atajos se escriben siempre en MONO 1.

## Interacción
- **Hover:** cambio de fondo un paso (transparente → `--ap-gray-50`) y el texto sube de `--ap-text-secondary` a `--ap-text`. Nunca opacidad, nunca elevación al pasar.
- **Press / activo:** un paso más de fondo (`--ap-gray-100`). Sin escalado, sin hundimiento.
- **Foco:** anillo de 2px cobalto con separación de 2px en blanco (`--ap-focus-ring`), sólo en `:focus-visible`. Es la excepción admitida a la regla de dos usos del acento: aparece por interacción, no por decoración.
- **Seleccionado:** fondo `--ap-accent-tint` + barra interior de 2px cobalto a la izquierda de la fila.
- **Deshabilitado:** opacidad .4 y cursor not-allowed, sin cambio de color.

## Movimiento
**Curva única:** `cubic-bezier(0.2, 0, 0, 1)`. **Duraciones:** 150 ms microinteracción, 250 ms cambio de estado, 400 ms transición de capa. Nunca muelles, nunca rebotes, nunca animación decorativa. Cada movimiento explica de dónde viene algo o que algo ha cambiado. Se respeta `prefers-reduced-motion`.

### Elementos firma
1. **Transición del eje MONO.** Cuando un valor numérico cambia o termina de cargar, `font-variation-settings 'MONO'` va de 0 a 1 en 250 ms mientras el número aparece: el dato *se cuaja* en dato. Los esqueletos de carga están en MONO 0 atenuado y cuajan al llegar los datos. → `DataValue`.
2. **Entrada coreografiada, una sola vez.** Al cargar la vista, la estructura (shell, cabeceras, barras) aparece instantánea sin animación; sólo el contenido entra en cascada: opacidad 0→1 y translateY 8px→0, 60 ms de desfase entre hermanos, máximo 8 escalonados y el resto de golpe. Sutil: 8px, no 40px. → `Stagger`.
3. **Elemento compartido.** Al abrir una fila en el panel de detalle, el identificador de esa fila **viaja** desde la celda a la cabecera del panel en 400 ms, escalando de 14px a 23px. → `SharedValue` + `SharedValue.capture()`.

---

# ICONOGRAPHY

**No se entregó ningún set de iconos.** Sustitución declarada: **Lucide** (CDN `https://unpkg.com/lucide@latest/dist/umd/lucide.js`), por ser el trazo geométrico uniforme más cercano a la señalética de infraestructura. **Confírmame si el producto usa otro set y lo cambio.**

Reglas de uso:
- Trazo **1.5**, tamaño **16px** (14 en controles sm), `currentColor` siempre. Nunca iconos de dos tonos ni de color.
- El icono acompaña, no sustituye: en la navegación y los menús va junto a la etiqueta; solo va suelto en `IconButton`, y entonces exige `label`.
- Iconos usados en el kit: `server`, `git-commit-horizontal`, `activity`, `sliders-horizontal`, `users`, `key-round`, `search`, `filter`, `columns-3`, `refresh-cw`, `download`, `more-horizontal`, `chevron-down`, `check`, `minus`, `x`, `bell`, `history`, `copy`, `trash-2`, `log-out`, `info`, `alert-triangle`, `octagon-alert`, `check-circle-2`.
- **Emoji: nunca.** Caracteres unicode como icono: sólo el separador `/` del breadcrumb y `×` en textos de anti-patrón.
- **Sin logotipo.** No se entregó marca, así que la marca se compone en tipo (**Stack Sans Notch** 700, tracking −0.025em) — ver la tarjeta *Brand · Wordmark*. No se ha dibujado ningún símbolo.

---

# INDEX

**Raíz**
- `styles.css` — entrada global, sólo `@import`. Es el único archivo que enlazan los consumidores.
- `angular-port.bundle.md` — puerto a Angular 19 (librería `aplomo` con ng-packagr, Storybook, Karma) empaquetado en un solo archivo de texto, con la receta de porteo y el inventario de lo que falta. No puede vivir descomprimido aquí: el compilador de este proyecto no admite decoradores de Angular.
- `github.md` — repo de destino y estado de sincronización.
- `thumbnail.html` — mosaico del sistema.
- `readme.md`, `SKILL.md`.

**`tokens/`** — `fonts.css` (Recursive + ejes), `colors.css`, `typography.css`, `space.css`, `shape.css`, `elevation.css`, `motion.css`, `base.css` (resets, enlaces, `.ap-data`, `.ap-congeal`, `@keyframes ap-rise`).

**`guidelines/`** — 17 tarjetas de fundamentos: Colors (grafito, acento, estados), Type (eje MONO, display, escala, UI y prosa, etiquetas), Spacing (rejilla, densidad, radios, elevación), Motion (curva, cuajado, cascada), Brand (wordmark, anti-brief).

**Componentes** (`window.AplomoDesignSystem_c0efc3.<Name>`)
- `components/core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Chip**, **CopyValue**, **Divider**, **Spinner**, **Avatar**
- `components/forms/` — **Input**, **SearchField**, **Select**, **Checkbox**, **Switch**, **UnitInput**, **DurationInput**, **DateRange**, **Radio**, **SegmentedControl**, **Textarea**, **OtpInput**, **FormSection**, **FormActions**
- `components/data/` — **DataValue**, **MetricTile**, **KeyValue**, **DataTable**, **Skeleton**, **AsciiDiagram**, **AsciiMeter**, **BulkActionBar**, **ColumnManager**, **AuditTimeline**, **ConfigDiff**, **Pagination**, **List**, **Matrix**, **LogStream**, **Quota**
- `components/layout/` — **Panel**, **Toolbar**, **PageHeader**, **DetailPanel**, **AppShell**, **TopBar**, **CenteredPage**, **Split**, **Columns**, **Stack**, **Prose**, **SectionHeader**
- `components/navigation/` — **SideNav**, **Tabs**, **Breadcrumb**, **CommandPalette**
- `components/charts/` — **Sparkline**, **BarSeries**, **ShareBar**
- `components/assistant/` — **Message**, **Composer**, **AssistantTrace**, **Citation**
- `components/feedback/` — **Dialog**, **Menu**, **Tooltip**, **InlineAlert**, **EmptyState**, **OperationLog**, **ErrorState**, **Accordion**, **ProgressBar**, **Steps**, **FrozenState**, **FileDrop**, **Toast**, **PageError**
- `components/motion/` — **Stagger**, **SharedValue**

Cada componente lleva `.d.ts` (contrato de props) y `.prompt.md` (cuándo y cómo usarlo).

**Adiciones intencionadas** (no venían enumeradas en el brief; existen para hacer cumplibles sus reglas): `Icon` (envoltorio del set sustituto), `DataValue` / `SharedValue` / `Stagger` (los tres elementos firma), `SearchField` (atajo de `Input` en barras de herramientas).

**UI kit**
- `ui_kits/admin/` — panel de administración: portada de operación, listado + detalle de servicios, despliegues, incidencias, ajustes. Ver `ui_kits/admin/README.md`.
- `ui_kits/access/` — acceso y errores: login, segundo factor, sesión abierta y 404 / 403 / 500 / 503. Ver `ui_kits/access/README.md`.
- `ui_kits/assistant/` — asistente: conversación con traza auditable, citas navegables y panel de contexto. Ver `ui_kits/assistant/README.md`.
- `ui_kits/account/` — página de usuario: perfil, preferencias, seguridad y avisos. Ver `ui_kits/account/README.md`.
