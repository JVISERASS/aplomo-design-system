# `ap-markdown` — diseño

Fecha: 2026-09-04
Estado: implementado

## Objetivo

Renderizar Markdown dentro de Aplomo con la tipografía y los tokens del sistema, para que
`ap-message` pueda pintar respuestas de un asistente en vez de recibir JSX escrito a mano.

Alcance: un componente `ap-markdown` publicado como entry point secundario del paquete Angular,
su hoja de estilo, sus stories y sus tests. Fuera de alcance: paridad React, resaltado de
sintaxis, matemáticas, diagramas y edición de Markdown.

## Decisión

Se integra **`ngx-markdown`** (22.0.2, 2026-08-29) como motor, envuelto en un componente propio
que aporta la capa visual. Es una decisión tomada con las alternativas sobre la mesa y con sus
costes contados; los costes están en «Riesgos aceptados».

### Punto de partida

El sistema tiene hoy **cero dependencias de runtime** (`@jviserass/aplomo` no declara ninguna;
`@jviserass/aplomo-angular` solo `tslib`), incrusta los iconos de Lucide para no depender de
ninguna descarga externa, y `scripts/supply-chain-check.mjs` falla el build si detecta una carga
desde un CDN. No hay un solo `innerHTML` en todo el repositorio.

`ngx-markdown` encaja mejor con eso de lo que su fama sugiere: su única `dependency` es `tslib`,
y prismjs, katex, mermaid, clipboard y emoji-toolkit son peers **opcionales** que npm no instala
por su cuenta. La base son ~20 KB gzip (7,2 del fesm + 13,2 de `marked`), su documentación no
recomienda cargar nada desde un CDN, y no tiene ningún aviso de seguridad publicado.

### Alternativas evaluadas

| Opción | Por qué no |
| --- | --- |
| Motor propio sobre `marked.lexer()` con renderer de componentes | La más limpia (0 `innerHTML`, 1 paquete, paridad React gratis), pero hay que escribirla entera |
| `ngx-remark` | Renderiza a plantillas Angular reales, pero arrastra 38–64 paquetes de `remark`/`unified` y tipa con `any` e índices de string, incompatible con `noPropertyAccessFromIndexSignature` |
| `<vaadin-markdown>` | Un solo código para React y Angular, pero mete `lit` + `dompurify` + 3 paquetes `@vaadin`, sanea con `tagNameCheck: () => true`, y exige `CUSTOM_ELEMENTS_SCHEMA` |
| Solo capa visual, sin motor | No resuelve la necesidad: cada consumidor volvería a elegir motor |

También se descartó `shikidown` (33 descargas/semana, sin campo `license` en npm),
`@comark/angular` (peer `>=17 <22`, no instala en Angular 22) y `ngx-md`, `ngx-markdown-it`,
`ngx-showdown` (sin mantenimiento desde 2025, 2023 y 2020).

## Arquitectura

### Entry point secundario

```
packages/angular/
└── markdown/
    ├── ng-package.json          { "lib": { "entryFile": "src/public-api.ts" } }
    └── src/
        ├── public-api.ts
        ├── ap-markdown.ts
        ├── ap-markdown.html
        ├── ap-markdown.css
        ├── ap-markdown.spec.ts
        └── ap-markdown.stories.ts
```

Se publica como `@jviserass/aplomo-angular/markdown`.

**El subpath no es una preferencia de organización, es un requisito.** Si el componente viviera
en `src/lib/`, `scripts/gen-barrel.mjs` lo exportaría desde el barril principal y
`@jviserass/aplomo-angular` pasaría a importar `ngx-markdown`. Como el peer de Aplomo es
`@angular/core >=20` y el de `ngx-markdown` es `^22.0.0` cerrado, cualquier consumidor en Angular
20 o 21 quedaría con un árbol de peers insatisfecho por un componente que no usa. Con el subpath,
solo lo paga quien lo importa.

