/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

// Paso 1: i tiene que partir desde el ultimo indice
//   Paso 1.1: Para eso necesitamos que tome el valor del ultimo indice
//   Paso 1.2: Luego una condicion para que se limite hasta llegar a 0
//   Paso 1.3: iteramos y obtenemos los valores
// Paso 2: La inversión de las cadenas nos pasa los valores uno a uno, debemos pasar todo en un string
//   Paso 2.1:

let cadena = "hola";
let cadena2 = "";
for (let i = cadena.length - 1; i >= 0; i--) {
  cadena2 += cadena[i];
}
console.log(cadena2);
