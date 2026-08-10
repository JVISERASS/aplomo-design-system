# @jviserass/aplomo

La librería React de [Aplomo](https://github.com/JVISERASS/aplomo-design-system): 78
componentes sobrios, guiados por tipografía, para software de producto de empresa.

```bash
npm install @jviserass/aplomo
```

`react` y `react-dom` son `peerDependencies` (`>=18`).

```tsx
import "@jviserass/aplomo/styles.css"; // tokens + fuentes + resets
import { Button, Badge, Input } from "@jviserass/aplomo";

export function App() {
  return <Button variant="primary">Acción principal</Button>;
}
```

- `@jviserass/aplomo/styles.css` — hoja completa: fuentes, variables y resets base.
- `@jviserass/aplomo/tokens.css` — solo las variables `--ap-*`, para integrarlo sobre un reset propio.
- **Iconos:** `Icon` usa el set [Lucide](https://lucide.dev) cargado por CDN:
  `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>`. Sin él, `Icon`
  degrada a un hueco vacío en lugar de romper.

El paquete expone ESM y CJS con tipos TypeScript incluidos.

El catálogo completo, los principios de diseño y los kits de interfaz están documentados en el
README de la raíz del repositorio. Existe también una versión Angular equivalente:
`@jviserass/aplomo-angular`.
