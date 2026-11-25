const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const REGEX_TELEFONO = /^(?:\+34[\s-]?)?[6789]\d{2}(?:[\s-]?\d{3}){2}$/;

export function validarUsuario(valor, { required = true, minLength = 3, maxLength = 20 } = {}) {
    const texto = valor.trim();
    if (required && !texto) return 'El nombre de usuario es obligatorio.';
    if (texto.length < minLength) return `Mínimo ${minLength} caracteres.`;
    if (texto.length > maxLength) return `Máximo ${maxLength} caracteres.`;
    if (/\s/.test(texto)) return 'No puede contener espacios.';
    return null;
}

export function validarEmail(valor, { required = true } = {}) {
    const texto = valor.trim();
    if (required && !texto) return 'El correo electrónico es obligatorio.';
    if (texto && !REGEX_EMAIL.test(texto)) return 'Introduce un correo válido (ej. atleta@starlift.es).';
    return null;
}

export function validarPassword(valor, { required = true, minLength = 8 } = {}) {
    if (required && !valor) return 'La contraseña es obligatoria.';
    if (valor.length < minLength) return `Mínimo ${minLength} caracteres.`;
    if (!/[A-ZÁÉÍÓÚÑ]/.test(valor)) return 'Debe incluir al menos una mayúscula.';
    if (!/\d/.test(valor)) return 'Debe incluir al menos un número.';
    return null;
}

export function validarRepetirPassword(valor, passwordOriginal, { required = true } = {}) {
    if (required && !valor) return 'Repite la contraseña.';
    if (valor !== passwordOriginal) return 'Las contraseñas no coinciden.';
    return null;
}

export function validarFechaNacimiento(valor, { required = true, min = '', max = '' } = {}) {
    if (required && !valor) return 'La fecha de nacimiento es obligatoria.';
    if (!valor) return null;

    const fecha = new Date(`${valor}T00:00:00`);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fecha > hoy) return 'La fecha no puede ser futura.';
    if (min && fecha < new Date(`${min}T00:00:00`)) return `La fecha debe ser posterior a ${min}.`;
    if (max && fecha > new Date(`${max}T00:00:00`)) return `La fecha debe ser anterior a ${max}.`;

    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) edad -= 1;

    if (edad < 16) return 'Debes tener al menos 16 años para registrarte.';
    return null;
}

export function validarCondiciones(checked, { required = true } = {}) {
    if (required && !checked) return 'Debes aceptar las condiciones de uso.';
    return null;
}

export function validarNombre(valor, { required = true, minLength = 2, maxLength = 60 } = {}) {
    const texto = valor.trim();
    if (required && !texto) return 'El nombre es obligatorio.';
    if (texto.length < minLength) return `Mínimo ${minLength} caracteres.`;
    if (texto.length > maxLength) return `Máximo ${maxLength} caracteres.`;
    return null;
}

export function validarTelefono(valor, { required = false } = {}) {
    const texto = valor.trim();
    if (!texto) return required ? 'El teléfono es obligatorio si prefieres que te llamemos.' : null;
    if (!REGEX_TELEFONO.test(texto)) return 'Introduce un teléfono válido de 9 dígitos.';
    return null;
}

export function validarMotivo(valor, { required = true } = {}) {
    if (required && !valor) return 'Selecciona un motivo de contacto.';
    return null;
}

export function validarMensaje(valor, { required = true, minLength = 20, maxLength = 300 } = {}) {
    const texto = valor.trim();
    if (required && !texto) return 'Escribe un mensaje.';
    if (texto.length < minLength) return `Mínimo ${minLength} caracteres (llevas ${texto.length}).`;
    if (texto.length > maxLength) return `Máximo ${maxLength} caracteres.`;
    return null;
}