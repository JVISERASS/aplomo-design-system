# Aplomo

Sistema de diseño en React para software de producto de empresa: paneles de administración, consolas de operación, vistas de listado + detalle. 78 componentes, tokens de diseño y cuatro kits de interfaz completos, publicados como paquete npm instalable.

La premisa de diseño es la contención: casi todo es deliberadamente sobrio y la personalidad se concentra en dos sitios — la tipografía y la coreografía del movimiento. El color apenas interviene. La referencia es la señalética de infraestructura (aeropuertos, control de tráfico): jerarquía inmediata, legible de un vistazo, alta confianza, sin adornos.

## Instalación

```bash
npm install @jviserass/aplomo
```

`react` y `react-dom` son `peerDependencies` (`>=18`); instálalos si tu proyecto no los tiene ya.

## Uso

Importa los estilos globales una vez, en la raíz de la app, y luego los componentes que necesites:

```tsx
import "@jviserass/aplomo/styles.css"; // tokens + fuentes + resets
import { Button, Badge, Input } from "@jviserass/aplomo";

export function App() {
  return <Button variant="primary">Acción principal</Button>;
}
```

- **`@jviserass/aplomo/styles.css`** — hoja completa: fuentes (Google Fonts), variables y resets base.
- **`@jviserass/aplomo/tokens.css`** — solo las variables `--ap-*`, sin resets globales, para integrarlo sobre un reset propio.
- **Iconos:** `Icon` usa el set [Lucide](https://lucide.dev) cargado por CDN. Inclúyelo en el HTML para que se pinten:

  ```html
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
  ```

  Sin él, `Icon` degrada a un hueco vacío en vez de romper.

El paquete expone ESM y CJS (`import` y `require`) con tipos TypeScript incluidos.

## Principios de diseño

**Color.** Neutros grafito cálidos (hue 30, saturación 2–4%) en vez del gris azulado por defecto de la mayoría de sistemas, de `#FFFFFF` a `#141311` en doce pasos. Un único acento, cobalto `#1F3CE8`, limitado a dos apariciones por pantalla: la acción principal y el elemento seleccionado. Todo lo demás —pestañas activas, navegación, interruptores, enlaces— se resuelve en grafito. Estados (correcto `#1B6B4C`, atención `#8A6314`, error `#A32E22`) siempre en tinte pálido de fondo con el color en texto e icono, nunca en relleno saturado.

**Tipografía.** Dos familias con reparto estricto: **Stack Sans Notch** solo en titulares ≥23px; todo lo demás, incluido cualquier dato, en **Recursive variable**. El eje `MONO` es el motor semántico — `MONO 0` para prosa y etiquetas, `MONO 1` para cualquier cifra, fecha, identificador o estado en clave, siempre con `tabular-nums`. Un lector distingue "contenido" de "dato" por la forma de la letra, sin necesidad de leer. Escala: `11 · 12 · 13 · 14 · 16 · 19 · 23 · 29 · 37 · 48`.

**Forma y espacio.** Rejilla de 4px. Radius de 5px en controles, 8px en paneles, 3px en chips. El borde de 1px es el separador principal — hace el trabajo que en otros sistemas hace la sombra; una tarjeta es fondo blanco + borde + radius, sin más. Elevación reducida a dos niveles, reservada a capas flotantes (menús, diálogos, paneles).

**Movimiento.** Una única curva (`cubic-bezier(0.2, 0, 0, 1)`) y tres duraciones: 150ms para microinteracciones, 250ms para cambios de estado, 400ms para transiciones de capa. Tres elementos firma del sistema:

1. **Cuajado del eje MONO** — al cargar o actualizarse, una cifra pasa de `MONO 0` a `MONO 1` en 250ms mientras aparece: el dato se cuaja en dato.
2. **Entrada coreografiada** — la estructura de la vista aparece instantánea; solo el contenido entra en cascada (60ms de desfase, máximo 8 elementos escalonados).
3. **Elemento compartido** — al abrir el detalle de una fila, su identificador viaja de la celda a la cabecera del panel, escalando de 14px a 23px en 400ms.

Se respeta `prefers-reduced-motion` en los tres casos.

**Lo que este sistema evita deliberadamente:** el aspecto Linear/Vercel (fondo casi negro, degradados, glow), azul genérico + shadcn por defecto, glassmorphism, ilustraciones decorativas, más de dos usos del acento por pantalla, animación sin propósito.

## Catálogo de componentes

78 componentes en ocho categorías:

| Categoría | Componentes destacados | Nº |
| --- | --- | --- |
| `core` | Button, IconButton, Icon, Badge, Chip, Avatar | 9 |
| `forms` | Input, Select, UnitInput, DurationInput, OtpInput, FormSection | 14 |
| `data` | DataValue, DataTable, MetricTile, AsciiDiagram, AuditTimeline, LogStream | 16 |
| `layout` | AppShell, Panel, PageHeader, DetailPanel, Split, Stack | 12 |
| `navigation` | SideNav, Tabs, Breadcrumb, CommandPalette | 4 |
| `charts` | Sparkline, BarSeries, ShareBar | 3 |
| `assistant` | Message, Composer, AssistantTrace, Citation | 4 |
| `feedback` | Dialog, Menu, Toast, EmptyState, ErrorState, ProgressBar | 14 |
| `motion` | Stagger, SharedValue | 2 |

Catálogo navegable completo en Storybook (`npm run storybook`), con las 78 stories.

## Kits de interfaz

Cuatro superficies completas construidas sobre los componentes base, en `ui_kits/`:

- **`admin/`** — panel de administración: portada de operación, listado + detalle de servicios, despliegues, incidencias y ajustes.
- **`access/`** — acceso y errores: login, segundo factor, sesión abierta y páginas 404 / 403 / 500 / 503.
- **`assistant/`** — conversación con traza auditable, citas navegables y panel de contexto.
- **`account/`** — perfil de usuario, preferencias, seguridad y avisos.

## Estructura del proyecto

```
components/     78 componentes (.jsx + .d.ts), organizados por categoría
tokens/         variables CSS: color, tipografía, espacio, forma, elevación, movimiento
guidelines/     tarjetas HTML de fundamentos de marca
ui_kits/        cuatro kits de interfaz completos (cada uno con index.html navegable)
src/index.ts    barrel de exports (generado, ver scripts/gen-barrel.mjs)
scripts/        build de CSS y generación del barrel
test/           smoke tests de render (Vitest + Testing Library)
examples/demo/  app Vite mínima que consume el paquete publicado
```

## Desarrollo

```bash
npm install
npm run build        # tsup (ESM+CJS+d.ts) + CSS aplanado a dist/
npm test              # vitest — smoke tests de render
npm run typecheck     # tsc --noEmit
npm run storybook     # catálogo navegable de los 78 componentes
```

CI (`.github/workflows/ci.yml`) ejecuta build, typecheck y tests en cada push y pull request a `main`.

## Publicación

```bash
npm version <patch|minor|major>
git push --tags
```

El tag `v*` dispara `release.yml`: build, test y `npm publish` contra el registro de npm.

## Licencia

MIT © JVISERASS