`gen-barrel.mjs` no necesita cambios: solo recorre `src/lib`.

### Dependencias declaradas

En `packages/angular/package.json`:

```json
"peerDependencies": {
  "@angular/common": ">=20.0.0",
  "@angular/core": ">=20.0.0",
  "@angular/forms": ">=20.0.0",
  "@jviserass/aplomo-tokens": "^0.1.0",
  "ngx-markdown": ">=20.0.0"
},
"peerDependenciesMeta": {
  "ngx-markdown": { "optional": true }
}
```

`dependencies` sigue siendo `{ tslib }`.

El rango de `ngx-markdown` se deja abierto a propósito: cada major suyo fija un major de Angular
(20→`20.x`, 21→`21.x`, 22→`22.x`), así que el consumidor instala el que le corresponde y Aplomo
no hereda ese acoplamiento.

`marked` se declara como `">=15.0.0"`, también opcional. El rango es amplio a propósito, para no
contradecir el rango abierto de `ngx-markdown`: 20.x pide `marked ^15 || ^16` y 21.x/22.x piden
`^17 || ^18`. Se ha comprobado en los `.d.ts` publicados de marked **15.0.12, 16.4.2 y 18.0.11**
que la API del renderer que usamos es idéntica en las tres (`html({ text })`,
`link({ href, title, tokens })`, `image({ href, title, text, tokens })`).

El diseño original no declaraba `marked` porque el renderer solo necesitaba sus *tipos*, y
`ngx-markdown` los reexporta. Al implementarlo resultó que el renderer hay que registrarlo en la
instancia de `marked` directamente (ver «Saneado»), así que pasa a ser un import de tiempo de
ejecución y tiene que estar declarado.

### El componente

```ts
@Component({
  selector: "ap-markdown",
  imports: [MarkdownComponent],
  templateUrl: "./ap-markdown.html",
  styleUrl: "./ap-markdown.css",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "ap-markdown",
    // permite a la hoja marcar el bloque en curso mientras la respuesta llega
    "[attr.data-streaming]": 'streaming() ? "" : null',
  },
})
export class ApMarkdown {
  readonly data = input<string>("");
  /** la respuesta sigue llegando: acota la cadencia de reparseo */
  readonly streaming = input(false, { transform: booleanAttribute });
  readonly ready = output<void>();
}
```

Uso previsto:

```html
<ap-message at="09:14">
  <ap-markdown [data]="answer()" [streaming]="busy()" />
  <ap-citation apFooter label="metrics.p95" />
</ap-message>
```

No hay output `error`: un fallo de parseo se resuelve mostrando el texto en crudo, que es más
útil en un panel de operaciones que un hueco vacío.

## Saneado

El contenido es salida de un modelo de lenguaje: no es confiable. `ngx-markdown` renderiza con
`innerHTML` y `bypassSecurityTrustHtml`, así que el saneado se hace en dos capas.

### Capa 1 — el HTML crudo no llega a generarse

`provideMarkdown()` recibe un renderer de `marked` que lo neutraliza en origen:

- `renderer.html` devuelve cadena vacía: el HTML embebido en el Markdown se descarta.
- `renderer.link` acepta `http:`, `https:` y `mailto:`; cualquier otro esquema se degrada a
  texto plano.
- `renderer.image` acepta `http:`, `https:` y `data:image/`; el resto se descarta.

Las firmas son por token, confirmadas en `marked.d.ts`, y son estables en todos los majors que
`ngx-markdown` 20–22 admiten:

```ts
html({ text }: Tokens.HTML | Tokens.Tag): string;
link({ href, title, tokens }: Tokens.Link): string;
image({ href, title, text, tokens }: Tokens.Image): string;
```

Esto convierte «renderizo HTML producido por un LLM» en «renderizo un subconjunto cerrado de
Markdown», que es una superficie mucho más pequeña.

### Capa 2 — el sanitizador de Angular, en su valor por defecto

