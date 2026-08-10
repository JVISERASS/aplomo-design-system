# Aplomo para Angular — diseño

Fecha: 2026-08-10
Estado: aprobado

## Objetivo

Publicar el sistema de diseño Aplomo como librería Angular (`@jviserass/aplomo-angular`) sin
romper la versión React existente (`@jviserass/aplomo`) ni duplicar los tokens de diseño.

Alcance: los 78 componentes, los tokens, las 78 stories de Storybook, las 9 suites de test y
los 4 `ui_kits`. Fuera de alcance por ahora: app de demostración Angular y reescritura del
README público.

## Punto de partida

El paquete React son 78 componentes en 9 categorías, 1.552 líneas de JSX en total (media de
~20 líneas por componente). Casi todos son presentacionales y controlados por props. No hay
`createContext`, ni `createPortal`, ni `useMemo`. 21 componentes usan `useState` (en su mayoría
para hover y press), 6 usan `useEffect` y 9 usan `useRef`. Los estilos son objetos JavaScript
inline que referencian variables CSS `--ap-*`; los tokens son CSS puro y se portan sin cambios.

## Arquitectura

### Monorepo con npm workspaces

```
aplomo/
├── package.json                    workspaces: packages/*, apps/*
├── packages/
│   ├── tokens/                     @jviserass/aplomo-tokens
│   │   ├── tokens/*.css            los 8 ficheros actuales, sin tocar
│   │   ├── styles.css
│   │   └── scripts/build-css.mjs
│   ├── react/                      @jviserass/aplomo — todo lo actual
│   │   ├── components/ src/ test/ ui_kits/ .storybook/
│   │   └── scripts/gen-barrel.mjs
│   └── angular/                    @jviserass/aplomo-angular
│       ├── angular.json  ng-package.json  tsconfig.lib.json
│       ├── src/public-api.ts
│       ├── src/lib/<categoría>/<componente>/
│       ├── kits/
│       └── .storybook/
├── apps/demo-react/                era examples/demo
├── guidelines/                     HTML agnóstico de framework, sigue en la raíz
├── scripts/parity-check.mjs
└── .github/workflows/
```

`packages/react/scripts/build-css.mjs` lee de `../tokens/tokens/`. La API pública del paquete
React no cambia: `@jviserass/aplomo/styles.css` y `@jviserass/aplomo/tokens.css` siguen
resolviendo a los mismos artefactos. Ningún consumidor React se entera de la reestructuración.

### Toolchain

Angular 22.1.1, ng-packagr 22.1.1, Storybook 10.5.7 para Angular, Vitest, Node 22.

## Convenciones de la API Angular

Este es el contrato que sigue cada componente convertido. Vive en
`packages/angular/CONVENTIONS.md` y se inyecta en el prompt de cada agente de conversión.

| React | Angular |
| --- | --- |
| `export function Button` | `export class ApButton` en `ap-button.ts` |
| — | `selector: 'ap-button'` (elemento) |
| componente cuya raíz React es un único nativo | selector de atributo: `button[apButton]`, `a[apButton]` |
| `variant="primary"` | `variant = input<Variant>('secondary')` |
| `disabled={false}` | `input(false, { transform: booleanAttribute })` |
| `size={16}` | `input(16, { transform: numberAttribute })` |
| `value` + `onChange` | `value = model<T>()`, two-way `[(value)]`, emite el valor y no el evento |
| `onClose`, `onSelect` | `output()` con nombre sin prefijo: `close`, `select` |
| `children` | `<ng-content/>` |
| prop que recibe un `ReactNode` (`footer`, `actions`) | `<ng-content select="[apFooter]"/>` |
| prop de texto (`title`, `label`) | `input<string>()` y, si aplica, slot opcional |
| `columns[].render(row)` | `render?: (row) => string` y `cellTemplate?: TemplateRef<{$implicit: row}>` |
| `{...rest}` | no se reenvía; el host absorbe los atributos nativos |

