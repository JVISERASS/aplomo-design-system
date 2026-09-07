# Aplomo

Sistema de diseño para software de producto de empresa: paneles de administración, consolas de operación, vistas de listado + detalle. 78 componentes, tokens de diseño y cuatro kits de interfaz completos, **en React y en Angular**, publicados como paquetes npm instalables.

| Paquete | Qué es |
| --- | --- |
| `@jviserass/aplomo` | los 78 componentes en React (>=18) |
| `@jviserass/aplomo-angular` | los 78 componentes en Angular (>=20), con signals y `ControlValueAccessor` |
| `@jviserass/aplomo-tokens` | solo los tokens CSS `--ap-*`. Único origen, compartido por los dos |

La premisa de diseño es la contención: casi todo es deliberadamente sobrio y la personalidad se concentra en dos sitios — la tipografía y la coreografía del movimiento. El color apenas interviene. La referencia es la señalética de infraestructura (aeropuertos, control de tráfico): jerarquía inmediata, legible de un vistazo, alta confianza, sin adornos.

## Instalación

```bash
npm install @jviserass/aplomo              # React
npm install @jviserass/aplomo-angular @jviserass/aplomo-tokens   # Angular
```

`react` y `react-dom` son `peerDependencies` (`>=18`); en Angular lo son `@angular/core`,
`@angular/common` y `@angular/forms` (`>=20`).

### Desde GitHub, sin npm

