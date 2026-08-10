# Convenciones de conversión React → Angular

Contrato único para portar los 78 componentes de `packages/react/components/` a
`packages/angular/src/lib/`. Los cuatro componentes ya convertidos (`ap-button`, `ap-icon`,
`ap-data-value`, `ap-input`) son la referencia literal: ante cualquier duda, imítalos.

## 1. Dónde van los ficheros

```
packages/angular/src/lib/<categoría>/<componente-en-kebab>/
├── ap-<componente>.ts     obligatorio
├── ap-<componente>.html   solo si la plantilla no cabe en una línea
└── ap-<componente>.css    obligatorio
```

La categoría es la misma que en React: `core`, `forms`, `data`, `layout`, `navigation`,
`charts`, `assistant`, `feedback`, `motion`.

`components/data/DataTable.jsx` → `src/lib/data/data-table/ap-data-table.ts`.

**No edites nunca `src/public-api.ts`**: lo genera `scripts/gen-barrel.mjs`. Tampoco toques
ficheros de otro componente. Cada conversión se queda dentro de su directorio.

## 2. La clase

```ts
@Component({
  selector: "ap-panel",
  templateUrl: "./ap-panel.html",
  styleUrl: "./ap-panel.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApPanel { }
```

- Clase `Ap<PascalCase>`, exportada.
- `ChangeDetectionStrategy.OnPush` siempre.
- **Nunca** escribas `standalone: true`: es el valor por defecto desde Angular 19 y ponerlo
  es ruido.
- Bloques de control `@if` / `@for` / `@switch`. Nunca `*ngIf`, `*ngFor`, `NgIf`, `NgForOf`.
  `@for` exige `track`: usa la clave natural (`track item.id`) o `track $index`.
- Los tipos públicos se exportan del mismo fichero: `export type PanelTone = "default" | "sunken";`
- Imports de otros componentes del sistema: ruta relativa al fichero, sin extensión —
  `import { ApIcon } from "../../core/icon/ap-icon";` — y decláralos en `imports: [ApIcon]`.

## 3. Selector

Por defecto, selector de elemento: `ap-<kebab>`.

**Excepción:** si el componente React renderiza **un único elemento nativo como raíz** (un
`<button>` y nada más alrededor), el componente Angular usa selector de atributo sobre ese
elemento, para que `disabled`, `type`, `form`, `aria-*` y `(click)` sean nativos y no haya
elemento envolvente:

```ts
selector: "button[apButton]",
template: "<ng-content />",
```

```html
<button apButton variant="primary">Acción principal</button>
```

Solo aplica a `Button` e `IconButton`. Todo lo demás —incluidos los controles de formulario,
cuya raíz React es un `<label>` con estructura dentro— usa selector de elemento.

## 4. Props → inputs

| React | Angular |
| --- | --- |
| `variant="primary"` | `readonly variant = input<ButtonVariant>("secondary");` |
| `disabled={false}` | `readonly disabled = input(false, { transform: booleanAttribute });` |
| `size={16}` | `readonly size = input(16, { transform: numberAttribute });` |
| prop sin valor por defecto | `readonly hint = input<string>();` → el tipo es `string \| undefined` |
| prop obligatoria | `readonly name = input.required<string>();` |
| `value` + `onChange` | `readonly value = model<string>("");` |
| `children` | `<ng-content />` |
| prop que recibía un `ReactNode` | `<ng-content select="[apFooter]" />` |
| prop de texto (`title`, `label`) | `input<string>()` |
| `style`, `className`, `{...rest}` | **nada**: el consumidor los pone en el host y llegan solos |

Todos los inputs se declaran `readonly`.

`model()` **no acepta `transform`**. Si necesitas un booleano de dos vías, usa `model<boolean>(false)`
y documenta que hay que bindearlo (`[open]="x"`), no ponerlo como atributo pelado.

## 5. Callbacks → outputs

`onClose` → `close`, `onSelect` → `select`, `onDismiss` → `dismiss`, `onEscape` → `escape`.
Se quita el prefijo `on` y se emite **el dato, no el evento**:

```ts
readonly select = output<CommandItem>();
// en la plantilla: (click)="select.emit(item)"
```

- **Nunca** llames a un output `change`: los eventos `change` nativos de los `<input>` internos
  burbujean y el consumidor se comería los dos. Para valores usa `model()`, que ya genera
  `valueChange`.
- Si el React comprobaba `onX && onX(...)`, en Angular emites sin condición: un output sin
  suscriptores no hace nada.

## 6. Estado

Los `useState` de **hover, press y focus desaparecen**: se resuelven en CSS con `:hover`,
`:active` y `:focus-within`. No los portes.

El resto de `useState` → `signal()`, marcado `protected` si solo lo usa la plantilla.
`useMemo` y los valores derivados → `computed()`. `useEffect` → `effect()` con `onCleanup`.

```ts
protected readonly open = signal(false);
protected readonly hits = computed(() => this.items().filter(/* … */));
```

Los `effect()` pueden escribir señales sin ninguna opción especial (desde Angular 19).