Reglas transversales:

- `ChangeDetectionStrategy.OnPush` en todos los componentes.
- Bloques de control `@if` / `@for`; nunca `*ngIf` ni `*ngFor`.
- Sin `standalone: true`: es el valor por defecto desde Angular 19.
- Un directorio por componente: `ap-button.ts`, `ap-button.html`, `ap-button.css`.
- Los tipos públicos (`ButtonVariant`, `ButtonSize`) se exportan desde el mismo fichero.

### Selector de atributo

Cuando el componente React renderiza **un único elemento nativo en la raíz**, el componente
Angular usa selector de atributo sobre ese elemento en lugar de envolverlo:

```html
<button apButton variant="primary">Acción principal</button>
```

Así `type`, `disabled`, `aria-*`, `form` y el resto de atributos nativos funcionan sin
reenvío manual, no se añade un elemento envolvente y la accesibilidad es la del navegador.
Es el patrón de Angular Material. Afecta a `Button` e `IconButton`.

El resto usa selector de elemento (`ap-panel`, `ap-data-table`, …), incluidos los controles
de formulario, porque su raíz React es un `<label>` con estructura dentro.

### ControlValueAccessor

De los 14 componentes de `forms`, los 12 que sostienen un valor (`Input`, `Textarea`, `Select`,
`Checkbox`, `Radio`, `Switch`, `SearchField`, `SegmentedControl`, `OtpInput`, `DateRange`,
`DurationInput`, `UnitInput`) implementan `ControlValueAccessor` mediante `NG_VALUE_ACCESSOR`,
para que funcionen con `[(ngModel)]`, `formControlName` y la validación de Angular. `FormSection`
y `FormActions` son maquetación y no lo implementan.

Conviven con el `model()` de two-way binding: `writeValue` escribe la señal, y el cambio
interno llama a `onChange` del CVA y actualiza la señal. Es la única capacidad que la versión
Angular añade sobre la React, y sin ella la librería no sería usable en una app Angular real.

## Estrategia de estilos

Cada componente lleva `styleUrl` con encapsulación emulada (la de por defecto). Las variables
`--ap-*` son propiedades heredadas y atraviesan la encapsulación, así que **los ficheros de
tokens no cambian ni un carácter**.

Los objetos de estilo inline de React se traducen a CSS de componente con `:host`, clases de
variante y pseudo-clases reales:

```css
:host { display: inline-flex; }
button { border-radius: var(--ap-radius-control); font-family: var(--ap-font-core); }
button.primary { background: var(--ap-accent); }
button.primary:hover { background: var(--ap-accent-hover); }
button.primary:active { background: #14279E; }
```

Consecuencia buscada: los ~15 componentes que hoy mantienen `useState` para hover y press
pierden ese estado y pasan a `:hover` / `:active`.

`[style]` se reserva a lo genuinamente dinámico y no expresable en CSS estático:
`grid-template-columns` de `DataTable`, `--ap-delay` de `Stagger`, la geometría de los charts,
y los anchos de `Quota` y `ShareBar`.

`ng-packagr` compila los estilos de componente dentro del bundle. El consumidor solo importa
la hoja global de tokens.

## Los diez componentes difíciles

Se convierten uno a uno, con verificación adversarial, y no por lote.

