/**
 * Normaliza una longitud CSS a la manera de React.
 *
 * En React, `width={180}` salia como `width: 180px` porque el propio React anade la unidad a
 * las propiedades de longitud. En Angular no hay nada equivalente, y ademas una prop puesta
 * como atributo estatico en la plantilla (`<ap-skeleton width="180">`) llega como la CADENA
 * "180": sin normalizar produce `width: 180`, que es CSS invalido y el navegador descarta en
 * silencio. Solo funcionaria `[width]="180"`, que es una trampa para quien la usa.
 *
 * Un valor que ya trae unidad, porcentaje, `calc()` o una `var()` se devuelve intacto.
 */
export function cssLength(value: number | string | null | undefined): string | null {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return `${value}px`;

  const trimmed = value.trim();
  return /^-?\d+(?:\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
}