**Guarda de servidor:** cualquier `effect` que toque `window`, `document`,
`requestAnimationFrame` o `setTimeout` sobre el DOM debe degradar sin romper cuando no hay
navegador. El patrón, tomado de `ap-data-value`:

```ts
if (typeof requestAnimationFrame === "undefined") { this.settled.set(true); return; }
```

## 7. Controles de formulario: ControlValueAccessor

Los 12 componentes de `forms` que sostienen un valor (`Input`, `Textarea`, `Select`,
`Checkbox`, `Radio`, `Switch`, `SearchField`, `SegmentedControl`, `OtpInput`, `DateRange`,
`DurationInput`, `UnitInput`) implementan `ControlValueAccessor`. `FormSection` y `FormActions`
son maquetación y no lo hacen.

Copia el patrón de `ap-input.ts` tal cual:

```ts
providers: [
  { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ApInput), multi: true },
],
```

```ts
readonly value = model<string>("");
readonly disabled = input(false, { transform: booleanAttribute });

private readonly disabledByForm = signal(false);
protected readonly isDisabled = computed(() => this.disabled() || this.disabledByForm());

private onChange: (value: string) => void = () => {};
protected onTouched: () => void = () => {};

protected handleInput(event: Event): void {
  const next = (event.target as HTMLInputElement).value;
  this.value.set(next);
  this.onChange(next);
}

writeValue(value: string | null): void { this.value.set(value ?? ""); }
registerOnChange(fn: (value: string) => void): void { this.onChange = fn; }
registerOnTouched(fn: () => void): void { this.onTouched = fn; }
setDisabledState(isDisabled: boolean): void { this.disabledByForm.set(isDisabled); }
```

Dos detalles que importan: se usa `isDisabled()` (no `disabled()`) en la plantilla y en el CSS,
y el `(blur)` del control nativo llama a `onTouched()`.

## 8. Estilos

Los objetos de estilo inline de React pasan a **CSS de componente**. Esta es la parte donde se
pierde fidelidad si se hace deprisa, así que:

- **Porta todas y cada una de las declaraciones.** Si el objeto React tenía nueve propiedades,
  el CSS tiene nueve. No "simplifiques" ni quites lo que parezca redundante.
- **Copia los tokens `--ap-*` carácter a carácter.** Nunca sustituyas `var(--ap-space-2)` por
  `8px`, ni al revés. Los valores literales que ya estaban literales (`#14279e`, `3px`, `16`)
  se quedan literales.
- camelCase → kebab-case: `fontVariationSettings` → `font-variation-settings`,
  `borderRadius` → `border-radius`.
- Los números sin unidad de React son píxeles: `width: 16` → `width: 16px`. Excepto los que
  ya son adimensionales (`opacity`, `flex`, `zIndex`, `lineHeight`).

### Variantes

Se exponen como atributos `data-*` en el host y se estilan con `:host([data-…])`:

```ts
host: {
  "[attr.data-variant]": "variant()",
  "[attr.data-size]": "size()",
  "[attr.data-solid]": 'solid() ? "" : null',
}
```

```css
:host([data-variant="primary"]) { background: var(--ap-accent); }
:host([data-variant="primary"]:not(:disabled):hover) { background: var(--ap-accent-hover); }
```

El `:not(:disabled)` **no es opcional**: en React el hover se suprimía cuando `disabled`, y sin
esa guarda el CSS lo aplicaría igual.

### Display del host

`:host` debe declarar un `display` explícito que reproduzca cómo se comportaba en el flujo la
raíz React (`inline-flex`, `flex`, `block`, `inline`). Si la raíz React era un elemento
semántico que hay que conservar dentro (`<label>`, `<table>`), el host lleva `display: block` y
el elemento interno hace el trabajo de maquetación. Ver `ap-input.css`.

### Lo que sigue yendo en `[style]`

Solo lo que no se puede expresar en CSS estático porque depende de un valor en tiempo de
ejecución: `grid-template-columns` calculado, `--ap-delay` del stagger, anchos porcentuales de
`Quota` / `ShareBar` / los charts, `width` y `height` derivados de un input numérico.

```html
<div class="row" [style.grid-template-columns]="grid()">
```

### Animaciones

Las `animation: ap-rise …` y la clase `.ap-rise` vienen de `tokens/base.css` y son globales:
se usan igual que en React, sin redefinirlas.

## 9. Props `defaultX` y la regla del constructor

**Nunca leas un signal input dentro del constructor.** Los inputs todavía no tienen el valor que
pasó el consumidor: devuelven el valor por defecto que declaraste, y el binding se pierde en
silencio. Están disponibles a partir de `ngOnInit`.

