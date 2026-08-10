# UI kit — Acceso y errores

Pantallas sin sesion ni shell. El selector negro de arriba es andamio del kit, no parte del producto.

| Pantalla | Contenido |
| --- | --- |
| Login | Cuenta + contrasena, error de credenciales con intentos restantes, SAML como alternativa |
| 2FA | `OtpInput` de seis celdas en MONO 1, caducidad del codigo, clave de recuperacion |
| Sesion | Confirmacion con `Steps` y caducidad explicita; enlaza a la consola |
| 404 / 403 / 500 / 503 | `PageError` — el codigo a 48px en MONO 1, copia propia y siempre una salida |

Reglas aplicadas: el codigo de error es el dato mas grande de la pantalla; el 500 muestra identificador copiable para adjuntarlo a la incidencia; el 503 muestra fin previsto de la ventana. Sin ilustraciones, sin disculpas y sin humor.
