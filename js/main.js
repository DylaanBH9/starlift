import { categorias, rutinas } from './datos.js';
import {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    borrar,
    guardarCookie,
    leerCookie,
} from './almacen.js';
import {
    validarUsuario,
    validarEmail,
    validarPassword,
    validarRepetirPassword,
    validarFechaNacimiento,
    validarCondiciones,
    validarNombre,
    validarTelefono,
    validarMotivo,
    validarMensaje,
} from './validacion.js';
import {
    marcarNavegacionActiva,
    renderListadoRutinas,
    renderDetalleRutina,
    mostrarError,
    renderUsuarios,
    renderMensajes,
} from './ui.js';

marcarNavegacionActiva();

// HITO 1
const contenedorListado = document.querySelector('#rutinas-list');
const templateTarjeta = document.querySelector('#rutina-card-template');
const contadorListado = document.querySelector('#rutinas-count');

if (contenedorListado && templateTarjeta) {
    renderListadoRutinas(rutinas, categorias, contenedorListado, templateTarjeta, contadorListado);
}

const contenedorDetalle = document.querySelector('#detalle-rutina');

if (contenedorDetalle) {
    const params = new URLSearchParams(window.location.search);
    const idBuscado = Number(params.get('id')) || rutinas[0].id;
    const rutinaEncontrada = rutinas.find((item) => item.id === idBuscado);
    renderDetalleRutina(rutinaEncontrada, categorias);
}

// HITO 2

