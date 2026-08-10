# Kits de interfaz

Las cuatro superficies completas de Aplomo (`admin`, `assistant`, `access`, `account`), portadas
a Angular.

La versión React las sirve como HTML estático con React por CDN y babel-standalone. Ese arnés no
se puede replicar en Angular, que necesita compilación, así que aquí viven como **stories a
pantalla completa** (`parameters: { layout: "fullscreen" }`) dentro del Storybook de la librería:
quedan navegables sin necesidad de una aplicación aparte.

Un kit por directorio, con sus vistas como componentes y un único `*.stories.ts` que monta la
superficie entera.
