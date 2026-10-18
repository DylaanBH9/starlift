# Changelog & Registro de Uso de Inteligencia Artificial

Este documento registra el uso transparente de herramientas de IA generativa (Gemini) durante el desarrollo de la **Órbita 1** para el proyecto **StarLift**.

---

## 1. Herramientas Utilizadas
- **Modelo:** Gemini 3.8 Flash
- **Ámbito de aplicación:** Estructuración del proceso UX Research, justificación de restricciones del MVP y auditoría de trazabilidad entre FigJam, Figma y el Brief.

---

## 2. Registro de Prompts e Iteraciones

### Iteración 1: Estructuración y trazabilidad de Personas
- **Qué se pidió:** Ayuda para maquetar las fichas de personas (Kevin, Alberto y Marcos Reyes) siguiendo el formato del estándar del módulo y asegurando que las frustraciones se conectaran con las entrevistas P1 y P2.
- **Qué devolvió la IA:** Una estructura borrador con objetivos, contexto de uso, frustraciones y citas de usuario.
- **Qué se conservó:** La estructura completa de las tarjetas y las dimensiones de accesibilidad.
- **Qué se cambió:** Se adaptaron los nombres y el contexto para reflejar fielmente las respuestas reales de las entrevistas de campo registradas en el FigJam.

### Iteración 2: Definición del MVP y Restricciones Ambientales
- **Qué se pidió:** Justificación de las exclusiones del MVP y validación de las restricciones técnicas y de peso de página.
- **Qué devolvió la IA:** Sugerencia de aplicar las pautas WCAG 2.4 del W3C con un límite estricto de <1.5 MB por página para reducir el consumo energético y garantizar el funcionamiento en salas con mala cobertura (3G/4G).
- **Qué se conservó:** La métrica ambiental de 1.5 MB y la argumentación de exclusión de contenidos pesados (vídeos/fotos en reseñas).
- **Qué se cambió:** Se acopló la restricción al entorno real de los gimnasios locales y al perfil de usuario en movilidad.

### Iteración 3: Auditoría del Tablero de FigJam y Trazabilidad del Brief
- **Qué se pidió:** Auditoría general del tablero de FigJam para comprobar el cumplimiento de los 8 pasos metodológicos y la alineación con la matriz del Brief.
- **Qué devolvió la IA:** Detección de inconsistencias menores en las menciones de las tres personas entre el mapa de navegación, las notas iniciales y el Brief.
- **Qué se conservó:** Todas las recomendaciones de corrección de texto para incluir explícitamente a Marcos Reyes y homogenizar el Happy Path (User Flow 1).
- **Qué se cambió:** Se unificó la nomenclatura entre las citas de P1/P2 y las fichas finales de Kevin, Alberto y Marcos.

---

## 3. Declaración de Autoría

**3.1 Alcance del uso de IA.** La herramienta Gemini 3.8 Flash se empleó exclusivamente en las tres iteraciones documentadas en la sección 2, limitándose a: (a) proponer estructuras de formato para las fichas de personas, (b) generar argumentación crítica de apoyo para justificar las restricciones del MVP y (c) revisar el tablero de FigJam en busca de inconsistencias textuales.

**3.2 Límites de la herramienta.** La IA **no** tuvo acceso directo a los archivos de Figma ni de GitHub. Respecto a la investigación de campo, solo recibió resúmenes redactados por el autor de las entrevistas P1 y P2; nunca se introdujeron datos personales identificables de los participantes.

**3.3 Decisiones bajo responsabilidad del autor.** Toda decisión derivada de las sugerencias de la IA es responsabilidad del autor. En concreto: las exclusiones del MVP, la adopción del límite de 1.5 MB por página, los wireframes, los flujos de usuario (Happy Path y User Flow 1) y la nomenclatura final de las personas fueron definidos y validados por el autor a partir de los datos recogidos en el FigJam.

**3.4 Verificación.** Cada sugerencia de la IA fue contrastada contra las entrevistas de campo antes de incorporarse al proyecto. Las sugerencias no validadas fueron descartadas; las modificaciones aplicadas sobre las propuestas originales se detallan en la columna "Qué se cambió" de cada iteración.