# Estado de la conversión a Angular

Última actualización: 2026-08-10. Diseño completo en
`2026-08-10-aplomo-angular-design.md`; contrato de conversión en
`packages/angular/CONVENTIONS.md`.

## Hecho

- **Fase 0** — monorepo npm workspaces (`packages/{tokens,react,angular}`, `apps/demo-react`),
  workspace Angular 22 con ng-packagr y Vitest, Node 24 fijado en `.nvmrc`.
  El paquete React conserva su API pública intacta.
- **Fase 1 completa** — los **70 componentes mecánicos** convertidos, revisados y en verde.
- **Fase 2** — los **8 componentes difíciles** convertidos (opus). La verificación adversarial se
  cortó a media ejecución por coste: los 8 pasaron la conversión y parte de la revisión, no toda.
  Comprobado a mano que se respetan las decisiones de más consecuencia: la firma estática de
  `SharedValue.capture`, los `show<Acción>` de `Composer` y `FileDrop`, el estampado de una sola
  vez de `Stagger`, el `ControlValueAccessor` de `OtpInput` y el listener de host de
  `CommandPalette`.
- **`scripts/parity-check.mjs`** — cuarta puerta de CI, calibrada en los dos sentidos.
- **Storybook de Angular** levantado y compilando (`npm run storybook -w @jviserass/aplomo-angular`,
  puerto 6007). Hay una story de ejemplo: `ap-button.stories.ts`.

Estado de las cuatro puertas: `ng build`, `tsc`, 6/6 tests Angular, parity-check sin pérdidas.
React sigue en 78/78 tests.

## Pendiente

### Revisión pendiente de los 8 difíciles

La fase 2 se cortó tras la conversión. El script está en `scripts/workflows/fase2-dificiles.js` y
se puede relanzar sobre lo ya escrito, o —más barato— reducirlo a un solo escéptico por
componente en vez de dos.

Los que más se beneficiarían de ese repaso son `DataTable` (navegación de teclado y refs por
celda) y `SharedValue` (el FLIP), que son los de comportamiento menos cubierto por los tests.

### Fase 3 — 78 stories y 9 suites de test

El andamiaje ya funciona; falta el contenido. Los tests Angular necesitan
`fixture.detectChanges()` explícito porque `zone.js` entró como dependencia de
`@storybook/angular` y saca a TestBed del modo zoneless.

### Fase 4 — los 4 ui_kits

Van como stories a pantalla completa en `packages/angular/kits/` (ver su README).

### Fase 5 — cierre

Hecho: `npm run parity` en CI y el README del monorepo con las cuatro diferencias de la API
Angular documentadas.

## Decisiones que conviene no re-litigar

1. **`show<Acción>` / `selectable`** (CONVENTIONS 10.1) — seis componentes. Un `output()` existe
   siempre, así que lo que React renderizaba o estilaba solo al recibir un callback necesita un
   booleano explícito.
2. **Neutralización de atributos globales** (CONVENTIONS 10.2) — `[attr.title]="null"` en nueve
   componentes, `[attr.role]` en `Message`, `[attr.hidden]` en `ColumnManager`.
3. **`cssLength`** (`src/lib/shared/css-length.ts`) — cuatro componentes reimplementaron el mismo
   helper y los cuatro con el mismo fallo: `width="180"` como atributo estático llega como cadena
   y produce el CSS inválido `width: 180`.
4. **Nunca leer un signal input en el constructor** (CONVENTIONS 9) — afectaba a las cuatro props
   `default*`.

## Limitaciones conocidas, documentadas en el código

- `AsciiDiagram`: Angular compila con `preserveWhitespaces: false` y el colapso ocurre en la
  plantilla del *consumidor*, así que la sangría del ASCII proyectado se pierde salvo que se use
  `ngPreserveWhitespaces`. No es corregible desde dentro del componente.
- `List`: si no se pasa `selectedId` y los items no traen `id`, todas las filas salen
  seleccionadas. Es fiel al original React, que tiene el mismo fallo.
- Componentes cuya raíz React era un elemento semántico (`ap-input`, `ap-form-section`): el
  `style` del consumidor aterriza en el host y no en el elemento interno que hace la maquetación.
  Habrá que decidir cómo expresar ese override al portar los ui_kits.
