/**
 * Las funciones de orden superior son: 
 * 1. Aquellas que pueden realizar al menos una o mas funciones como argumento
 * 2. Devolver una funcion como resultado de su ejecucion
 */


// //Map
// let arreglo = [1,2,3,4,5];

// let arregloMap = arreglo.map(
//     (item) => {
//         return item * 2
//     } 
// )
// console.log(`Con map recorremos cada numero de la lista y lo multiplicamos por 2: ${arregloMap}`)

// //Filter
// let arregloFilter = arreglo.filter((item) => item%2===0)
// console.log(`El arreglo filtrado por multiplos de 2 es: [${arregloFilter}]`)


// //Reduce
// const valorInicial = 0;
// const sumaConInicial = arreglo.reduce(
//     (acomulador, valorActual) => acomulador + valorActual,
//     valorInicial
// )


// console.log(sumaConInicial);


//Funcion como argumento


//Funcion con retorno de funcion


//1. Ejercicio map
/*
 *1. Map: Recorre el arreglo y accede a cada elemento 
*/
let numeros = [1,2,3,4,5,6,7,8,9];

function miMap(array, fn){
    //Para map esta funcion siempre tiene que recorrer el arreglo array
    let elemento;
    let nuevoArreglo= [];
    for(let i = 0; i < array.length; i++){
        elemento= array[i]
        nuevoArreglo.push(fn(elemento));
    }
    return nuevoArreglo;
    //La funcion corresponde a la operacion que ingresa el usuario para manipular el array


}


console.log(miMap(numeros, (fn) => (fn/2).toFixed(3)));


