# StarLift — Gym Tracker

Aplicación web para el seguimiento de entrenamientos de fuerza e hipertrofia. Permite compartir rutinas con notas técnicas fijadas y ejecutar los entrenamientos sin distracciones.

- **Demo en GitHub Pages:** https://dylaanbh9.github.io/starlift/

---

## Enlaces de la Entrega (Órbita 1)

1. **Tablero de Investigación (FigJam):** [Enlace al FigJam](https://www.figma.com/board/vNkTZqsDbqTOO8d2rqQYn2/StarLift?version-id=2411695622180585569&node-id=44-223&t=AFJSUkfzpqqzLQHJ-0)
2. **Wireframes y Prototipo (Figma Design):** [Enlace al Figma](https://www.figma.com/design/s6KViUM1yLafNmhchZWnOL/StarLift---Wireframes-y-Prototipo?version-id=2411682016770904965&node-id=4-6&p=f&t=zUTwnMUUcRfObaBf-0)
3. **Prototipo Interactivo (Modo Presentación):** [Enlace al Prototipo de Figma](https://www.figma.com/proto/s6KViUM1yLafNmhchZWnOL/StarLift---Wireframes-y-Prototipo?node-id=596-307&p=f&t=9RnCBpdzOHqtZjeC-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A6)
4. **Repositorio de Código (GitHub):** [Enlace a este Repositorio](https://github.com/DylaanBH9/starlift)

## Enlaces de la Entrega (Órbita 2)

1. **Resumen de Entrega:** [ORBITA2.md](ORBITA2.md)
2. **Diseño en Figma (Versión "Entrega Órbita 2"):** [Ver Archivo en Figma](https://www.figma.com/design/s6KViUM1yLafNmhchZWnOL/StarLift---Wireframes-y-Prototipo?version-id=2419558822526903939&node-id=670-783&p=f&t=27vmHQb65HxFgBUV-0)
3. **Prototipo Interactivo Navegable:** [Probar Prototipo en Figma](https://www.figma.com/proto/s6KViUM1yLafNmhchZWnOL/StarLift---Wireframes-y-Prototipo?node-id=700-11867&p=f&t=L3qaizzUrlfAALKt-1&scaling=min-zoom&content-scaling=fixed&page-id=670%3A783&starting-point-node-id=700%3A11867&show-proto-sidebar=1)

---

## Estructura de la Documentación
- [Brief Completo del Proyecto](BRIEF.md)
- [Registro de Uso de IA](CHANGELOG.md)

---

## Planificación del Desarrollo SPA (JavaScript)

### 1. Backlog del Proyecto (ordenado por prioridad)

| Prioridad | Historia / Funcionalidad | Estado |
| :--- | :--- | :--- |
| 1 | **Estructura del proyecto, menú de navegación y datos base** (`datos.js`, `ui.js`, `main.js`) | Completado |
| 2 | **Listado dinámico de rutinas** en la comunidad cruzando categorías y creadores | Completado |
| 3 | **Vista de detalle de rutina** con ejercicios, series, repeticiones y notas técnicas fijadas | Completado |
| 4 | **Capa de persistencia (`almacen.js`) y validación (`validacion.js`)** en `localStorage` y cookies | Completado |
| 5 | **Registro, edición y listado de usuarios** en `login.html` sin guardar contraseñas en claro | Completado |
| 6 | **Formulario de contacto y soporte** en `contacto.html` con validación cruzada, cookie e historial | Completado |
| 7 | **Filtrado y búsqueda en tiempo real** por tipo de entrenamiento, nivel y texto | Pendiente |
| 8 | **Formulario de creación y edición de rutinas** con validación en cliente y ejercicios dinámicos | Pendiente |
| 9 | **Persistencia local de rutinas** propias y guardadas en `biblioteca.html` | Pendiente |
| 10 | **Modo Tracker interactivo** con cronómetro de sesión y progreso de series completadas | Pendiente |
| 11 | **Sistema de reseñas y valoraciones** en la ficha de cada rutina | Pendiente |

### 2. Mapa de Pantallas

| Pantalla | Archivo | Propósito | Datos que muestra |
| :--- | :--- | :--- | :--- |
| **Portada (Landing)** | `index.html` | Presentación de la plataforma y acceso rápido | Propuesta de valor, vista previa del Tracker y rutinas destacadas |
| **Comunidad (Listado)** | `comunidad.html` | Explorador principal de entrenamientos públicos | Listado de rutinas con categoría, nivel, creador, ejercicios resumidos y valoraciones |
| **Detalle de Rutina** | `detalle-rutina.html` | Ficha técnica completa de una rutina seleccionada | Título, categoría, duración, autor, lista completa de ejercicios con series/reps/descanso/notas técnicas y reseñas |
| **Crear Rutina** | `crear-rutina.html` | Constructor de nuevos entrenamientos | Formulario de metadatos (nombre, categoría, nivel, visibilidad) y bloques dinámicos de ejercicios |
| **Mi Biblioteca** | `biblioteca.html` | Colección personal de rutinas creadas y guardadas | Rutinas propias y guardadas de la comunidad con acceso directo al Tracker |
| **Modo Tracker** | `tracker.html` | Ejecución guiada del entrenamiento serie a serie | Ejercicio activo, nota técnica fijada, carga objetivo, cronómetro y barra de progreso |
| **Acceso y Registro** | `login.html` | Inicio de sesión, alta/edición de cuentas y gestión de usuarios | Selector de modo, formularios de acceso/registro, modal de condiciones y vista de **Usuarios** |
| **Soporte y Contacto** | `contacto.html` | Reporte de incidencias y propuestas de rutinas | Formulario de contacto con contador de caracteres, autocompletado por cookie y vista de **Mensajes enviados** |

---

## Hito 2

### Mapa de validación

| Formulario | Campo | Regla de validación | Mensaje de error |
| :--- | :--- | :--- | :--- |
| **Registro** (`login.html`) | Nombre de usuario | Obligatorio (`required`), entre `minlength` (3) y `maxlength` (20) caracteres, sin espacios (`/\s/`) | *El nombre de usuario es obligatorio.* / *Mínimo 3 caracteres.* / *Máximo 20 caracteres.* / *No puede contener espacios.* |
| **Registro** (`login.html`) | Correo electrónico | Obligatorio (`required`), expresión regular `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` | *El correo electrónico es obligatorio.* / *Introduce un correo válido (ej. atleta@starlift.es).* |
| **Registro** (`login.html`) | Contraseña | Obligatorio (`required`), mínimo `minlength` (8) caracteres, al menos 1 mayúscula y 1 número | *La contraseña es obligatoria.* / *Mínimo 8 caracteres.* / *Debe incluir al menos una mayúscula.* / *Debe incluir al menos un número.* |
| **Registro** (`login.html`) | Repetir contraseña | Obligatorio (`required`), debe coincidir exactamente con el campo Contraseña | *Repite la contraseña.* / *Las contraseñas no coinciden.* |
| **Registro** (`login.html`) | Fecha de nacimiento | Obligatorio (`required`), formato ISO `AAAA-MM-DD`, entre `min` (`1920-01-01`) y `max` (hoy, no futura) y edad mínima de 16 años | *La fecha de nacimiento es obligatoria.* / *La fecha no puede ser futura.* / *La fecha debe ser posterior a 1920-01-01.* / *Debes tener al menos 16 años para registrarte.* |
| **Registro** (`login.html`) | Condiciones de uso | Obligatorio (`required`, `checked === true`) | *Debes aceptar las condiciones de uso.* |
| **Contacto** (`contacto.html`) | Nombre | Obligatorio (`required`), entre `minlength` (2) y `maxlength` (60) caracteres | *El nombre es obligatorio.* / *Mínimo 2 caracteres.* / *Máximo 60 caracteres.* |
| **Contacto** (`contacto.html`) | Correo electrónico | Obligatorio (`required`), expresión regular `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` | *El correo electrónico es obligatorio.* / *Introduce un correo válido (ej. atleta@starlift.es).* |
| **Contacto** (`contacto.html`) | Teléfono | Opcional por defecto; pasa a obligatorio si se marca «Prefiero que me llaméis». Si se rellena o es obligatorio, regex `/^(?:\+34[\s-]?)?[6789]\d{2}(?:[\s-]?\d{3}){2}$/` | *El teléfono es obligatorio si prefieres que te llamemos.* / *Introduce un teléfono válido de 9 dígitos.* |
| **Contacto** (`contacto.html`) | Motivo | Obligatorio (`required`, opción distinta de vacío) | *Selecciona un motivo de contacto.* |
| **Contacto** (`contacto.html`) | Mensaje | Obligatorio (`required`), entre `minlength` (20) y `maxlength` (300) caracteres con contador en vivo | *Escribe un mensaje.* / *Mínimo 20 caracteres (llevas X).* / *Máximo 300 caracteres.* |

### Qué se ha hecho
- Creado el módulo `js/almacen.js` como capa única de acceso a `localStorage` (`obtenerTodos`, `obtenerPorId`, `crear`, `actualizar`, `borrar`) y gestión de cookies con caducidad (`guardarCookie`, `leerCookie`).
- Creado el módulo `js/validacion.js` con funciones puras que leen las restricciones directamente desde los atributos HTML (`required`, `min`, `max`, `minlength`, `maxlength`) y devuelven el mensaje de error o `null`.
- Integrado el formulario de registro en `login.html` con alternancia entre *Iniciar sesión* y *Registrarse*, botón para mostrar contraseñas, modal `<dialog>` de condiciones, alta y edición en el mismo formulario sin guardar contraseñas en `localStorage` y vista **Usuarios**.
- Creada la vista de soporte `contacto.html` con validación cruzada entre la casilla «Prefiero que me llaméis» y el teléfono, contador de caracteres con `<output>`, cookie `starlift_contacto` con caducidad de 30 días para autorrellenar nombre y correo, y listado de **Mensajes enviados**.
- Implementada validación sin `novalidate` nativo del navegador, activada en `blur` y en `input` (una vez tocado el campo), mensajes accesibles con `aria-invalid` y `aria-describedby`, foco automático en el primer campo erróneo al enviar, confirmación previa con `window.confirm()` y delegación de eventos para editar y borrar.

### Qué ha costado más
- Coordinar la edición de un usuario existente en `login.html` cambiando automáticamente de pestaña y rellenando sus datos sin haber guardado la contraseña en `localStorage`.
- Mantener sincronizado `aria-describedby` cuando un campo combina una pista permanente (como `#hint-reg-password`) con el mensaje dinámico de error (`#error-reg-password`).