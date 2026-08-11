export const meta = {
  name: 'aplomo-angular-convertir',
  description: 'Convierte a Angular un conjunto de componentes de Aplomo por lotes, con revisión',
  phases: [
    { title: 'Convertir', detail: 'un agente por lote, sonnet' },
    { title: 'Revisar', detail: 'auditoría y corrección en sitio, opus' },
  ],
}

const REPO = '/Users/javierviseras/Documents/aplomo-desing-system'
const input = typeof args === 'string' ? JSON.parse(args) : args
const BATCHES = input.batches
const FASE = input.fase

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const CONVERT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['converted'],
  properties: {
    converted: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['component', 'files', 'notes'],
        properties: {
          component: { type: 'string' },
          files: { type: 'array', items: { type: 'string' } },
          notes: { type: 'string', description: 'decisiones no obvias o dudas, en una o dos frases' },
        },
      },
    },
  },
}

const REVIEW_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['fixes', 'remaining'],
  properties: {
    fixes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['component', 'problem', 'applied'],
        properties: {
          component: { type: 'string' },
          problem: { type: 'string' },
          applied: { type: 'boolean' },
        },
      },
    },
    remaining: { type: 'string', description: 'lo que no se pudo arreglar y por qué; "ninguno" si está limpio' },
  },
}

const contract = `
CONTEXTO OBLIGATORIO — léelo antes de escribir nada:
1. ${REPO}/packages/angular/CONVENTIONS.md — el contrato completo. Es la autoridad. Presta
   atención especial a las secciones 9 (nunca leas un signal input en el constructor), 10.1
   (render condicionado por callback => input show<Acción>) y 10.2 (props que chocan con
   atributos globales de HTML => neutralizar en el host).
2. Componentes ya convertidos y revisados, que son la referencia literal a imitar:
   - ${REPO}/packages/angular/src/lib/core/button/ap-button.ts y .css (host de atributo, variantes por data-*)
   - ${REPO}/packages/angular/src/lib/core/chip/ap-chip.* (show<Acción> + variante de padding por data-*)
   - ${REPO}/packages/angular/src/lib/core/icon/ap-icon.ts (effect + DOM + guarda de servidor)
   - ${REPO}/packages/angular/src/lib/data/data-value/ap-data-value.ts (host bindings)
   - ${REPO}/packages/angular/src/lib/forms/input/ap-input.* (ControlValueAccessor, composición)
   - ${REPO}/packages/angular/src/lib/forms/checkbox/ap-checkbox.ts (defaultX en ngOnInit)
3. ${REPO}/packages/tokens/tokens/ — los tokens --ap-*, si necesitas comprobar que uno existe.

REGLAS DURAS:
- Escribe SOLO dentro del directorio de cada componente que te toca. No toques src/public-api.ts
  (es autogenerado), ni ficheros de componentes que no sean tuyos, ni configuración.
- No ejecutes builds ni tests: se verifican en bloque después. Tampoco hagas commits.
- No inventes props ni tokens más allá de lo que manda CONVENTIONS 10.1.
`

phase('Convertir')