Cada tag publica una [Release](https://github.com/JVISERASS/aplomo-design-system/releases) con
los tres paquetes empaquetados. Son **los mismos tarballs que van a npm**, no una construcción
aparte, así que no hay dos caminos que puedan divergir:

```bash
npm i https://github.com/JVISERASS/aplomo-design-system/releases/download/v0.1.0/jviserass-aplomo-angular-0.1.0.tgz \
      https://github.com/JVISERASS/aplomo-design-system/releases/download/v0.1.0/jviserass-aplomo-tokens-0.1.0.tgz
```

No hace falta autenticación ni configurar ningún registro.

> `npm install github:JVISERASS/aplomo-design-system` **no** funciona, y es a propósito: la raíz
> del repositorio es el monorepo, no un paquete, y lo instalable es la salida de ng-packagr, que
> no se versiona en git.

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
- **Iconos:** los trazos son de [Lucide](https://lucide.dev) (ISC) y van **incrustados en el paquete**: no hay petición de red ni script que incluir. Ver «Iconos» más abajo.

El paquete expone ESM y CJS (`import` y `require`) con tipos TypeScript incluidos.

## Uso en Angular

```bash
npm install @jviserass/aplomo-angular @jviserass/aplomo-tokens
```

```css
/* styles.css de la aplicación */
@import "@jviserass/aplomo-tokens/styles.css";
```

```ts
import { ApButton, ApInput, ApBadge } from "@jviserass/aplomo-angular";

@Component({
  imports: [ApButton, ApInput, ApBadge],
  template: `
    <ap-input label="Referencia" [(value)]="ref" />
    <button apButton variant="primary">Acción principal</button>
  `,
})
```

Componentes standalone con signals (`input()`, `output()`, `model()`) y `OnPush`. Los 12
controles de formulario con valor implementan `ControlValueAccessor`, así que funcionan con
`[(ngModel)]`, `formControlName` y la validación de Angular.

La API es la misma que en React salvo en cuatro puntos, todos deliberados:

1. **`Button` e `IconButton` usan selector de atributo** (`<button apButton>`) en vez de envolver
   un botón. Así `type`, `disabled`, `form`, `aria-*` y `(click)` son los nativos.
2. **Los callbacks son outputs sin el prefijo `on`**, y emiten el dato en vez del evento:
   `onClose` → `(close)`, `onSelect` → `(select)`. Los pares valor + `onChange` son `model()`,
   o sea two-way: `[(value)]`.
3. **Lo que React renderizaba solo al recibir un callback necesita un booleano explícito**, porque
   en Angular un `output()` existe siempre y, sin él, quedaría un control enfocable que no hace
   nada: `showRemove` en `Chip` y `FileDrop`, `showAttach` en `Composer`, `showRetry` en
   `ErrorState`, `showResume` en `FrozenState`, y `selectable` en `List`.
4. **Las props que chocan con un atributo global de HTML se neutralizan en el DOM** conservando su
   nombre: `title` (nueve componentes) pintaría el tooltip nativo del navegador sobre todo el
   componente, y `role` en `Message` declararía un rol ARIA inválido.

5. **Hay un componente que solo existe en Angular**: `ap-markdown`, en un entry point aparte.
   Ver «Markdown» más abajo.

Los iconos funcionan igual que en React y tampoco necesitan red: ver «Iconos» más abajo.

## Markdown

Para pintar Markdown —típicamente la respuesta de un asistente dentro de `ap-message`— hay un
entry point aparte: **`@jviserass/aplomo-angular/markdown`**. Va separado del barril principal a
propósito, porque impone dos dependencias que el resto del paquete no necesita:

```bash
npm install ngx-markdown marked
```

`ngx-markdown` y `marked` son `peerDependencies` **opcionales**: quien no importe el subpath no
las instala ni las paga. Elige el major de `ngx-markdown` que corresponda a tu Angular (20→`20.x`,
21→`21.x`, 22→`22.x`).

```ts
// main.ts — una sola vez, en la raíz
import { provideApMarkdown } from "@jviserass/aplomo-angular/markdown";

bootstrapApplication(App, {
  providers: [...appConfig.providers, ...provideApMarkdown()],
});
```

```html
<ap-message at="09:14">
  <ap-markdown [data]="respuesta()" [streaming]="cargando()" />
</ap-message>
```

**El contenido no tiene por qué ser de fiar**, y el componente parte de esa base. El saneado va en
dos capas: `provideApMarkdown()` registra un renderer que **descarta el HTML crudo** y degrada a
texto los enlaces e imágenes con esquema ejecutable (solo pasan `http:`, `https:`, `mailto:` y
`data:image/` de mapa de bits), y detrás sigue activo el saneador de Angular en
`SecurityContext.HTML`. Hay trece tests que lo verifican, cinco de ellos vectores de XSS.

Dos cosas que conviene saber:

- **`provideApMarkdown()` registra el renderer en la instancia global de `marked`.** Si tu
  aplicación usa `marked` por su cuenta, también verá el HTML crudo descartado.
- **`[streaming]="true"` acota el reparseo a 80 ms.** Sin él, cada fragmento que llega del modelo
  reparsea y reescribe el documento entero, y se pierde la selección de texto del usuario.

Los bloques de código van **sin resaltar**, a propósito: Recursive es variable y tiene eje `MONO`,
así que el código es la misma familia tipográfica con `MONO 1` en vez de una monoespaciada ajena.
No hay plugins de Prism, KaTeX, Mermaid ni emoji; el porqué de cada uno está en
`docs/superpowers/specs/2026-09-04-ap-markdown-design.md`.

Coste medido en un bundle de producción: **+25,0 kB comprimidos** sobre la app de humo.

## Iconos

Los trazos son de [Lucide](https://lucide.dev) (ISC) y van **incrustados en los paquetes**: no hay
petición de red, ni script de CDN que incluir, ni dependencia en tiempo de ejecución. Una página
hecha con Aplomo funciona sin salida a internet.

Se incrustan **solo los que el sistema usa** (unos 50, ~8 KB). El paquete `lucide` completo son
2.021 iconos y 21 MB, y como `name` es dinámico ningún bundler puede podarlo: quien usara un botón
se llevaría el set entero. Para cualquier otro icono, impórtalo tú —así tu bundler solo se lleva
los que nombras— y regístralo al arrancar:

```ts
import { Rocket, Wrench } from "lucide";
import { registerApIcons } from "@jviserass/aplomo-angular"; // o "@jviserass/aplomo"

registerApIcons({ rocket: Rocket, wrench: Wrench });
```

Un nombre no registrado deja un hueco vacío del tamaño pedido, en vez de descuadrar el layout.
`apIconNames()` devuelve los disponibles, para diagnosticar.

El set se regenera con `npm run gen:icons`, que **falla si un nombre no existe en Lucide**: es
como se descubrió que `users-square`, `cut` y `paste` llevaban tiempo pintando huecos vacíos,
porque Lucide los había renombrado.

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

Catálogo navegable con las 78 stories en
**[jviserass.github.io/aplomo-design-system](https://jviserass.github.io/aplomo-design-system/)** —
la raíz es el de [React](https://jviserass.github.io/aplomo-design-system/) y el de Angular está
en [`/angular/`](https://jviserass.github.io/aplomo-design-system/angular/). En local,
`npm run storybook`.

Ahí mismo, [Extender Aplomo](https://jviserass.github.io/aplomo-design-system/extender/): dónde
están los bordes del sistema — qué componentes proyectan contenido, cuáles obligan a reconstruir
la pieza en tu aplicación, y cómo hacerlo con tokens sin perder fidelidad.

## Kits de interfaz

Cuatro superficies completas construidas sobre los componentes base, en `ui_kits/`:

- **`admin/`** — panel de administración: portada de operación, listado + detalle de servicios, despliegues, incidencias y ajustes.
- **`access/`** — acceso y errores: login, segundo factor, sesión abierta y páginas 404 / 403 / 500 / 503.
- **`assistant/`** — conversación con traza auditable, citas navegables y panel de contexto.
- **`account/`** — perfil de usuario, preferencias, seguridad y avisos.

## Estructura del proyecto

Monorepo de npm workspaces. Node 24 (fijado en `.nvmrc`).

```
packages/tokens/     variables CSS --ap-*: color, tipografía, espacio, forma, elevación, movimiento
packages/react/      los 78 componentes React (.jsx + .d.ts), sus tests, stories y ui_kits
packages/angular/    los 78 componentes Angular (src/lib/<categoría>/<componente>/)
apps/demo-react/     app Vite mínima que consume el paquete
guidelines/          tarjetas HTML de fundamentos de marca, agnósticas de framework
scripts/             parity-check y los workflows de conversión
```

Los dos barriles de exports (`packages/react/src/index.ts` y
`packages/angular/src/public-api.ts`) son generados: no se editan a mano.

## Desarrollo

```bash
npm install
npm run build          # los tres paquetes, en orden (tokens primero)
npm test               # los tests de todos los workspaces
npm run typecheck
npm run parity         # comprueba que el port Angular no pierde estilos

npm run storybook:react     # catálogo React,  puerto 6006
npm run storybook:angular   # catálogo Angular, puerto 6007
```

CI (`.github/workflows/ci.yml`) ejecuta build, typecheck, tests y `parity` en cada push y pull
request a `main`.

**`npm run parity`** compara, componente a componente, las propiedades CSS y las referencias
`--ap-*` de los objetos de estilo de cada `.jsx` con las del `.css` de su equivalente Angular, y
falla si alguna se ha perdido. Existe porque el modo de fallo característico de mantener dos
implementaciones no es que no compilen, sino que una declaración se caiga y el componente se vea
distinto.

## Publicación

```bash
npm version <patch|minor|major>
git push --tags
```

El tag `v*` dispara `release.yml`: build, typecheck, tests y `npm publish` de los tres paquetes,
con los tokens primero. El paquete Angular se publica desde la salida de ng-packagr
(`packages/angular/dist`), no desde el fuente.

## Licencia

MIT © JVISERASS
