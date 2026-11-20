import { categorias, rutinas } from './datos.js';
import {
    marcarNavegacionActiva,
    renderListadoRutinas,
    renderDetalleRutina,
} from './ui.js';

marcarNavegacionActiva();

// 1. Vista de listado (comunidad.html)
const contenedorListado = document.querySelector('#rutinas-list');
const templateTarjeta = document.querySelector('#rutina-card-template');
const contadorListado = document.querySelector('#rutinas-count');

if (contenedorListado && templateTarjeta) {
    renderListadoRutinas(rutinas, categorias, contenedorListado, templateTarjeta, contadorListado);
}

// 2. Vista de detalle (detalle-rutina.html?id=X)
const contenedorDetalle = document.querySelector('#detalle-rutina');

if (contenedorDetalle) {
    const params = new URLSearchParams(window.location.search);
    const idBuscado = Number(params.get('id')) || rutinas[0].id;
    const rutinaEncontrada = rutinas.find((item) => item.id === idBuscado);

    renderDetalleRutina(rutinaEncontrada, categorias);
}