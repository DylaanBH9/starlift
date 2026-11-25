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

export function mostrarError(campo, mensaje) {
    const idError = `error-${campo.id}`;
    const cajaError = document.getElementById(idError);
    const pista = campo.dataset.pista || '';

    if (mensaje) {
        campo.setAttribute('aria-invalid', 'true');
        campo.setAttribute('aria-describedby', [pista, idError].filter(Boolean).join(' '));
        if (cajaError) cajaError.textContent = mensaje;
    } else {
        campo.removeAttribute('aria-invalid');
        if (pista) campo.setAttribute('aria-describedby', pista);
        else campo.removeAttribute('aria-describedby');
        if (cajaError) cajaError.textContent = '';
    }
}

export function renderUsuarios(usuarios, contenedor, contador) {
    if (!contenedor) return;
    contenedor.replaceChildren();
    if (contador) contador.textContent = `${usuarios.length} usuarios registrados`;

    usuarios.forEach((user) => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = 'card o-stack';

        const titulo = document.createElement('h3');
        titulo.className = 'card__title';
        titulo.textContent = `@${user.usuario}`;

        const info = document.createElement('p');
        info.className = 'card__meta';
        info.textContent = `${user.email} · Nacimiento: ${user.fechaNacimiento}`;

        const acciones = document.createElement('p');
        acciones.className = 'o-cluster';

        const btnEditar = document.createElement('button');
        btnEditar.type = 'button';
        btnEditar.className = 'button button--secondary';
        btnEditar.dataset.accion = 'editar';
        btnEditar.dataset.id = user.id;
        btnEditar.textContent = 'Editar';

        const btnBorrar = document.createElement('button');
        btnBorrar.type = 'button';
        btnBorrar.className = 'button button--danger';
        btnBorrar.dataset.accion = 'borrar';
        btnBorrar.dataset.id = user.id;
        btnBorrar.textContent = 'Borrar';

        acciones.append(btnEditar, btnBorrar);
        article.append(titulo, info, acciones);
        li.append(article);
        contenedor.append(li);
    });
}

export function renderMensajes(mensajes, contenedor, contador) {
    if (!contenedor) return;
    contenedor.replaceChildren();
    if (contador) contador.textContent = `${mensajes.length} mensajes enviados`;

    mensajes.forEach((msg) => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        article.className = 'card o-stack';

        const tag = document.createElement('p');
        tag.className = 'card__tag';
        tag.textContent = `${msg.motivoTexto} · ${msg.fechaEnvio}`;

        const titulo = document.createElement('h3');
        titulo.className = 'card__title';
        titulo.textContent = `${msg.nombre} (${msg.email})`;

        const texto = document.createElement('p');
        texto.textContent = msg.mensaje;

        const meta = document.createElement('p');
        meta.className = 'card__meta';
        meta.textContent = `${msg.telefono ? `Tel: ${msg.telefono}` : 'Sin teléfono'} · ${msg.prefiereLlamada ? 'Prefiere llamada' : 'Responder por correo'}`;

        const btnBorrar = document.createElement('button');
        btnBorrar.type = 'button';
        btnBorrar.className = 'button button--danger';
        btnBorrar.dataset.accion = 'borrar';
        btnBorrar.dataset.id = msg.id;
        btnBorrar.textContent = 'Borrar';

        article.append(tag, titulo, texto, meta, btnBorrar);
        li.append(article);
        contenedor.append(li);
    });
}