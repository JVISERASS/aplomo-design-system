export const meta = {
  name: 'aplomo-angular-fase2',
  description: 'Convierte a Angular los ocho componentes difíciles de Aplomo, con verificación adversarial',
  phases: [
    { title: 'Convertir', detail: 'un agente por componente, opus' },
    { title: 'Refutar', detail: 'dos escépticos por componente, lentes distintas' },
    { title: 'Arreglar', detail: 'aplica lo confirmado' },
  ],
}

const REPO = '/Users/javierviseras/Documents/aplomo-desing-system'

const HARD = [
  {
    cat: 'data', name: 'DataTable', dir: 'data-table',
    dificultad: `Navegación de teclado (↑↓ ↵ Esc) sobre el contenedor, refs por celda para el elemento
compartido, render props por columna, y grid-template-columns calculado.`,
    guia: `- El listener de teclado va en el host: host: { "(keydown)": "onKey($event)", "[attr.tabindex]": "keyboard() ? 0 : null" }.
- columns[].render(row) => la interfaz de columna mantiene "render?: (row: T) => string" para texto
  Y añade "cellTemplate?: TemplateRef<{ $implicit: T }>" para celdas ricas; en la plantilla,
  @if (col.cellTemplate) { <ng-container *ngTemplateOutlet="col.cellTemplate; context: { $implicit: row }" /> }
  @else { {{ col.render ? col.render(row) : row[col.key] }} }.
  Ojo: ngTemplateOutlet necesita importar NgTemplateOutlet en imports.
- cells.current[r.id] (el ref que se pasa a onSelectRow y a rowRef) se resuelve con una plantilla
  de referencia por fila o con viewChildren(); lo que importa es que onSelectRow siga emitiendo el
  elemento de la celda marcada con "shared", porque SharedValue.capture depende de él.
- El grid se calcula igual y va en [style.grid-template-columns].
- La clase "ap-rise" y --ap-delay de las filas se conservan tal cual.
- rowRef era un callback-prop: pásalo a un output rowRef con { id, element } o mantenlo como
  función de entrada si el .d.ts así lo declara; documenta la decisión.`,
  },
  {
    cat: 'navigation', name: 'CommandPalette', dir: 'command-palette',
    dificultad: `Listener global de teclado en window, autofocus del input al abrir, filtrado derivado
y reseteo de estado en cada apertura.`,
    guia: `- El filtrado es computed(): hits = computed(() => items().filter(...).slice(0, 8)).
- El listener global va con host: { "(document:keydown)": "onKey($event)" } y dentro se sale
  pronto si !open(). Así Angular gestiona el alta y la baja y no hay fugas.
- El reseteo al abrir (q="", i=0, focus) va en un effect() que lee open(): si pasa a true,
  resetea las señales y enfoca con afterNextRender o un viewChild + setTimeout 0, con guarda de
  servidor. Recuerda que un effect puede escribir señales sin opciones especiales.
- El original hace slice(0,8) DESPUÉS de filtrar: respétalo, y que el índice i se acote a hits().length - 1.`,
  },
  {
    cat: 'motion', name: 'SharedValue', dir: 'shared-value',
    dificultad: `FIRMA 3. FLIP con un Map a nivel de módulo, element.animate() y un método estático
capture() que es API pública del sistema.`,
    guia: `- Mantén el Map a nivel de módulo y el método "static capture(key, el)" con LA MISMA FIRMA:
  ui_kits y DataTable lo llaman así. No lo conviertas en servicio inyectable.
- La animación va en un effect() que lee sharedKey(), con guarda de servidor y comprobando que
  element.animate existe.
- Conserva exactos: la ventana de 800ms, el cálculo de dx/dy/s, transformOrigin "left center",
  opacidad .6 -> 1, duración 400 y easing cubic-bezier(0.2,0,0,1).
- Date.now() se usa para la marca de tiempo del origen: consérvalo.`,
  },
  {
    cat: 'motion', name: 'Stagger', dir: 'stagger',
    dificultad: `FIRMA 2. React.Children.toArray no tiene equivalente: hay que estampar los hijos
proyectados desde el DOM.`,
    guia: `- <ng-content /> y, en afterNextRender, recorre los hijos ELEMENTO del host (host.children),
  y a cada uno le pones la clase "ap-rise" y el custom property --ap-delay con
  Math.min(i, max() - 1) * step() + "ms".
- Es de una sola vez, igual que el original (que solo se ejecuta en el render). No pongas
  MutationObserver ni lo re-ejecutes en cada cambio.
- La prop "as" (el elemento contenedor) no tiene traducción directa: el host ES el contenedor.
  Documenta que se elimina y que el consumidor pone display/rol en el host; anótalo en tus notas.
- Guarda de servidor obligatoria.`,
  },
  {
    cat: 'assistant', name: 'Composer', dir: 'composer',
    dificultad: `Textarea que se autoajusta leyendo scrollHeight, Enter/Shift+Enter, y un botón
primario cuyo estado depende de value/busy/disabled.`,
    guia: `- El autosize va en un effect() que lee value(): el.style.height = "auto" y luego
  el.style.height = Math.min(el.scrollHeight, 160) + "px", con viewChild del textarea y guarda
  de servidor. El maxHeight 160 también está en el CSS: consérvalo en los dos sitios como el original.
- Enter sin shift envía y hace preventDefault; Shift+Enter hace salto de línea.
- El botón usa ApButton (selector de atributo): <button apButton variant="primary" [disabled]="...">.
- onAttach es render condicionado por callback: input showAttach + output attach (CONVENTIONS 10.1).
- El foco del contenedor pasa a :focus-within en el CSS; el useState de focus desaparece.`,
  },
  {
    cat: 'data', name: 'LogStream', dir: 'log-stream',
    dificultad: `Auto-scroll al final cada vez que llegan líneas nuevas.',`,
    guia: `- El anclaje va en afterRenderEffect (o afterNextRender dentro de un effect que lea lines()):
  si follow(), el.scrollTop = el.scrollHeight. Tiene que ejecutarse DESPUÉS de que el @for haya
  pintado las líneas nuevas, que es justo la diferencia entre effect y afterRenderEffect.
- height es un input numérico que va a [style.height.px].
- toneOf(level) se traduce a una clase o a un data-attribute por nivel, con el color en CSS.
  No pongas el color con [style.color] si puede vivir en el CSS.
- Conserva white-space: pre-wrap y word-break: break-word del texto.`,
  },
  {
    cat: 'forms', name: 'OtpInput', dir: 'otp-input',
    dificultad: `Array de refs a las casillas, foco que avanza y retrocede solo, y pegado que
reparte el código. Además es un control de formulario: lleva ControlValueAccessor.`,
    guia: `- viewChildren() para las casillas; el foco se mueve con .nativeElement.focus().
- Reglas exactas del original: al escribir, se queda con el ÚLTIMO dígito (replace(/\\D/g,"").slice(-1))
  y avanza; Backspace en casilla vacía retrocede; ArrowLeft/ArrowRight mueven.
- El pegado hace preventDefault y reparte el texto limpio de no-dígitos, cortado a length.
- Implementa ControlValueAccessor como ap-input (el valor es el string completo).
- length es numérico e itera con @for sobre un computed que genere el array de índices.`,
  },
  {
    cat: 'feedback', name: 'FileDrop', dir: 'file-drop',
    dificultad: `Eventos de arrastre, un input file oculto que se dispara por click, y lista de
ficheros con acción de quitar.`,
    guia: `- Los eventos de arrastre van en el botón de la plantilla, no en el host: (dragover), (dragleave)
  y (drop), con preventDefault en dragover y drop, y una señal "over" para el estado visual.
  Ese "over" NO es un hover: es estado real y se queda como signal.
- El input file oculto se dispara con un viewChild y .click().
- onFiles emite un File[]; onRemove es render condicionado por callback: input showRemove + output
  remove (CONVENTIONS 10.1).
- Usa ApIcon y ApDataValue, ya convertidos.`,
  },
]

