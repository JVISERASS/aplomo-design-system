export const meta = {
  name: 'aplomo-angular-stories',
  description: 'Porta las stories de Storybook de React a Angular, por categoría',
  phases: [{ title: 'Portar', detail: 'un agente por categoría, sonnet' }],
}

const REPO = '/Users/javierviseras/Documents/aplomo-desing-system'
const input = typeof args === 'string' ? JSON.parse(args) : args
const LOTES = input.lotes

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['portadas', 'notas'],
  properties: {
    portadas: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['componente', 'stories'],
        properties: {
          componente: { type: 'string' },
          stories: { type: 'number', description: 'cuántas stories exporta' },
        },
      },
    },
    notas: { type: 'string', description: 'lo que no se pudo expresar igual; "ninguna" si está limpio' },
  },
}

phase('Portar')

const resultados = await parallel(
  LOTES.map((lote) => () =>
    agent(
      `Porta a Angular estas stories de Storybook del design system Aplomo.

CONTEXTO OBLIGATORIO — léelo antes de escribir nada:
1. ${REPO}/packages/angular/STORIES.md — el contrato. Es la autoridad.
2. Las tres stories ya portadas, que son la referencia literal:
   - ${REPO}/packages/angular/src/lib/core/button/ap-button.stories.ts (selector de atributo)
   - ${REPO}/packages/angular/src/lib/core/badge/ap-badge.stories.ts (children -> contenido proyectado)
   - ${REPO}/packages/angular/src/lib/layout/panel/ap-panel.stories.ts (slot con nombre)

COMPONENTES DE ESTE LOTE:
${lote.items
  .map((it) => {
    const k = kebab(it.name)
    return `  - ${it.name} (${it.cat})
      original: ${REPO}/packages/react/components/${it.cat}/${it.name}.stories.tsx
      destino:  ${REPO}/packages/angular/src/lib/${it.cat}/${k}/ap-${k}.stories.ts
      API:      ${REPO}/packages/angular/src/lib/${it.cat}/${k}/ap-${k}.ts
      plantilla:${REPO}/packages/angular/src/lib/${it.cat}/${k}/ap-${k}.html (si existe: te dice qué slots hay)`
  })
  .join('\n')}

Para cada uno: lee la story original, lee el .ts del componente Angular para saber los nombres y
tipos exactos de sus inputs, y lee su .html si lo tiene para saber qué slots de contenido admite.

Conserva el title y los nombres y el orden de las stories exactamente como en el original, y copia
los datos de ejemplo tal cual: son el catálogo del sistema, no relleno.

REGLAS DURAS:
- Escribe SOLO los ficheros .stories.ts que te tocan. No toques ningún componente, ni el barril,
  ni configuración. No ejecutes builds ni tests: se verifican en bloque después. No hagas commits.

Devuelve cuántas stories exporta cada componente y cualquier cosa que no hayas podido expresar
igual que en el original.`,
      { label: `stories:${lote.label}`, phase: 'Portar', model: 'sonnet', schema: SCHEMA }
    )
  )
)

const ok = resultados.filter(Boolean)
const total = ok.flatMap((r) => r.portadas ?? []).reduce((n, p) => n + p.stories, 0)
log(`${ok.flatMap((r) => r.portadas ?? []).length} componentes, ${total} stories`)

return {
  componentes: ok.flatMap((r) => r.portadas ?? []),
  notas: ok.map((r) => r.notas).filter((n) => n && n.toLowerCase() !== 'ninguna'),
}