| Componente | Dificultad | Solución en Angular |
| --- | --- | --- |
| `DataTable` | teclado ↑↓↵Esc, refs por celda, render props | listener en `host`, `viewChildren()`, `TemplateRef` para celdas |
| `CommandPalette` | listener global, autofocus, filtrado | listener sobre `window` vía `DOCUMENT`, `afterNextRender` para el foco, `computed()` para los resultados |
| `SharedValue` | FLIP con `Map` estático y `element.animate` | `Map` a nivel de módulo y `static capture()`; misma firma pública |
| `Icon` | inyección del SVG de Lucide desde CDN con reintentos | `effect()` sobre `ElementRef`, mismo bucle de 20 reintentos y misma degradación a hueco vacío |
| `DataValue` | FIRMA 1: doble `requestAnimationFrame` para la transición del eje MONO | `effect()` con `afterNextRender`, mismo doble rAF |
| `Stagger` | FIRMA 2: `React.Children.toArray` no tiene equivalente | `afterNextRender` recorre los hijos proyectados y les estampa `.ap-rise` y `--ap-delay`; sigue siendo de una sola vez |
| `Composer` | autosize del textarea | `effect()` sobre el valor y `viewChild` |
| `LogStream` | auto-scroll al final | `afterRenderEffect` |
| `OtpInput` | array de refs y gestión de foco entre casillas | `viewChildren()` |
| `FileDrop` | eventos de arrastre | listeners en `host` |

Los otros 68 son mecánicos y se convierten por lotes de categoría.

## Stories, tests y kits

**Tests.** Vitest con el builder `@angular/build:unit-test` de Angular 22; si diera problemas,
`@analogjs/vite-plugin-angular`. Las mismas 9 suites y los mismos 78 smoke tests, con
`TestBed`. El comando sigue siendo `npm test`.

**Stories.** `@storybook/angular` 10 con los mismos 78 títulos y los mismos args.

**ui_kits.** Los 4 kits actuales se sirven como HTML estático con React por CDN y
babel-standalone. Ese arnés no puede replicarse en Angular, que necesita compilación. Los kits
Angular viven como stories a pantalla completa (`parameters: { layout: 'fullscreen' }`) dentro
del Storybook de Angular, con lo que quedan navegables sin crear una aplicación nueva.

## Verificación

Cuatro puertas, todas en CI:

1. `ng build` de la librería con plantillas estrictas.
2. `tsc --noEmit` en los tres paquetes.
3. Los 78 smoke tests.
4. **`scripts/parity-check.mjs`** — extrae de cada `.jsx` el conjunto de propiedades CSS y de
   referencias `--ap-*` de sus objetos de estilo, hace lo propio con el `.css` y los `[style]`
   del componente Angular equivalente, y reporta lo que aparece en React y falta en Angular.

La cuarta puerta existe porque el modo de fallo característico de esta conversión no es que no
compile, sino que una declaración de estilo se caiga por el camino y el componente se vea
distinto. Es determinista y corre en segundos.

## Plan de ejecución

| Fase | Contenido | Modelo |
| --- | --- | --- |
| 0 | Monorepo, paquete de tokens, workspace Angular, componentes de referencia escritos a mano y `CONVENTIONS.md` | manual |
| 1 | Los 68 componentes mecánicos, por lotes de categoría, con etapa de revisión | sonnet, revisión opus |
| 2 | Los 10 difíciles, un agente por componente, con verificación adversarial | opus |
| 3 | Las 78 stories y las 9 suites de test | sonnet |
| 4 | Los 4 ui_kits | opus |
| 5 | parity-check, build, typecheck y tests en verde | manual y opus |

La fase 0 se hace a mano deliberadamente. Los componentes de referencia (`ap-button` con
selector de atributo, `ap-data-value` con firma de movimiento y `ap-input` con
`ControlValueAccessor`) son la plantilla literal que copian los ~35 agentes posteriores: un
error ahí se multiplica por 78.

## Riesgos

- **El builder de Vitest de Angular 22** podría no encajar con el Storybook basado en webpack.
  Mitigación: son configuraciones independientes; el fallback es `@analogjs/vite-plugin-angular`.
- **La reestructuración del monorepo** puede romper el build de React. Mitigación: la fase 0 no
  se da por terminada hasta que `npm run build`, `typecheck` y `test` del paquete React vuelven
  a estar en verde con la API pública intacta.
- **Deriva entre los agentes de la fase 1.** Mitigación: `CONVENTIONS.md` más los tres
  componentes de referencia en el prompt, etapa de revisión por lote, y `parity-check` al final.