const CONVERT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['component', 'files', 'decisiones', 'riesgos'],
  properties: {
    component: { type: 'string' },
    files: { type: 'array', items: { type: 'string' } },
    decisiones: { type: 'string', description: 'las decisiones de traducción que tomaste y por qué' },
    riesgos: { type: 'string', description: 'qué es lo más probable que hayas roto' },
  },
}

const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['refutado', 'fallos'],
  properties: {
    refutado: { type: 'boolean', description: 'true si encontraste al menos un fallo real' },
    fallos: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['que', 'porque', 'gravedad'],
        properties: {
          que: { type: 'string' },
          porque: { type: 'string', description: 'el escenario concreto en que se rompe' },
          gravedad: { type: 'string', enum: ['alta', 'media', 'baja'] },
        },
      },
    },
  },
}

const FIX_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['aplicados', 'descartados'],
  properties: {
    aplicados: { type: 'array', items: { type: 'string' } },
    descartados: { type: 'array', items: { type: 'string' }, description: 'fallos reportados que NO eran reales, con el motivo' },
  },
}

const contract = `
CONTEXTO OBLIGATORIO:
1. ${REPO}/packages/angular/CONVENTIONS.md — el contrato. Es la autoridad.
2. Componentes ya convertidos y revisados como referencia:
   ${REPO}/packages/angular/src/lib/core/button/ap-button.ts, core/icon/ap-icon.ts (effect + DOM),
   data/data-value/ap-data-value.ts (rAF + guarda de servidor), forms/input/ap-input.ts (CVA).
3. ${REPO}/packages/tokens/tokens/ — los tokens --ap-*.

REGLAS DURAS:
- Escribe SOLO dentro del directorio del componente que te toca. Nada de src/public-api.ts
  (autogenerado), ni de otros componentes, ni de configuración. No hagas commits.
- No ejecutes builds ni tests: se verifican en bloque después.
`

