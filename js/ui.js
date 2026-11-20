export function marcarNavegacionActiva() {
    const rutaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach((enlace) => {
        const href = enlace.getAttribute('href');
        if (href === rutaActual) {
            enlace.setAttribute('aria-current', 'page');
        } else {
            enlace.removeAttribute('aria-current');
        }
    });
}

export function renderListadoRutinas(rutinas, categorias, contenedor, template, contadorElemento) {
    if (!contenedor || !template) return;

    contenedor.replaceChildren();

    if (contadorElemento) {
        contadorElemento.textContent = `${rutinas.length} rutinas disponibles · Lista completa`;
    }

    rutinas.forEach((rutina) => {
        const clon = template.content.cloneNode(true);
        const categoria = categorias.find((cat) => cat.id === rutina.categoriaId);
        const nombreCategoria = categoria ? categoria.nombre : 'General';

        clon.querySelector('.card__tag').textContent = `${nombreCategoria} · ${rutina.nivel} · ${rutina.duracion}`;
        clon.querySelector('.card__title').textContent = rutina.titulo;

        const listaEjercicios = clon.querySelector('.card__list');
        rutina.ejercicios.forEach((ejercicio) => {
            const li = document.createElement('li');
            li.textContent = ejercicio.nombre;
            listaEjercicios.append(li);
        });

        clon.querySelector('.card__author').textContent = `Creado por ${rutina.creador}`;
        clon.querySelector('.card__meta').textContent = `${rutina.valoracion}/5 (${rutina.totalValoraciones} valoraciones) · ${rutina.guardados} guardados`;

        const enlaceDetalle = clon.querySelector('.card__link');
        enlaceDetalle.href = `detalle-rutina.html?id=${rutina.id}`;

        contenedor.append(clon);
    });
}

export function renderDetalleRutina(rutina, categorias) {
    const contenedor = document.querySelector('#detalle-rutina');
    if (!contenedor) return;

    if (!rutina) {
        document.querySelector('#detalle-titulo').textContent = 'Rutina no encontrada';
        document.querySelector('#detalle-descripcion').textContent = 'La rutina solicitada no existe o ha sido eliminada.';
        return;
    }

    const categoria = categorias.find((cat) => cat.id === rutina.categoriaId);
    const nombreCategoria = categoria ? categoria.nombre : 'General';
    const totalSeries = rutina.ejercicios.reduce((acc, ej) => acc + ej.series, 0);

    document.title = `${rutina.titulo} · StarLift`;
    document.querySelector('#detalle-tag').textContent = `${nombreCategoria} · ${rutina.nivel}`;
    document.querySelector('#detalle-titulo').textContent = rutina.titulo;
    document.querySelector('#detalle-autor').textContent = `Creado por ${rutina.creador} · Actualizado: ${rutina.actualizado}`;
    document.querySelector('#detalle-valoracion').textContent = `${rutina.valoracion}/5 · ${rutina.totalValoraciones} valoraciones · ${rutina.guardados} guardados`;
    document.querySelector('#detalle-descripcion').textContent = rutina.descripcion;

    document.querySelector('#detalle-resumen').textContent = `${rutina.ejercicios.length} ejercicios · ${totalSeries} series · ${rutina.duracion}`;
    document.querySelector('#detalle-categoria-desc').textContent = categoria ? categoria.descripcion : '';

    const listaEjercicios = document.querySelector('#detalle-ejercicios');
    listaEjercicios.replaceChildren();

    rutina.ejercicios.forEach((ejercicio, indice) => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = 'card o-stack';

        const titulo = document.createElement('h3');
        titulo.className = 'card__title';
        titulo.textContent = `${indice + 1}. ${ejercicio.nombre}`;

        const meta = document.createElement('p');
        meta.className = 'card__meta';
        meta.textContent = `${ejercicio.series} series · ${ejercicio.reps} reps · Descanso: ${ejercicio.descanso}`;

        const nota = document.createElement('blockquote');
        nota.className = 'tracker-note';
        const textoNota = document.createElement('p');
        textoNota.textContent = `Nota técnica: ${ejercicio.notaTecnica}`;
        nota.append(textoNota);

        article.append(titulo, meta, nota);
        li.append(article);
        listaEjercicios.append(li);
    });
}