const results = await pipeline(
  BATCHES,
  (batch) => {
    const list = batch.items
      .map((it) => {
        const k = kebab(it.name)
        return `  - ${it.name} (${it.cat})
      fuente:  ${REPO}/packages/react/components/${it.cat}/${it.name}.jsx
      tipos:   ${REPO}/packages/react/components/${it.cat}/${it.name}.d.ts
      diseño:  ${REPO}/packages/react/components/${it.cat}/${it.name}.prompt.md
      destino: ${REPO}/packages/angular/src/lib/${it.cat}/${k}/ap-${k}.ts (+ .css, y .html si la plantilla no cabe en una línea)`
      })
      .join('\n')

    return agent(
      `Convierte a Angular 22 estos componentes del design system Aplomo, siguiendo el contrato al pie de la letra.

${contract}

COMPONENTES DE ESTE LOTE:
${list}

Para cada uno: lee el .jsx, el .d.ts y el .prompt.md. El .d.ts te da los nombres y tipos exactos de las
props; el .prompt.md te da la intención de diseño, que debes conservar como TSDoc sobre la clase.

Traduce cada objeto de estilo inline a CSS de componente sin perder ni una declaración y sin cambiar
ni un token. Ojo con los estilos CONDICIONALES del original (padding, borde o color que dependen de
una prop): cada rama tiene que existir en el CSS como su propia regla :host([data-…]), no te quedes
solo con una. Los estados de hover, press y focus pasan a :hover, :active y :focus-within (con
:not(:disabled) donde el original suprimía el estado al estar deshabilitado), y su useState desaparece.

Si algún componente de este lote es un control de formulario con valor, implementa ControlValueAccessor
copiando el patrón exacto de ap-input.ts.

Devuelve la lista de componentes convertidos con sus ficheros y cualquier decisión no obvia.`,
      { label: `convertir:${batch.label}`, phase: 'Convertir', model: 'sonnet', schema: CONVERT_SCHEMA }
    )
  },
  (converted, batch) => {
    if (!converted) return null
    const dirs = batch.items
      .map((it) => `  - ${REPO}/packages/angular/src/lib/${it.cat}/${kebab(it.name)}/  (original: ${REPO}/packages/react/components/${it.cat}/${it.name}.jsx)`)
      .join('\n')

    return agent(
      `Audita y CORRIGE EN SITIO la conversión a Angular de estos componentes de Aplomo. No te limites a
reportar: aplica las correcciones tú mismo con Edit/Write.

${contract}

COMPONENTES A AUDITAR:
${dirs}

Notas que dejó quien convirtió: ${JSON.stringify(converted.converted?.map((c) => ({ c: c.component, n: c.notes })) ?? [])}

Compara cada componente Angular con su original React línea a línea y verifica, en este orden:

1. PARIDAD DE ESTILO — la parte que más falla. Para cada objeto de estilo del .jsx, comprueba que
   TODAS sus declaraciones están en el .css, con el mismo token --ap-* o el mismo literal. Vigila
   en particular los estilos condicionales del original (ternarios sobre una prop): las dos ramas
   tienen que existir. Revisa también camelCase→kebab-case y los números sin unidad que llevan px.
2. CASCADA — un shorthand como "font" resetea sus sub-propiedades, así que una regla posterior o
   más específica con "font" puede estar anulando un font-variation-settings anterior. Comprueba
   que el eje MONO (--ap-vf-data / --ap-vf-prose) sobrevive en todos los estados del componente.
3. PARIDAD DE API — todas las props del .d.ts están como input()/model() con el mismo nombre y el
   mismo valor por defecto; todos los onX están como output() sin el prefijo; ningún output se
   llama "change"; los show<Acción> de 10.1 y las neutralizaciones de 10.2 están puestas.
4. ESTADOS — hover/press/focus como pseudo-clases, con :not(:disabled) donde corresponda. Ningún
   useState de hover/press/focus sobrevivido como signal. Ningún signal input leído en el
   constructor ni en un inicializador de campo.
5. CORRECCIÓN ANGULAR — OnPush; sin "standalone: true"; @if/@for con track y nunca *ngIf/*ngFor;
   inputs readonly; imports declarados; :host con display explícito que reproduzca el de la raíz
   React; guardas de servidor en los effect que tocan window/document/rAF; nada de "any".
   Si el componente pinta una lista con @for cuyo orden importa, comprueba que el binding de valor
   no dependa de hijos que aún no existen (el fallo de <select> + <option>).
6. CONTROLVALUEACCESSOR — si es un control con valor, que esté completo (writeValue,
   registerOnChange, registerOnTouched, setDisabledState) y que la plantilla y el CSS usen
   isDisabled() y no disabled().

Devuelve cada problema encontrado y si lo has arreglado.`,
      { label: `revisar:${batch.label}`, phase: 'Revisar', schema: REVIEW_SCHEMA }
    )
  }
)

const reviews = results.filter(Boolean)
const allFixes = reviews.flatMap((r) => r.fixes ?? [])
const total = BATCHES.reduce((n, b) => n + b.items.length, 0)
log(`Fase ${FASE}: ${total} componentes, ${allFixes.length} correcciones aplicadas en revisión`)

return {
  fase: FASE,
  componentes: total,
  correcciones: allFixes,
  pendientes: reviews.map((r) => r.remaining).filter((s) => s && s.toLowerCase() !== 'ninguno'),
}
