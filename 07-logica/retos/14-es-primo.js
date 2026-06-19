/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 * Condiciones para numero primo: 
 *  1. Tiene que ser mayor a 1
 *  2. pueden ser dividido por si mismo y 1.
 */

//Bucle encargado de recorrer 100 numeros a partir del 1, en cada iteracion se llama a esPimo()
// 1. Corrección de tu función flecha (cambiando 'n' por 'num')
const esPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2, raiz = Math.sqrt(num); i <= raiz; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 2. Estructura con bucle while del 1 al 100
let contador = 1; // Inicialización

while (contador <= 100) { // Condición de parada
    if (esPrimo(contador)) {
        console.log(`${contador} es primo`);
    }
    contador++; // Incremento obligatorio para evitar bucle infinito
}