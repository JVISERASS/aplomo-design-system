import { Component, signal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ApMarkdown } from "../../markdown/src/ap-markdown";
import { provideApMarkdown } from "../../markdown/src/provide-ap-markdown";

@Component({
  imports: [ApMarkdown],
  template: `<ap-markdown [data]="md()" />`,
})
class MarkdownHost {
  readonly md = signal("");
}

/** Monta el host con el markdown dado y devuelve el HTML ya renderizado y saneado. */
async function pintar(md: string): Promise<{ html: string; raiz: HTMLElement }> {
  TestBed.configureTestingModule({ providers: [provideApMarkdown()] });
  const fixture = TestBed.createComponent(MarkdownHost);
  fixture.componentInstance.md.set(md);
  fixture.detectChanges();
  await fixture.whenStable();
  fixture.detectChanges();
  await fixture.whenStable();
  const raiz = fixture.nativeElement.querySelector("ap-markdown") as HTMLElement;
  return { html: raiz.innerHTML, raiz };
}

describe("markdown", () => {
  afterEach(() => TestBed.resetTestingModule());

  it("ApMarkdown monta y pinta prosa", async () => {
    const { raiz } = await pintar("# Incidencia\n\nEl p95 subio a **184 ms**.");
    expect(raiz).toBeTruthy();
    expect(raiz.querySelector("h1")?.textContent).toContain("Incidencia");
    expect(raiz.querySelector("strong")?.textContent).toBe("184 ms");
  });

  it("pinta bloques de codigo y tablas de GFM", async () => {
    const { raiz } = await pintar(
      "```bash\nkubectl get pods\n```\n\n| region | p95 |\n| --- | --- |\n| eu | 184 |"
    );
    const code = raiz.querySelector("pre code");
    expect(code?.textContent).toContain("kubectl get pods");
    expect(code?.className).toContain("language-bash");
    expect(raiz.querySelectorAll("table th").length).toBe(2);
    expect(raiz.querySelectorAll("table td").length).toBe(2);
  });

  // --- Los cinco vectores. Contenido de un modelo de lenguaje: no es de fiar. ---

  it("descarta el HTML crudo: <script>", async () => {
    const { html, raiz } = await pintar("Antes\n\n<script>alert(1)</script>\n\nDespues");
    expect(raiz.querySelector("script")).toBeNull();
    expect(html).not.toContain("alert(1)");
    // El texto de alrededor sigue ahi: se recorta el HTML, no el mensaje.
    expect(raiz.textContent).toContain("Antes");
    expect(raiz.textContent).toContain("Despues");
  });

  it("descarta el HTML crudo: <img onerror>", async () => {
    const { html, raiz } = await pintar('<img src="x" onerror="alert(1)">');
    expect(raiz.querySelector("img")).toBeNull();
    expect(html).not.toContain("onerror");
  });

  it("degrada a texto un enlace javascript:", async () => {
    const { html, raiz } = await pintar("[pulsa aqui](javascript:alert(1))");
    expect(raiz.querySelector("a")).toBeNull();
    expect(html).not.toContain("javascript:");
    expect(raiz.textContent).toContain("pulsa aqui");
  });

  it("degrada a texto un enlace data:", async () => {
    const { html, raiz } = await pintar("[informe](data:text/html;base64,PHNjcmlwdD4=)");
    expect(raiz.querySelector("a")).toBeNull();
    expect(html).not.toContain("data:text/html");
  });

  it("descarta una imagen con esquema javascript:", async () => {
    const { html, raiz } = await pintar("![grafica](javascript:alert(1))");
    expect(raiz.querySelector("img")).toBeNull();
    expect(html).not.toContain("javascript:");
  });

  // --- El esquema se compara tras normalizar, no en crudo ---

  it("el esquema se compara sin distinguir mayusculas", async () => {
    const { raiz } = await pintar("[x](JaVaScRiPt:alert(1))");
    expect(raiz.querySelector("a")).toBeNull();
  });

  it("bloquea esquemas ejecutables que no son javascript:", async () => {
    const { raiz } = await pintar("[x](vbscript:msgbox(1))");
    expect(raiz.querySelector("a")).toBeNull();
  });

  // Este es el que justifica normalizar: marked SI lo parsea como enlace, y un chequeo ingenuo
  // no encontraria esquema (el ancho cero rompe el patron) y lo tomaria por una ruta relativa.
  it("no se cuela un javascript: partido por un caracter de ancho cero", async () => {
    const { raiz } = await pintar("[x](java\u200bscript:alert(1))");
    expect(raiz.querySelector("a")).toBeNull();
  });

  it("no se cuela un javascript: partido por un espacio duro", async () => {
    const { raiz } = await pintar("[x](java\u00a0script:alert(1))");
    expect(raiz.querySelector("a")).toBeNull();
  });

  // --- Lo legitimo sigue funcionando ---

  it("conserva los enlaces http(s) y las rutas relativas", async () => {
    const { raiz } = await pintar("[a](https://example.com/x) y [b](/panel/servicios)");
    const hrefs = [...raiz.querySelectorAll("a")].map((a) => a.getAttribute("href"));
    expect(hrefs).toEqual(["https://example.com/x", "/panel/servicios"]);
  });

  it("conserva las imagenes https", async () => {
    const { raiz } = await pintar("![g](https://example.com/g.png)");
    expect(raiz.querySelector("img")?.getAttribute("src")).toBe("https://example.com/g.png");
  });
});