function conectarFormulario(form, camposYReglas, onValido) {
    const campos = camposYReglas.map(([campo]) => campo);

    camposYReglas.forEach(([campo, validar]) => {
        campo.dataset.pista = campo.getAttribute('aria-describedby') || '';

        const comprobar = () => {
            const error = validar(campo);
            mostrarError(campo, error);
            return !error;
        };

        campo.addEventListener('blur', () => {
            campo.dataset.tocado = '1';
            comprobar();
        });

        const eventoLive = campo.type === 'checkbox' || campo.tagName === 'SELECT' ? 'change' : 'input';
        campo.addEventListener(eventoLive, () => {
            if (campo.dataset.tocado) comprobar();
        });
    });

    const limpiarEstado = () => {
        campos.forEach((campo) => {
            delete campo.dataset.tocado;
            mostrarError(campo, null);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let primerInvalido = null;

        camposYReglas.forEach(([campo, validar]) => {
            campo.dataset.tocado = '1';
            const error = validar(campo);
            mostrarError(campo, error);
            if (error && !primerInvalido) primerInvalido = campo;
        });

        if (primerInvalido) {
            primerInvalido.focus();
            return;
        }

        onValido(limpiarEstado);
    });

    return limpiarEstado;
}

const formRegistro = document.querySelector('#form-registro');
const formLogin = document.querySelector('#form-login');

if (formRegistro && formLogin) {
    const radiosModo = document.querySelectorAll('input[name="auth-mode"]');
    const tituloAuth = document.querySelector('#auth-heading');
    const subtituloAuth = document.querySelector('#auth-subtitle');

    const cambiarModoAuth = (modo) => {
        const esRegistro = modo === 'register';
        formLogin.hidden = esRegistro;
        formRegistro.hidden = !esRegistro;
        tituloAuth.textContent = esRegistro ? 'Crear cuenta' : 'Iniciar sesión';
        subtituloAuth.textContent = esRegistro
            ? 'Regístrate para acceder a la comunidad de Starlift.'
            : 'Accede a tus rutinas y continúa tu entrenamiento.';
    };

    radiosModo.forEach((radio) => {
        radio.addEventListener('change', () => cambiarModoAuth(radio.value));
    });

    // Modal de condiciones de uso
    const btnAbrirCondiciones = document.querySelector('#abrir-condiciones');
    const dialogCondiciones = document.querySelector('#dialog-condiciones');
    const btnCerrarCondiciones = document.querySelector('#cerrar-condiciones');

    if (btnAbrirCondiciones && dialogCondiciones) {
        btnAbrirCondiciones.addEventListener('click', (e) => {
            e.preventDefault();
            dialogCondiciones.showModal();
        });
        btnCerrarCondiciones.addEventListener('click', () => dialogCondiciones.close());
    }

    // Lógica de Iniciar Sesión
    const loginEmail = formLogin.querySelector('#login-email');
    const loginPass = formLogin.querySelector('#login-password');
    const loginShowPass = formLogin.querySelector('#login-show-password');

    loginShowPass.addEventListener('change', () => {
        loginPass.type = loginShowPass.checked ? 'text' : 'password';
    });

    conectarFormulario(
        formLogin,
        [
            [loginEmail, (c) => validarEmail(c.value, { required: c.required })],
            [loginPass, (c) => validarPassword(c.value, { required: c.required, minLength: c.minLength })],
        ],
        () => {
            const usuariosGuardados = obtenerTodos('usuarios');
            const existe = usuariosGuardados.find(
                (u) => u.email.toLowerCase() === loginEmail.value.trim().toLowerCase(),
            );

            if (!existe) {
                mostrarError(loginEmail, 'No hay ninguna cuenta registrada con ese correo.');
                loginEmail.focus();
                return;
            }

            window.location.href = 'comunidad.html';
        },
    );

    const idInput = formRegistro.querySelector('#reg-id');
    const usuario = formRegistro.querySelector('#reg-usuario');
    const email = formRegistro.querySelector('#reg-email');
    const pass = formRegistro.querySelector('#reg-password');
    const pass2 = formRegistro.querySelector('#reg-password-repeat');
    const regShowPass = formRegistro.querySelector('#reg-show-password');
    const fecha = formRegistro.querySelector('#reg-fecha-nacimiento');
    const condiciones = formRegistro.querySelector('#reg-condiciones');
    const btnSubmit = formRegistro.querySelector('#reg-btn-submit');
    const btnCancelar = formRegistro.querySelector('#reg-btn-cancelar');
    const listaUsuarios = document.querySelector('#usuarios-list');
    const contadorUsuarios = document.querySelector('#usuarios-count');

    fecha.max = new Date().toISOString().split('T')[0];

    regShowPass.addEventListener('change', () => {
        const tipo = regShowPass.checked ? 'text' : 'password';
        pass.type = tipo;
        pass2.type = tipo;
    });

    const salirEdicion = () => {
        idInput.value = '';
        btnSubmit.textContent = 'Registrarse';
        btnCancelar.hidden = true;
    };

    const limpiarRegistro = conectarFormulario(
        formRegistro,
        [
            [usuario, (c) => validarUsuario(c.value, { required: c.required, minLength: c.minLength, maxLength: c.maxLength })],
            [email, (c) => validarEmail(c.value, { required: c.required })],
            [pass, (c) => validarPassword(c.value, { required: c.required, minLength: c.minLength })],
            [pass2, (c) => validarRepetirPassword(c.value, pass.value, { required: c.required })],
            [fecha, (c) => validarFechaNacimiento(c.value, { required: c.required, min: c.min, max: c.max })],
            [condiciones, (c) => validarCondiciones(c.checked, { required: c.required })],
        ],
        (limpiar) => {
            // No guardamos pass ni pass2 por seguridad
            const datos = {
                usuario: usuario.value.trim(),
                email: email.value.trim(),
                fechaNacimiento: fecha.value,
                condiciones: Boolean(condiciones.checked),
            };

            if (idInput.value) actualizar('usuarios', idInput.value, datos);
            else crear('usuarios', datos);

            formRegistro.reset();
            pass.type = 'password';
            pass2.type = 'password';
            limpiar();
            salirEdicion();
            renderUsuarios(obtenerTodos('usuarios'), listaUsuarios, contadorUsuarios);
        },
    );

    pass.addEventListener('input', () => {
        if (pass2.dataset.tocado) {
            mostrarError(pass2, validarRepetirPassword(pass2.value, pass.value, { required: pass2.required }));
        }
    });

    btnCancelar.addEventListener('click', () => {
        formRegistro.reset();
        pass.type = 'password';
        pass2.type = 'password';
        limpiarRegistro();
        salirEdicion();
    });

    listaUsuarios.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-accion]');
        if (!btn) return;

        const { accion, id } = btn.dataset;
        if (accion === 'editar') {
            const user = obtenerPorId('usuarios', id);
            if (!user) return;

            // Cambia automáticamente a la pestaña de Registro para editar el perfil
            const radioRegistro = document.querySelector('input[name="auth-mode"][value="register"]');
            if (radioRegistro) radioRegistro.checked = true;
            cambiarModoAuth('register');

            limpiarRegistro();
            idInput.value = user.id;
            usuario.value = user.usuario;
            email.value = user.email;
            fecha.value = user.fechaNacimiento;
            condiciones.checked = Boolean(user.condiciones);
            btnSubmit.textContent = 'Guardar cambios';
            btnCancelar.hidden = false;
            usuario.focus();
        } else if (accion === 'borrar') {
            if (!window.confirm('¿Seguro que quieres borrar este usuario?')) return;
            borrar('usuarios', id);
            if (idInput.value === id) {
                formRegistro.reset();
                limpiarRegistro();
                salirEdicion();
            }
            renderUsuarios(obtenerTodos('usuarios'), listaUsuarios, contadorUsuarios);
        }
    });

    renderUsuarios(obtenerTodos('usuarios'), listaUsuarios, contadorUsuarios);
}

