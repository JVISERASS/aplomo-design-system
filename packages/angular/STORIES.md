# Convenciones de las stories

Contrato para portar las 78 stories de `packages/react/components/**/*.stories.tsx` a
`packages/angular/src/lib/**/*.stories.ts`.

Las tres ya convertidas son la referencia literal:

- `core/button/ap-button.stories.ts` — componente con **selector de atributo**
- `core/badge/ap-badge.stories.ts` — contenido que en React era `children`
- `layout/panel/ap-panel.stories.ts` — **slot con nombre** (`actions`)

## 1. Dónde va y cómo se llama

Junto a su componente: `src/lib/<categoría>/<componente>/ap-<componente>.stories.ts`.

**El `title` se copia carácter a carácter del original** (`"Core/Badge"`, `"Data/DataTable"`).
Los dos catálogos tienen que poder compararse de un vistazo.

Los nombres de las stories exportadas y su orden también se conservan.

## 2. La forma por defecto

Si el componente no proyecta contenido, basta con `component` y `args`:

```ts
import type { Meta, StoryObj } from "@storybook/angular";
import { ApSkeleton } from "./ap-skeleton";

const meta: Meta<ApSkeleton> = { title: "Data/Skeleton", component: ApSkeleton };
export default meta;

type Story = StoryObj<ApSkeleton>;
export const Default: Story = { args: { width: 180, height: 12 } };
```

## 3. Cuando el original pasaba `children`

`children` **no puede viajar en `args`**: en Angular es contenido proyectado. Hace falta un
`render` con plantilla, y el arg se llama `content`:

```ts
const meta: Meta<ApBadge & { content: string }> = {
  title: "Core/Badge",
  component: ApBadge,
  render: (args) => ({
    props: args,
    template: `<ap-badge [tone]="tone">{{ content }}</ap-badge>`,
  }),
};
```

Si el contenido del original era markup y no texto, ponlo directamente en la plantilla en vez de
inventar un arg.

## 4. Cuando el original pasaba un nodo a una prop con nombre

`actions`, `footer`, `aside` y demás son slots (`<ng-content select="[apActions]">`). Van en la
plantilla marcados con su atributo:

```ts
template: `
  <ap-panel [title]="title" [padded]="padded">
    @if (actions) { <span apActions>{{ actions }}</span> }
    {{ content }}
  </ap-panel>`,
```

Mira el `.html` del componente para saber qué slots existen y cómo se llaman.

## 5. Traducciones de args

| React | Angular |
| --- | --- |
| `children: "Texto"` | arg `content` + plantilla (§3) |
| `actions: "Guardar"` | arg + slot en la plantilla (§4) |
| `onSelectRow: (r) => …` | **se quita**: Storybook detecta los `output()` y los registra solo |
| `onRemove: () => …` | se quita, y se añade `showRemove: true` (CONVENTIONS 10.1) |
| `onSelect` en `List` | se quita, y se añade `selectable: true` |
| resto de props | igual, mismo nombre y mismo valor |

Los `show<Acción>` afectan a `Chip`, `Composer`, `ErrorState`, `FileDrop` y `FrozenState`; el
`selectable`, a `List`. Si el original pasaba el callback, la story Angular tiene que activar el
booleano o el control no aparece.

## 6. Reglas

- `import type { Meta, StoryObj } from "@storybook/angular";` — nunca de `@storybook/react`.
- Nada de `any`. Para los args extra, intersección: `Meta<ApBadge & { content: string }>`.
- Los datos de ejemplo (columnas, filas, items) se copian **tal cual**, con los mismos valores:
  son parte del catálogo, no relleno.
- Una story por cada una del original, ni más ni menos.
- No toques el componente. Si algo no se puede expresar, déjalo en tus notas.
- En las plantillas usa `@if` / `@for`, nunca `*ngIf` / `*ngFor`.