React usa `defaultChecked` / `defaultOpen` para el modo no controlado ("así ninguna casilla queda
muerta por olvidar `onChange`"). En Angular ese fallo no existe: un `model()` se actualiza solo
aunque nadie lo bindee. La prop se conserva por paridad de API y se aplica así:

```ts
readonly defaultChecked = input(false, { transform: booleanAttribute });
readonly checked = model(false);

ngOnInit(): void {
  if (this.defaultChecked() && !this.checked()) this.checked.set(true);
}
```

La guarda `&& !this.checked()` es necesaria: sin ella, `ngOnInit` pisaría un `[checked]`
explícito del consumidor.

Aplica a `Checkbox` (`defaultChecked`), `Switch` (`defaultChecked`), `Accordion` (`defaultOpen`)
y `AssistantTrace` (`defaultOpen`).

## 10. Dos desviaciones deliberadas de la API de React

Son las dos únicas cosas que el port Angular hace distinto a propósito. Ambas están en el
README y en el CHANGELOG; no improvises otras.

### 10.1 Render condicionado por un callback → input `show<Acción>`

En React, `{onRemove && <button …/>}` hace que el botón **exista solo si te pasan el handler**.
En Angular un `output()` existe siempre, así que la traducción ingenua deja un botón enfocable
que no hace nada y además cambia el padding del componente.

La traducción correcta es un booleano explícito, `false` por defecto:

```ts
readonly showRemove = input(false, { transform: booleanAttribute });
readonly remove = output<void>();
```

```html
@if (showRemove()) {
  <button type="button" class="…" (click)="remove.emit()" aria-label="Quitar">…</button>
}
```

La regla vale igual cuando lo que dependía del callback era un **estilo** y no un elemento
(`cursor: onSelect ? "pointer" : "default"`). En ese caso el booleano describe la capacidad y no
lleva prefijo `show`.

Afecta exactamente a seis componentes:

| Componente | React | Angular |
| --- | --- | --- |
| `Chip` | `onRemove` | `showRemove` + `remove` |
| `Composer` | `onAttach` | `showAttach` + `attach` |
| `ErrorState` | `onRetry` | `showRetry` + `retry` |
| `FileDrop` | `onRemove` | `showRemove` + `remove` |
| `FrozenState` | `onResume` | `showResume` + `resume` |
| `List` | `onSelect` (solo el cursor) | `selectable` |

### 10.2 Props que chocan con atributos globales de HTML

React sacaba `title` del `...rest`, así que nunca llegaba al DOM. En Angular, un
`<ap-panel title="Servicios">` deja el atributo puesto y el navegador pinta su tooltip nativo
sobre todo el panel. Con `role` es peor: `<ap-message role="assistant">` declara un rol ARIA
inválido.

Se neutraliza en el host, conservando el nombre de la prop:

```ts
host: { "[attr.title]": "null" }
```

Está verificado que esto quita el atributo estático del DOM y que el `input()` conserva su
valor. Componentes afectados:

- `[attr.title]="null"` → `Dialog`, `EmptyState`, `ErrorState`, `InlineAlert`, `PageError`,
  `FormSection`, `PageHeader`, `Panel`, `SectionHeader`.
- `[attr.role]="null"` → `Message`.
- `[attr.hidden]="null"` → `ColumnManager`.

Si al convertir encuentras otra prop que sea atributo global (`id`, `slot`, `lang`, `dir`,
`tabindex`, `style`, `class`), aplícale lo mismo y déjalo dicho en tus notas.

## 11. Trampas del compilador

`strictTemplates` está activado. Lo que más aparece:

- `input<string>()` es `string | undefined`. Para pasarlo a otro componente que exige
  `string`, usa `@if (icon(); as iconName)` y pasa `iconName`.
- `[attr.x]="expr ?? null"` para atributos opcionales; `[attr.x]="cond ? '' : null"` para
  atributos booleanos.
- `noPropertyAccessFromIndexSignature` está activado: tipa los diccionarios como
  `Record<VariantUnion, X>` (con claves literales) en vez de `{ [k: string]: X }`.
- No uses `any`. Para APIs globales sin tipar (como el UMD de Lucide) declara una interfaz
  mínima y castea una sola vez, como hace `ap-icon.ts`.

## 12. Checklist antes de dar por convertido un componente

1. `.ts`, `.css` y (si hace falta) `.html` dentro de su propio directorio, y nada más tocado.
2. `OnPush`, sin `standalone: true`, `@if`/`@for` con `track`.
3. Todas las props del `.d.ts` de React están como `input()` / `model()`, con los mismos
   nombres y los mismos valores por defecto.
4. Todos los `onX` están como `output()` sin el prefijo.
4b. No se lee ningún signal input dentro del constructor (ver §9).
4c. Si el React renderizaba algo solo al recibir un callback, hay un `show<Acción>` (§10.1); si
    alguna prop choca con un atributo global de HTML, está neutralizada en el host (§10.2).
5. Todas las declaraciones CSS del original están en el `.css`, con los mismos tokens.
6. Hover, press y focus como pseudo-clases, con `:not(:disabled)` donde corresponda.
7. `:host` tiene `display` explícito.
8. Si es un control de formulario con valor, implementa `ControlValueAccessor`.
9. El comentario de cabecera del componente React (el que explica la intención de diseño) se
   conserva como TSDoc sobre la clase.
