export function obtenerTodos(coleccion) {
    return JSON.parse(localStorage.getItem(coleccion)) || [];
}

export function obtenerPorId(coleccion, id) {
    return obtenerTodos(coleccion).find((item) => String(item.id) === String(id)) || null;
}

export function crear(coleccion, dato) {
    const lista = obtenerTodos(coleccion);
    const nuevo = { ...dato, id: Date.now() };
    lista.push(nuevo);
    localStorage.setItem(coleccion, JSON.stringify(lista));
    return nuevo;
}

export function actualizar(coleccion, id, dato) {
    const lista = obtenerTodos(coleccion);
    const indice = lista.findIndex((item) => String(item.id) === String(id));
    if (indice === -1) return null;

    lista[indice] = { ...lista[indice], ...dato, id: lista[indice].id };
    localStorage.setItem(coleccion, JSON.stringify(lista));
    return lista[indice];
}

export function borrar(coleccion, id) {
    const lista = obtenerTodos(coleccion);
    const nuevaLista = lista.filter((item) => String(item.id) !== String(id));
    localStorage.setItem(coleccion, JSON.stringify(nuevaLista));
    return nuevaLista.length < lista.length;
}

export function guardarCookie(nombre, valor, dias = 30) {
    const msPorDia = 24 * 60 * 60 * 1000;
    const expira = new Date(Date.now() + dias * msPorDia).toUTCString();
    document.cookie = `${nombre}=${encodeURIComponent(JSON.stringify(valor))}; expires=${expira}; path=/; SameSite=Lax`;
}

export function leerCookie(nombre) {
    const encontrada = document.cookie
        .split('; ')
        .find((fila) => fila.startsWith(`${nombre}=`));
    if (!encontrada) return null;

    try {
        return JSON.parse(decodeURIComponent(encontrada.split('=')[1]));
    } catch {
        return null;
    }
}