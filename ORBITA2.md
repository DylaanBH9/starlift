# Órbita 2: sistema visual de StarLift

## Enlaces
| Qué | Enlace |
|---|---|
| Archivo de Figma (versión "Entrega Órbita 2") | https://www.figma.com/design/s6KViUM1yLafNmhchZWnOL/StarLift---Wireframes-y-Prototipo?version-id=2419558822526903939&node-id=670-783&p=f&t=27vmHQb65HxFgBUV-0 |
| Prototipo | https://www.figma.com/proto/s6KViUM1yLafNmhchZWnOL/StarLift---Wireframes-y-Prototipo?node-id=700-11867&p=f&t=L3qaizzUrlfAALKt-1&scaling=min-zoom&content-scaling=fixed&page-id=670%3A783&starting-point-node-id=700%3A11867&show-proto-sidebar=1 |
| Proyecto de Google Stitch | No usado |

## Dónde está cada cosa en Figma
| Entregable | Página y sección del archivo |
|---|---|
| Inventario de decisiones | Página `Guía de estilo` · Sección 1. Principios y Decisiones |
| Wireframes rediseñados con sus notas | Página `Wireframes` · Sección Rediseño |
| Componentes | Página `Componentes` · Sección Átomos y Moléculas |
| Mockups del happy path | Página `Mockups` · Sección Mobile (360px) |
| Pantalla principal en el segundo ancho | Página `Mockups` · Sección Desktop (1280px) |
| Pantallas en modo oscuro | Página `Mockups` · Tracker en Modo Dark |
| Guía de estilo | Página `Guía de estilo` |

## Lista de comprobación de Figma
- [x] Variables en dos colecciones (primitivos y semánticos), con alias, modos claro y oscuro, ámbito, descripción y sintaxis de código.
- [x] Estilos de texto, efecto y retícula vinculados a las variables.
- [x] Componentes con Auto layout, variables, propiedades y variantes de estado.
- [x] Mockups construidos enteros con Auto layout y espacios sacados de variables.
- [x] Pantalla principal en un segundo ancho, con los mismos componentes.
- [x] Modo oscuro aplicado con el selector de modo.
- [x] Prototipo que recorre el happy path completo.
- [x] Prueba 1 superada: al cambiar `color/primary`, cambian todas las pantallas a la vez.
- [x] Prueba 2 superada: con todos los mockups en modo oscuro, nada desaparece contra el fondo.

## Resumen de decisiones

### Rediseño de los wireframes
Se han reorganizado los elementos visuales del Tracker y el Feed para eliminar ruido visual y priorizar la jerarquía de lectura de Alberto (interacción a una sola mano en el gimnasio). El cambio más relevante ha sido fijar el cue técnico mediante la molécula `Tech Note Sticky` en la parte superior y asegurar que todos los botones de acción principal tengan un área táctil mínima de 44 × 44 px (WCAG 2.5.8).

### Color
- **Color Principal:** `blue-600` (`#2563EB` en light / `blue-200` en dark) para transmitir precisión y enfoque deportivo.
- **Color Secundario / Estado:** `green-700` (`color/success`) y `red-600` (`color/error`).
- **Contraste mínimo:** En modo claro, la combinación `color/on-surface` (`gray-900`) sobre `color/surface` (`gray-50`) alcanza una relación de contraste superior a 15:1. En modo oscuro, `color/on-surface` (`white`) sobre `gray-900` garantiza un contraste de 17:1 (cumpliendo WCAG 2.2 AA/AAA).

### Tipografía
- **Familia principal:** Inter. Se ha seleccionado por su excelente legibilidad en pantallas de alta densidad y su amplia variedad de pesos para jerarquizar contenidos rápidamente.
- **Escala:** 6 niveles (`display`, `h1`, `h2`, `h3`, `body`, `caption`), probados al 200% de zoom para garantizar accesibilidad a usuarios como Marcos o Lucía.

### Espaciado y retícula
- **Escala modular:** Basada en múltiplos de 4/8 px (`space-1` = 4px, `space-2` = 8px, `space-4` = 16px, `space-6` = 24px, `space-8` = 32px, `space-12` = 48px).
- **Retícula Móvil (Alberto/Lucía):** 4 columnas, medianil de 16 px, margen de 16 px en ancho de 360 px.
- **Retícula Escritorio (Kevin/Manuel):** 12 columnas, medianil de 24 px, margen de 32 px en ancho de 1280 px.

### Componentes
- `Boton`: Variantes `Primary`, `Secondary`, `Disabled` y estados `Default`, `Hover`, `Focus` (con contorno accesible WCAG 2.4.7).
- `Entrada`: Variantes `Default`, `Focus`, `Error` .
- `Estadp`: Variantes `Success`, `Warning`, `Neutral`.
- `Nota tecnica`: Molécula fija para avisos técnicos.

### Responsive y modo oscuro
- **Responsive:** Al adaptar la pantalla del Tracker y Feed a escritorio (1280 px), el contenedor principal pasó a `Fill container` con un máximo de 1200 px para evitar líneas de lectura superiores a 75 caracteres. Se reutilizaron los mismos componentes atómicos sin redibujar nada.
- **Modo Oscuro:** Se ajustaron los tonos de acento a versiones desaturadas (`blue-200`) para evitar deslumbramientos y efectos de arrastre sobre superficies `gray-900`.

## Uso de IA
Se ha utilizado asistencia de IA para acelerar la refactorización de esquemas Auto Layout y sugerir mapeos semánticos sobre mockups. Toda propuesta fue revisada manualmente y adaptada a la escala de tokens de StarLift. El detalle de las peticiones se encuentra en [CHANGELOG.md](CHANGELOG.md).

## Lo que ha quedado pendiente
Está todo terminado y validado contra la lista de comprobación de Figma.
