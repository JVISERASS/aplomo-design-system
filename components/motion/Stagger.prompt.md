Entrada coreografiada de una vista, una sola vez por carga.

```jsx
<Stagger style={{display:"grid",gap:"var(--ap-space-4)"}}>
  <MetricRow/><DataTable .../><Footnote/>
</Stagger>
```

No lo uses en hover, ni en cada cambio de estado, ni en el shell.