`SANITIZE` se queda en `SecurityContext.HTML`. **Nunca `SecurityContext.NONE`.** Comprobado
sobre la allowlist real de Angular: `class` se conserva siempre (por eso sobreviven las clases
`language-*` que emite `marked`), `id` se elimina siempre, y caen `<script>`, `<iframe>`,
`<style>`, el atributo `style` y todos los `on*`.

La capa 1 es la defensa; la capa 2 es la red por si la capa 1 tiene un agujero. Ninguna de las
dos se considera suficiente por sí sola.

### Dos cosas que solo aparecieron al ejecutarlo

**El renderer tiene que ser un objeto plano, no una subclase.** `ngx-markdown` hace
`const renderer = { ...markedOptions.renderer }` antes de pasárselo a `marked`. Un spread solo
copia propiedades **propias**, y los métodos de una subclase de `MarkedRenderer` viven en el
prototipo: se perdían todos, y los cinco vectores pasaban intactos. Comprobado: el spread de una
instancia de clase pierde `link`; el de un objeto literal lo conserva. La forma correcta es un
`RendererObject` de marked, donde devolver `false` delega en la implementación por defecto.

**El renderer se registra una sola vez, no por parseo.** `marked` es un singleton de módulo y
`marked.use()` **envuelve** lo que ya hubiera en vez de sustituirlo. `ngx-markdown` llama a
`use()` en cada parseo —siempre, porque su `DEFAULT_MARKED_OPTIONS` ya trae un `renderer`—, así
que pasar el nuestro por `MARKED_OPTIONS` hacía crecer la cadena sin techo. Medido reproduciendo
su `parseMarked()`: en el parseo 50, cada enlace invocaba `link()` **51 veces**. Con streaming a
80 ms eso degrada durante toda la vida de la aplicación.

La solución es registrarlo una vez desde `provideApMarkdown()`, con guarda de módulo, y **no**
proveer `MARKED_OPTIONS`. `ngx-markdown` sigue llamando a `use()` con su renderer por defecto,
pero el spread de ese objeto solo tiene `options` y `parser`, que marked ignora. Medido de nuevo:
2 invocaciones en el parseo 1 y 2 en el 50. Constante.

El precio es que el renderer queda registrado en la instancia **global** de `marked`: si la
aplicación usa `marked` por su cuenta, también verá el HTML crudo descartado. Está documentado en
el TSDoc de `provideApMarkdown()`.

### Test de regresión

`ap-markdown.spec.ts` comprueba los cinco vectores medidos que `marked` deja pasar cuando emite
HTML como cadena: `<script>`, `<img onerror>`, `[texto](javascript:…)`, `data:` en enlace, e
`<img src="javascript:…">`. Es una puerta de CI, no documentación.

## La capa visual

### Por qué `ViewEncapsulation.None`

El HTML que `ngx-markdown` inyecta por `innerHTML` **no recibe los atributos `_ngcontent-*`**, así
que una hoja con encapsulación emulada no puede alcanzarlo. Quedan tres salidas:

- `:host ::ng-deep` — funciona, pero `::ng-deep` está deprecado y el repositorio no lo usa
  ni una vez.
- Hoja global en `packages/tokens` — cambia lo que es ese paquete («solo variables, sin resets»).
- **`ViewEncapsulation.None` con todos los selectores prefijados por `.ap-markdown`** — sin API
  deprecada, con el mismo aislamiento en la práctica, y la hoja resultante es reutilizable tal
  cual desde React el día que haya paridad.

Se elige la tercera. Es la primera vez que el sistema usa `ViewEncapsulation`, y queda
documentado aquí el porqué.

### Qué se estiliza

Todo con tokens `--ap-*`, sin un solo valor literal que ya exista como token.

- **Prosa** — lo mismo que `ap-prose`: `--ap-size-15` / `--ap-leading-prose`, `--ap-measure-prose`,
  `text-wrap: pretty`, `--ap-vf-prose`.