const LENTES = [
  {
    key: 'comportamiento',
    prompt: `la LENTE DE COMPORTAMIENTO: coge el .jsx original y recorre cada interacción posible
(cada tecla, cada clic, cada cambio de prop, el primer render, el caso de lista vacía). Para cada una,
¿el componente Angular hace EXACTAMENTE lo mismo? Busca sobre todo condiciones de carrera con el
orden de renderizado de Angular, efectos que leen el DOM antes de que exista, y estado que se
reinicia cuando no debería (o que no se reinicia cuando sí).`,
  },
  {
    key: 'ciclo-de-vida',
    prompt: `la LENTE DE CICLO DE VIDA Y FUGAS: ¿se da de baja todo lo que se da de alta (listeners,
timers, rAF, animaciones)? ¿Hay algún signal input leído en el constructor o en un inicializador de
campo, donde todavía no tiene valor? ¿Algún effect que se re-ejecute en bucle porque escribe una
señal que él mismo lee? ¿Rompe en servidor por tocar window/document/rAF sin guarda? ¿Sobrevive a que
el componente se destruya en mitad de una animación?`,
  },
]

phase('Convertir')

const results = await pipeline(
  HARD,
  (c) =>
    agent(
      `Convierte a Angular 22 el componente ${c.name} del design system Aplomo. Es uno de los ocho
difíciles: tómate el tiempo que haga falta y no lo trates como una traducción mecánica.

${contract}

COMPONENTE:
  fuente:  ${REPO}/packages/react/components/${c.cat}/${c.name}.jsx
  tipos:   ${REPO}/packages/react/components/${c.cat}/${c.name}.d.ts
  diseño:  ${REPO}/packages/react/components/${c.cat}/${c.name}.prompt.md
  destino: ${REPO}/packages/angular/src/lib/${c.cat}/${c.dir}/ap-${c.dir}.ts (+ .html, + .css)

POR QUÉ ES DIFÍCIL:
${c.dificultad}

GUÍA DE TRADUCCIÓN (seguirla, no reinventarla):
${c.guia}

Además del contrato general: porta todas las declaraciones de estilo sin perder ninguna ni cambiar
un token, y conserva el comentario de intención de diseño del original como TSDoc.

Devuelve las decisiones de traducción que tomaste y, con honestidad, qué es lo más probable que
hayas roto.`,
      { label: `convertir:${c.name}`, phase: 'Convertir', schema: CONVERT_SCHEMA }
    ),

  (converted, c) => {
    if (!converted) return null
    return parallel(
      LENTES.map((lente) => () =>
        agent(
          `Intenta REFUTAR esta conversión a Angular. Tu trabajo es encontrar en qué se rompe, no
felicitarla. Si dudas, inclínate por señalarlo.

${contract}

COMPONENTE: ${c.name}
  original: ${REPO}/packages/react/components/${c.cat}/${c.name}.jsx
  puerto:   ${REPO}/packages/angular/src/lib/${c.cat}/${c.dir}/

Lo que dice quien lo convirtió:
  decisiones: ${converted.decisiones}
  riesgos que admite: ${converted.riesgos}

Examínalo con ${lente.prompt}

No propongas mejoras de estilo ni preferencias personales: solo fallos reales, con el escenario
concreto en que se manifiestan. Si no encuentras ninguno, dilo (refutado: false) — un informe
inventado es peor que uno vacío.`,
          { label: `refutar:${c.name}:${lente.key}`, phase: 'Refutar', schema: VERDICT_SCHEMA }
        )
      )
    ).then((verdicts) => ({ c, converted, verdicts: verdicts.filter(Boolean) }))
  },

  (payload) => {
    if (!payload) return null
    const { c, verdicts } = payload
    const fallos = verdicts.flatMap((v) => v.fallos ?? [])
    if (!fallos.length) {
      log(`${c.name}: las dos lentes no encontraron fallos`)
      return { component: c.name, aplicados: [], descartados: [] }
    }
    return agent(
      `Dos revisores han intentado refutar la conversión de ${c.name} a Angular. Evalúa cada fallo
reportado: si es real, ARRÉGLALO EN SITIO con Edit/Write; si no lo es, descártalo diciendo por qué.

${contract}

COMPONENTE: ${c.name}
  original: ${REPO}/packages/react/components/${c.cat}/${c.name}.jsx
  puerto:   ${REPO}/packages/angular/src/lib/${c.cat}/${c.dir}/

FALLOS REPORTADOS:
${fallos.map((f, i) => `${i + 1}. [${f.gravedad}] ${f.que}\n   escenario: ${f.porque}`).join('\n')}

No apliques un arreglo sin comprobar antes, contra el .jsx original y contra CONVENTIONS.md, que el
fallo es real. Un revisor puede equivocarse, y romper algo que funcionaba por seguir un informe
erróneo es peor que dejar el informe sin atender.`,
      { label: `arreglar:${c.name}`, phase: 'Arreglar', schema: FIX_SCHEMA }
    ).then((fix) => ({ component: c.name, ...(fix ?? {}) }))
  }
)

const done = results.filter(Boolean)
log(`Fase 2: ${done.length}/${HARD.length} componentes difíciles procesados`)

return {
  componentes: done.map((r) => ({
    componente: r.component,
    arreglados: r.aplicados ?? [],
    descartados: r.descartados ?? [],
  })),
}
