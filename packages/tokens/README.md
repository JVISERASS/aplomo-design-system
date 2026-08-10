# @jviserass/aplomo-tokens

Los tokens de diseño de [Aplomo](https://github.com/JVISERASS/aplomo-design-system): variables
CSS `--ap-*`, carga de fuentes y resets base. Es la única fuente de verdad, compartida por la
librería React (`@jviserass/aplomo`) y la Angular (`@jviserass/aplomo-angular`).

```bash
npm install @jviserass/aplomo-tokens
```

```css
/* hoja completa: fuentes + variables + resets */
@import "@jviserass/aplomo-tokens/styles.css";

/* solo las variables, para integrarlo sobre un reset propio */
@import "@jviserass/aplomo-tokens/tokens.css";
```

Los ficheros fuente están en `tokens/`, en el orden en que se ensamblan: `fonts`, `colors`,
`typography`, `space`, `shape`, `elevation`, `motion`, `base`.

Los principios de color, tipografía, forma y movimiento están documentados en el README de la
raíz del repositorio.
