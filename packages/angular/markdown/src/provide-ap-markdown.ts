import { SecurityContext, type Provider } from "@angular/core";
import { marked, type RendererObject } from "marked";
import { SANITIZE, provideMarkdown } from "ngx-markdown";

/**
 * Esquemas que se dejan pasar. Lo que no lleva esquema —`/ruta`, `#ancla`, `relativo.md`— pasa
 * tambien: lo peligroso es un esquema ejecutable, no una ruta.
 */
const ESQUEMA = /^([a-z][a-z0-9+.-]*):/i;
const ESQUEMAS_DE_ENLACE = new Set(["http", "https", "mailto"]);
const ESQUEMAS_DE_IMAGEN = new Set(["http", "https"]);
/** Mapas de bits y nada mas: un `data:image/svg+xml` lleva marcado dentro. */
const DATOS_DE_IMAGEN = /^data:image\/(png|jpeg|jpg|gif|webp|avif)[;,]/i;

/**
 * `java&#9;script:alert(1)` es un enlace ejecutable que sobrevive a una comparacion ingenua: el
 * navegador ignora los caracteres de control y los espacios al resolver el esquema. Se quitan
 * antes de mirar.
 */
const sinControles = (url: string): string =>
  url.replace(/[\u0000-\u0020\u007f-\u00a0\u200b-\u200d\ufeff]/g, "");

function esquemaDe(url: string): string | null {
  const encontrado = ESQUEMA.exec(url);
  return encontrado === null ? null : encontrado[1].toLowerCase();
}

function enlaceSeguro(href: string): boolean {
  const esquema = esquemaDe(sinControles(href));
  return esquema === null || ESQUEMAS_DE_ENLACE.has(esquema);
}

function imagenSegura(href: string): boolean {
  const limpia = sinControles(href);
  if (DATOS_DE_IMAGEN.test(limpia)) return true;
  const esquema = esquemaDe(limpia);
  return esquema === null || ESQUEMAS_DE_IMAGEN.has(esquema);
}

/**
 * Primera capa de saneado: lo peligroso no llega a generarse.
 *
 * Lo que pinta `ap-markdown` viene de un modelo de lenguaje, o sea que no es de fiar.
 * `ngx-markdown` renderiza por `innerHTML`, asi que en vez de confiar en que el saneador de
 * Angular lo limpie despues, aqui se recorta lo que `marked` puede llegar a emitir. El saneador
 * de Angular sigue activo detras (`SecurityContext.HTML`), pero como red y no como unica defensa.
 *
 * Es un objeto plano y no una subclase de `Renderer` a proposito: `marked.use()` solo mira las
 * propiedades PROPIAS del objeto, y los metodos de una clase viven en el prototipo. Devolver
 * `false` le dice a marked que use su implementacion normal.
 */
const RENDERER: RendererObject = {
  /** El HTML crudo de la entrada no se renderiza. */
  html() {
    return "";
  },
  /** Un esquema no permitido degrada el enlace a texto: se lee, no se pulsa. */
  link(token) {
    return enlaceSeguro(token.href) ? false : this.parser.parseInline(token.tokens);
  },
  image(token) {
    return imagenSegura(token.href) ? false : "";
  },
};

/**
 * `marked` es un singleton de modulo y `marked.use()` ENVUELVE lo que ya hubiera en vez de
 * sustituirlo, asi que llamarlo dos veces duplica cada invocacion del renderer. Registrar una
 * sola vez no es una optimizacion: sin esta guarda, `ngx-markdown` —que llama a `use()` en cada
 * parseo— hace que el coste por enlace crezca con el numero de mensajes ya pintados. Medido:
 * pasando el renderer por `MARKED_OPTIONS`, en el parseo 50 cada enlace invocaba `link()` 51
 * veces; registrandolo aqui se queda en una.
 */
let registrado = false;

/**
 * Providers de `ap-markdown`. Va una sola vez, en la raiz de la aplicacion:
 *
 * ```ts
 * bootstrapApplication(App, { providers: [provideApMarkdown()] });
 * ```
 *
 * Ojo: registra un renderer en la instancia global de `marked`. Si la aplicacion usa `marked`
 * por su cuenta, tambien vera el HTML crudo descartado y los esquemas ejecutables recortados.
 */
export function provideApMarkdown(): Provider[] {
  if (!registrado) {
    registrado = true;
    marked.use({ renderer: RENDERER });
  }

  return provideMarkdown({
    // Segunda capa. Es el valor por defecto de ngx-markdown; se declara explicito para que un
    // cambio suyo no nos lo quite sin que nadie se entere. NUNCA `SecurityContext.NONE`.
    sanitize: { provide: SANITIZE, useValue: SecurityContext.HTML },
  });
}
