# Changelog & Registro de Uso de Inteligencia Artificial

Este documento registra el uso transparente de herramientas de IA generativa (Gemini) durante el desarrollo de la **Órbita 1** y la **Órbita 2** para el proyecto **StarLift**.

---

## ÓRBITA 1: Investigación, Estrategia UX y Wireframes

### 1. Herramientas Utilizadas
- **Modelo:** Gemini 3.8 Flash

- **Ámbito de aplicación:** Estructuración de fichas de usuarios personas, redacción de argumentación técnica para el MVP y auditoría de trazabilidad entre FigJam y el Brief.


---

### 2. Registro de Prompts e Iteraciones (Órbita 1)

#### Iteración 1: Estructuración y trazabilidad de Personas
- **Qué se pidió:** Plantilla estructurada para maquetar rápidamente las fichas de personas (Kevin, Alberto y Marcos Reyes) conectando sus frustraciones con las citas extraídas de las entrevistas P1 y P2.

- **Qué devolvió la IA:** Un borrador organizativo con bloques de contexto de uso, frustraciones, necesidades y dimensiones de accesibilidad.

- **Qué se conservó:** La estructura del layout en formato Markdown/FigJam y los campos de accesibilidad táctil.

- **Qué se cambió:** Se sustituyó el texto genérico por las citas directas de los participantes de las entrevistas reales.


#### Iteración 2: Argumentación de Restricciones del MVP y Sostenibilidad
- **Qué se pidió:** Argumentación técnica para justificar en el documento la exclusión de características pesadas en el MVP basándose en restricciones ambientales y de red.

- **Qué devolvió la IA:** Redacción justificativa aplicando pautas de accesibilidad y una métrica de carga inferior a 1.5 MB por página para entornos de baja cobertura (3G/4G).

- **Qué se conservó:** La justificación del límite de peso de 1.5 MB y el rechazo de vídeo/reproducción automática en beneficio de la velocidad.

- **Qué se cambió:** Se adaptó la redacción para enfocarlo al uso real en salas de musculación sin cobertura y al uso en movilidad.


#### Iteración 3: Auditoría del Tablero de FigJam
- **Qué se pidió:** Revisión de coherencia entre los 8 pasos metodológicos del tablero de FigJam y la matriz del Brief original.

- **Qué devolvió la IA:** Identificación de pequeñas discrepancias en la nomenclatura de los nombres de los usuarios entre el User Flow 1 y las tarjetas iniciales.

- **Qué se conservó:** Las correcciones sugeridas para homogeneizar los nombres en todo el tablero.

- **Qué se cambió:** Se unificó manualmente la nomenclatura en los diagramas de flujo.


---

## ÓRBITA 2

### 1. Herramientas Utilizadas
- **Modelo:** Gemini 3.8 Flash

- **Ámbito de aplicación:** Mapeo de tokens de color, automatización de descripciones de variables, redacción de prompts para refactorización en Figma y borrador del resumen `ORBITA2.md`.


---

### 2. Registro de Prompts e Iteraciones (Órbita 2)

#### Iteración 4: Mapeo de Tokens Semánticos y Comprobación de Contraste WCAG
- **Qué se pidió:** Transformar la paleta de colores primitivos (`blue-50` a `blue-900`, `gray-50` a `gray-950`) en una tabla organizada de alias semánticos para el modo Claro y Oscuro, indicando el ratio de contraste de la pareja texto/fondo.

- **Qué devolvió la IA:** Una tabla completa de correspondencia semántica (`color/primary`, `color/surface`, `color/on-surface`, etc.) con sus respectivos valores de contraste calculados.

- **Qué se conservó:** La estructura completa de la tabla y los nombres de las variables semánticas en formato barra (`color/...`).

- **Qué se cambió:** Se ajustaron los alias del modo oscuro para asegurar que el tono de acento fuera un `blue-200` más desaturado y evitar deslumbramientos.


#### Iteración 5: Asignación Masiva de Variables mediante Selection Colors
- **Qué se pidió:** Un prompt con instrucciones precisas para usar la función *Selection Colors* de Figma y sustituir de un solo golpe los colores HEX fijos de los componentes por las variables semánticas (`color/surface`, `color/primary`, etc.).

- **Qué devolvió la IA:** Una guía paso a paso para mapear cada tono de la interfaz antigua con su token correspondiente según el rol visual.

- **Qué se conservó:** La correspondencia de colores propuesta para vincular los fondos a `color/surface` y los textos a `color/on-surface`.

- **Qué se cambió:** Se ajustó manualmente la asignación en las cajas de formulario para que los bordes usaran el token `color/border` en lugar de un tono neutro fijo.


#### Iteración 6: Generación del Borrador del Documento ORBITA2.md
- **Qué se pidió:** Generar la plantilla inicial del archivo `ORBITA2.md` estructurando las tablas de enlaces y redactando el borrador de las decisiones de diseño (color, retícula y componentes).
- **Qué devolvió la IA:** La estructura completa en Markdown del documento con la lista de comprobación de requisitos y los apartados pre-rellenados.
- **Qué se conservó:** La plantilla general en Markdown, el orden de las secciones y el formato de las tablas.
- **Qué se cambió:** Se sustituyeron las URLs de plantilla por los enlaces reales a Figma y al prototipo, y se ajustaron los nombres exactos de los componentes.


---

## 3. Declaración de Autoría

**3.1 Alcance del uso de IA.** La herramienta Gemini 3.8 Flash se empleó de forma transparente como asistente de productividad para: (a) estructurar tablas de datos y documentación Markdown, (b) automatizar la redacción repetitiva de la sintaxis CSS y descripciones en las variables de Figma, y (c) redactar justificativas técnicas basadas en las pautas WCAG 2.2 y WSG.

**3.2 Límites de la herramienta.** La IA no ejecutó cambios autónomos sin supervisión. La toma de decisiones visuales, la creación física de los componentes con Auto Layout, las variantes de estado, la lógica del prototipo interactivo y la jerarquía visual de la interfaz fueron diseñadas, maquetadas y auditadas manualmente por el autor.

**3.3 Verificación.** Todas las sugerencias de código, variables y textos generados por la IA fueron verificadas en Figma (mediante el panel de Local Variables) antes de incorporarse a la entrega definitiva.
