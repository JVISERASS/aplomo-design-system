Diagrama en texto. Unico recurso "grafico" del sistema: se lee como dato, no como adorno.

```jsx
<AsciiDiagram label="Topologia de trafico">{\`
 cliente ──▶ borde ──┬──▶ eu-central-1  [██████████] 88%
                     ├──▶ us-east-1     [██████████] 100%
                     └──▶ ap-south-1    [░░░░░░░░░░] drenada
\`}</AsciiDiagram>
```

Reglas: caracteres de caja (`─ │ ┌ ┬ └ ▶`) y bloques (`█ ▓ ░`) unicamente; nunca emoji ni color; alineado a la rejilla de caracteres.