const formContacto = document.querySelector('#form-contacto');

if (formContacto) {
    const nombre = formContacto.querySelector('#contacto-nombre');
    const email = formContacto.querySelector('#contacto-email');
    const telefono = formContacto.querySelector('#contacto-telefono');
    const prefiereLlamada = formContacto.querySelector('#contacto-prefiere-llamada');
    const motivo = formContacto.querySelector('#contacto-motivo');
    const mensaje = formContacto.querySelector('#contacto-mensaje');
    const contadorChars = formContacto.querySelector('#contacto-contador');
    const listaMensajes = document.querySelector('#mensajes-list');
    const contadorMensajes = document.querySelector('#mensajes-count');

    const actualizarContador = () => {
        contadorChars.textContent = `${mensaje.value.length} / ${mensaje.maxLength} caracteres (mínimo ${mensaje.minLength})`;
    };

    const cookieGuardada = leerCookie('starlift_contacto');
    if (cookieGuardada) {
        nombre.value = cookieGuardada.nombre || '';
        email.value = cookieGuardada.email || '';
    }
    actualizarContador();

    conectarFormulario(
        formContacto,
        [
            [nombre, (c) => validarNombre(c.value, { required: c.required, minLength: c.minLength, maxLength: c.maxLength })],
            [email, (c) => validarEmail(c.value, { required: c.required })],
            [telefono, (c) => validarTelefono(c.value, { required: c.required })],
            [motivo, (c) => validarMotivo(c.value, { required: c.required })],
            [mensaje, (c) => validarMensaje(c.value, { required: c.required, minLength: c.minLength, maxLength: c.maxLength })],
        ],
        (limpiar) => {
            const dato = {
                nombre: nombre.value.trim(),
                email: email.value.trim(),
                telefono: telefono.value.trim(),
                prefiereLlamada: Boolean(prefiereLlamada.checked),
                motivo: motivo.value,
                motivoTexto: motivo.options[motivo.selectedIndex].text,
                mensaje: mensaje.value.trim(),
                fechaEnvio: new Date().toISOString().split('T')[0],
            };

            crear('mensajes', dato);
            guardarCookie('starlift_contacto', { nombre: dato.nombre, email: dato.email }, 30);

            formContacto.reset();
            telefono.required = false;
            limpiar();
            actualizarContador();
            renderMensajes(obtenerTodos('mensajes'), listaMensajes, contadorMensajes);
        },
    );

    mensaje.addEventListener('input', actualizarContador);

    prefiereLlamada.addEventListener('change', () => {
        telefono.required = prefiereLlamada.checked;
        if (telefono.dataset.tocado || prefiereLlamada.checked) {
            telefono.dataset.tocado = '1';
            mostrarError(telefono, validarTelefono(telefono.value, { required: telefono.required }));
        }
    });

    listaMensajes.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-accion="borrar"]');
        if (!btn) return;
        if (!window.confirm('¿Seguro que quieres borrar este mensaje?')) return;
        borrar('mensajes', btn.dataset.id);
        renderMensajes(obtenerTodos('mensajes'), listaMensajes, contadorMensajes);
    });

    renderMensajes(obtenerTodos('mensajes'), listaMensajes, contadorMensajes);
}