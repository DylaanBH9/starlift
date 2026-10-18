# Brief del Proyecto: StarLift

## 1. Problema
- **Contexto real detectado:** En las entrevistas de campo (caso de Kevin, 21 años, estudiante) aparece un patrón claro: quien ya entrena dedica demasiado tiempo a explicar rutinas a sus conocidos con audios de 3 minutos, notas sueltas o vídeos por WhatsApp.
- **Molestia para quien entrena:** Tiene que pausar la música, abrir WhatsApp en mitad del gimnasio y escuchar audios largos para recordar un consejo técnico. Esto rompe el ritmo, enfría el cuerpo y provoca pérdidas de tiempo injustificadas entre series.
- **Abandono del registro de progreso:** Las apps del mercado obligan a rellenar demasiados campos antes de empezar. El usuario prefiere no anotar nada (si la app tarda mucho, da pereza y no se apuntan los días de pierna) y se pierde la trazabilidad de la sobrecarga progresiva.
- **Duda postural y falta de respaldo:** Al no tener las notas fijadas en el propio visor de la rutina, el usuario duda de si la ejecución es la correcta o si el ejercicio es efectivo para su objetivo.

## 2. Alcance 
### Entra en esta versión (MVP):
- Base de datos de ejercicios con su cue técnico.
- Creador de rutinas: agrupar ejercicios en una lista con comentarios.
- Feed global para compartir rutinas.
- Reseñas con estrellas de ejercicios y de rutinas.
- Tracker para seguir la rutina y registrar series, peso y repeticiones.

### Se queda fuera de esta versión:
- Sistema de seguidos (compartir por enlace ya resuelve la tarea de Kevin; el grafo de seguimiento exige notificaciones y moderación).
- Comunidades (el feed global cubre el descubrimiento).
- Chat o mensajería (ya existe WhatsApp; mensajería propia suma pantallas, datos y casos límite).
- Estadísticas con gráficas (el tracker ya registra; visualizar puede esperar).
- Vídeo y fotos en las reseñas (multiplicaría el peso de la página, restringido a <1.5 MB por normativa ambiental).
- Pagos y suscripción (primero hay que validar la app con usuarios reales).
- Notificaciones push (ninguna persona las pide y consumen datos/batería).

## 3. Personas
- **Kevin, 21 años (Estudiante de Ingeniería Informática — PERSONA PRINCIPAL):** Crea rutinas para su hermano y sus amigos y pierde el tiempo explicándolas por WhatsApp. Su objetivo más importante es crear y compartir una rutina sin tener que explicarla audio a audio.
- **Alberto (PERSONA SECUNDARIA — Perfil novato o intermedio):** Sigue rutinas de TikTok o de un amigo y duda de la técnica en mitad de la serie; necesita el cue técnico fijado en la pantalla de ejecución.
- **Marcos, 20 años (DIVERSIDAD FUNCIONAL — Baja visión / Astigmatismo):** Entrena sin gafas en el gimnasio; requiere alto contraste, zonas de toque amplias (mínimo 44x44 px) y compatibilidad con lector de pantalla (TalkBack/VoiceOver).

## 4. Criterios de Éxito
- Kevin crea una rutina con comentarios y la comparte con un enlace en menos de 3 minutos, sin mandar audios de WhatsApp.
- Alberto empieza a entrenar desde el feed global y ve el cue técnico fijado en menos de 1 minuto y sin salir de la aplicación.
- Kevin registra todas las series de un entreno completo, incluido el día de pierna, tocando tres campos o menos por serie.
- Alberto termina un entreno sin abrir WhatsApp ni pausar la música.
- Una persona que no conoce el proyecto entiende en 5 minutos qué hace la aplicación.

## 5. Restricciones
- **Técnicas:** Figma y FigJam para el diseño.
- **De las personas:** Móvil con pantalla pequeña y una sola mano libre en el gimnasio (Alberto); portátil Windows (Kevin); Wi-Fi en casa y red móvil dentro del gimnasio.
- **De accesibilidad:** Contraste mínimo AA y letra ampliable al 200% sin que ningún botón se salga de la pantalla.
- **Restricción Ambiental (W3C WSG 2.4):** Peso máximo de la página inferior a 1.5 MB para optimizar el consumo energético y permitir una carga fluida en salas de gimnasio con baja cobertura móvil (3G/4G)