- **Titulares** — `h1`–`h3` a `--ap-text-title` y `--ap-text-subtitle`; `h4` en adelante a
  `--ap-text-ui-medium`. Márgenes en múltiplos de `--ap-space-*`.
- **`pre` / `code`** — `font-variation-settings: var(--ap-vf-data)` (eje `MONO 1` de Recursive:
  la misma familia que el resto del sistema, no una monoespaciada ajena), `tabular-nums`,
  `tab-size: 2`, `overflow-x: auto` contenido en el bloque, borde `--ap-border`, fondo
  `--ap-surface-subtle`, radio `--ap-radius-panel`.
- **`code` inline** — `MONO 1` sin caja ni fondo: no rompe el ritmo de línea de la prosa.
- **Tablas** — el tratamiento de `ap-data-table`: `tabular-nums`, cabecera en `--ap-text-label`,
  filas separadas por `--ap-border`, scroll horizontal contenido.
- **`blockquote`, `hr`, listas, enlaces** — coherentes con `ap-divider` y con el resto del sistema.
- **Dentro de un mensaje de usuario** — `.ap-markdown` heredaría el fondo de la tarjeta gris de
  `ap-message`; los márgenes del primer y último bloque se anulan para que no descuadren el padding.

**Sin resaltado de sintaxis.** Los bloques quedan monocromos en `--ap-text`. Es coherente con un
sistema de paleta mínima, y es lo que hacen 7 de los 8 design systems grandes comprobados
(Primer, Carbon, Polaris, Base, Spectrum, MUI y Fluent; solo Atlassian resalta). Si más adelante
hace falta color, se añaden tokens `--ap-syntax-*` y un tokenizador sin tocar la API pública.

## Streaming

Una respuesta de un modelo cambia `[data]` en cada fragmento, y `ngx-markdown` reparsea, resanea y
reescribe el documento entero cada vez. Con `streaming` activo, el reparseo se acota a una cadencia
de ~80 ms en vez de una por fragmento; al terminar el streaming se hace un render final exacto y se
emite `ready`.

Sin esto, en una respuesta larga el usuario pierde la selección de texto en cada token, y el coste
de reparseo crece con el cuadrado de la longitud.

## Plugins que no se activan

Todos los plugins opcionales de `ngx-markdown` quedan fuera, con su motivo medido:

| Plugin | Coste | Motivo |
| --- | --- | --- |
| Prism | 17,4 KB gz + tema policromo | Decisión de diseño: bloques monocromos |
| KaTeX | 76,2 KB gz + 1,1 MB de fuentes | El peer `^0.16` ata a una rama que KaTeX ya dejó atrás; MathML es Baseline desde jul-2025 |
| Mermaid | **976 KB gzip**, 113 paquetes, 11 avisos de seguridad en 3 años | Ya existe `ap-ascii-diagram` |
| Emoji | 62 KB gz | El `license: MIT` de npm es engañoso: el artwork de JoyPixels va bajo licencia gratuita restrictiva con atribución obligatoria. Emoji Unicode nativo cubre el caso |
| Clipboard | 3,2 KB gz | Arrastra 3 dependencias sin release desde 2017–2019, y ya existe `ap-copy-value` |

## Coste real en el bundle

Medido con `smoke:angular`, que compila una app Angular limpia contra el tarball, en producción:

| app de humo | raw | transferencia |
| --- | --- | --- |
| sin markdown | 289,04 kB | 75,66 kB |
| con `/markdown` + `ngx-markdown` + `marked` | 382,45 kB | 100,66 kB |
| **delta** | **+93,4 kB** | **+25,0 kB** |

Los 25 kB comprimidos son lo que paga quien importa el subpath. Quien no lo importa no paga nada,
y hay una aserción en la prueba de humo que lo comprueba.

## Paridad React

`ap-markdown` es **el primer componente solo-Angular** del sistema. Ni `parity-check.mjs` ni
`stories-check.mjs` fallan, porque ambos recorren React → Angular y solo verifican lo que existe
en React. Es una asimetría deliberada y va documentada en el README junto a las otras cuatro
desviaciones.

