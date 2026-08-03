# UI kit — Página de usuario

Cuatro pestañas sobre el mismo shell del panel: **Perfil**, **Preferencias**, **Seguridad** y **Avisos**.

- Formularios en `FormSection`: explicación a la izquierda, campos a la derecha, separados por borde de 1px y sin tarjetas anidadas. La ayuda vive junto al campo, nunca en un tooltip.
- `FormActions` entra desde abajo en 250 ms al primer cambio y dice cuántos campos están sin guardar.
- Cada entrada de usuario usa el campo correcto: `UnitInput` para umbrales, `DurationInput` para silencios, `OtpInput` para el segundo factor, `Radio` para la vista por defecto, `Switch` para canales.
- Seguridad muestra sesiones activas en `DataTable` con IP en MONO 1 y revocación por fila, más `AuditTimeline` + `ConfigDiff` con todo cambio de la cuenta.
- La identidad se compone con `Avatar` (iniciales, sin foto) y `CopyValue` para la cuenta.
