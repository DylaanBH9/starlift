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
| 4 | **Filtrado y búsqueda en tiempo real** por tipo de entrenamiento, nivel y texto | Pendiente |
| 5 | **Formulario de creación y edición de rutinas** con validación en cliente y ejercicios dinámicos | Pendiente |
| 6 | **Persistencia local (`localStorage`)** para guardar rutinas propias y de la biblioteca | Pendiente |
| 7 | **Modo Tracker interactivo** con cronómetro de sesión y progreso de series completadas | Pendiente |
| 8 | **Sistema de reseñas y valoraciones** en la ficha de cada rutina | Pendiente |
| 9 | **Simulación de autenticación** (inicio de sesión y registro con validación) | Pendiente |

### 2. Mapa de Pantallas

| Pantalla | Archivo | Propósito | Datos que muestra |
| :--- | :--- | :--- | :--- |
| **Portada (Landing)** | `index.html` | Presentación de la plataforma y acceso rápido | Propuesta de valor, vista previa del Tracker y rutinas destacadas |
| **Comunidad (Listado)** | `comunidad.html` | Explorador principal de entrenamientos públicos | Listado de rutinas con categoría, nivel, creador, ejercicios resumidos y valoraciones |
| **Detalle de Rutina** | `detalle-rutina.html` | Ficha técnica completa de una rutina seleccionada | Título, categoría, duración, autor, lista completa de ejercicios con series/reps/descanso/notas técnicas y reseñas |
| **Crear Rutina** | `crear-rutina.html` | Constructor de nuevos entrenamientos | Formulario de metadatos (nombre, categoría, nivel, visibilidad) y bloques dinámicos de ejercicios |
| **Mi Biblioteca** | `biblioteca.html` | Colección personal de rutinas creadas y guardadas | Rutinas propias y guardadas de la comunidad con acceso directo al Tracker |
| **Modo Tracker** | `tracker.html` | Ejecución guiada del entrenamiento serie a serie | Ejercicio activo, nota técnica fijada, carga objetivo, cronómetro y barra de progreso |
| **Acceso (Login/Registro)** | `login.html` | Entrada de usuarios a la plataforma | Formulario de inicio de sesión y registro con validación de credenciales |