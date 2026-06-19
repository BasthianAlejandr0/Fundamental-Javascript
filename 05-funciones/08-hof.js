/**
 * Las funciones de orden superior son:
 * 1. Aquellas que pueden realizar al menos una o mas funciones como argumento
 * 2. Devolver una funcion como resultado de su ejecucion
 */

let arreglo = [1, 2, 3, 4, 5];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map
let arregloMap = arreglo.map((item) => {
  return item * 2
})
console.log(`Con map recorremos cada numero de la lista y lo multiplicamos por 2: ${arregloMap}`)

// Filter
let arregloFilter = arreglo.filter((item) => item % 2 === 0)
console.log(`El arreglo filtrado por multiplos de 2 es: [${arregloFilter}]`)

// Reduce
const valorInicial = 0;
const sumaConInicial = arreglo.reduce(
  (acomulador, valorActual) => acomulador + valorActual,
  valorInicial
)

const suma = numeros.reduce((a, b) => a + b)
console.log(suma)

console.log(sumaConInicial);

// ===== Ejercicios ==============

/*
 * 1. Map: Recorre el arreglo y accede a cada elemento
 */
function miMap(array, fn) {
  // Para map esta funcion siempre tiene que recorrer el arreglo array
  let elemento;
  let nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    elemento = array[i]
    nuevoArreglo.push(fn(elemento));
  }
  return nuevoArreglo;
  // La funcion corresponde a la operacion que ingresa el usuario para manipular el array
}

console.log(miMap(numeros, (fn) => fn * 2));


function miFilter(array, callback) {
  let newArray = []
  //1. Recorremos cada elemento 
  for(let i=0; i< array.length; i++){
    //2. Aplicamos el callback con una condicion que viene como parametro
    if(callback(array[i])){
      newArray.push(array[i])
    }
  }
  return newArray
}
console.log(miFilter(["spray", "elite", "exuberant", "destruction", "present"], (fn)=> fn.length >5))


function miReduce(){
  
}


let autos = ['audi', 'bmw', 'kia', 'citroen'];

//Find: Devuelve el primer elemento del arreglo que cumple esa condicion
const encontrar = autos.find((e) => e.length > 3);
console.log(encontrar)

//FindIndex: Devuelve el indice del primer elemento de un array que cumpla con la funcion de prueba proporcionada.
const array1 = [5, 12, 8, 130, 44];
//1. Primer ponemos una condicion
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));


//Some: Comprueba si al menos un elemento del array cumple con la condicion implementada por la funcion proporcionada
//Verificar si es par
const even = (element) => element %2 ===0;
console.log(array1.some(even))


//Every: Prueba si todos los elementos del arreglo pasan la prueba implementada por la funcion proporcionada, devuelve boolean
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array1.every(isBelowThreshold));