Si más adelante se quiere paridad, el camino barato es un `Markdown.jsx` sobre `marked` directo
reutilizando esta misma hoja de estilo, que por diseño no depende de Angular.

## Verificación

Puertas que deben quedar en verde:

1. `ng build` con el entry point secundario, y `dist/markdown/` presente en el paquete.
2. `tsc` con `strictTemplates` y `noPropertyAccessFromIndexSignature`, sin `any`.
3. `ap-markdown.spec.ts`: los cinco vectores de XSS neutralizados.
4. `smoke-angular.mjs` ampliado — instala `ngx-markdown` y `marked` en la app de prueba, compila
   contra el subpath, y **comprueba que `ApMarkdown` no entra en el bundle de quien no lo importa**
   (la aserción de tree-shaking que el script ya sabe hacer con `ApCommandPalette`).
5. `tsconfig.lib.json` incluyendo `markdown/src/**/*.ts` (hoy solo incluye `src/**/*.ts`).
6. `tsconfig.spec.json` incluyendo `markdown/src/**/*.spec.ts` (hoy solo `src/**`), o los tests
   no se ejecutan y la puerta 3 pasa en falso.
7. Storybook: glob de `.storybook/main.ts` ampliado a `../markdown/**/*.stories.ts`, y el
   `include` de `.storybook/tsconfig.json` ampliado a `../markdown/**/*.ts`.
8. `supply-chain-check.mjs` sigue en verde.

### Arreglo independiente

La auditoría destapó tres huecos en `supply-chain-check.mjs` que no dependen de esta decisión y
conviene cerrar en el mismo trabajo:

- El filtro de extensiones es `html|ts|tsx|js|jsx|mjs|md`: un `@import` o `url()` a un CDN dentro
  de un `.css` o `.scss` es invisible, y es justo donde viven los temas de resaltado y los
  `@font-face`.
- La comprobación exige que la URL del CDN y el `<script`/`<link`/`import(`/`fetch(` estén en la
  **misma línea**.
- `IGNORAR` incluye `dist`, así que la salida construida no se revisa.

## Riesgos aceptados

- **`innerHTML` y `bypassSecurityTrustHtml` en el camino de renderizado.** Mitigado en dos capas,
  no eliminado. Es el coste principal de no escribir el motor.
- **`MarkdownComponent` usa detección de cambios `Default`**, no `OnPush`, al contrario que los 78
  componentes del sistema. Hay que medir su efecto dentro de un host `OnPush` antes de dar por
  buena la cadencia de streaming.
- **Un solo mantenedor, familia `ngx-*`.** Es el mismo perfil de los paquetes que ya están en la
  lista negra de `supply-chain-check.mjs` (`ngx-bootstrap`, `ngx-toastr`, `ngx-trend`, `ngx-color`,
  cuatro `@ctrl/ngx-*`), comprometidos por secuestro de cuenta en septiembre de 2025. La
  mitigación es que el lock lo cubre y el chequeo ya corre en CI.
- **`zone.js` es peer obligatorio** de `ngx-markdown` (`~0.15 || ~0.16`) aunque Angular sea
  zoneless desde v21. En la práctica es un paquete más en el lock, no un cambio de comportamiento:
  zone.js solo se activa si se importa en los polyfills.
- **Issue #681 abierta** (2026-08-06): error del dev-server de Vite cuando `marked-katex-extension`
  no está instalado. Documentado por el propio proyecto como limitación conocida en las notas de
  la 22.0.2, con workaround en `angular.json`.
- **Deuda del proyecto**: 26 de sus 28 issues abiertas son de 2024 o anteriores; 12 llevan cuatro
  años o más.

## Fuera de alcance

Resaltado de sintaxis, matemáticas, diagramas, emoji, botón de copia dentro de los bloques,
edición de Markdown, y el componente React equivalente.
