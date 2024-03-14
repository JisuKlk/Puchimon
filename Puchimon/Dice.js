// #region Funciones --- Tenemos funciones aparte para mayor orden, exportamos las funciones.

// #region Dados --- Los 3 dados los tenemos aquí declarados
export function d6() {
    let number = getRandomInt(7);
    if (number === 0) {
        return number = d6();
    }
    return number;
}

export function d3() {
    let number = getRandomInt(4);
    if (number === 0) {
        return number = d3();
    }
    return number;
}

export function d2() {
    var random_boolean = Math.random() < 0.5;
    return random_boolean;
}
// #endregion

// Función básica que te da un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// #endregion