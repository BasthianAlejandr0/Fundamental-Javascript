//0. Declaracion 
let autos = ['Kia', 'Volkswagen', 'Citroen', 'Audi'];

//1. Remplazar elementos del arreglo
autos[1] = 'BMW'
console.log({autos})

//2. Obtener el largo del arreglo
console.log(`El largo de arreglo es: ${autos.length}`)

//3. ¿Que puede almacenar un array?
autos = ['Kia', 'Volkswagen', {marca:'Citroen', motor: 1.4, tipo: 'Suv'}, 'Audi'];
console.log(`Acceder a la clase: ${autos[2].marca}`);

//4. Obtener el ultimo elemento
let obtenerUltimoElemento = autos.at(-1)//se le asigna el -1
console.log(`El ultimo elemento del arreglo es: ${obtenerUltimoElemento}`);

//5. Manipulacion de una COLA
//? Cola: Coleccion ordenada de elementos
autos.push('Renault');
console.log(`El nuevo elemento es: ${autos.at(-1)}`);

console.log(autos.shift())
console.log(`Ahora el segundo elemento pasa a ser el primero: ${autos[0]}`)
let agregarElementoPrincipio = autos.unshift('Mazda');
console.log(`Se agrego ${autos[0]} al array de autos: ${autos}`)

//6. Manuipulacion de una PILA
let frutas = ['Manzana', 'Pera', 'Sandia', 'Platano'];
let quitarUlimoElemento = frutas.pop();// es de tipo string pop
console.log(`Se quito el ultimo elemento que es: ${quitarUlimoElemento} \n Por ende solo queda: ${frutas}`);

let agregarElemento = frutas.push('Cereza'); // es de tipo number push
console.log(`Se agrego un elemento al final que es: ${frutas[agregarElemento-1]} \n El nuevo array es: ${frutas}`);

//7. Arrays multidimencionales
let matriz = [
    [1,2,3],
    [4.5,6],
    [7,8,9],
];


//Ejercicio

let style = ['Jazz', 'Blues'];
//1. Agregar Rock-n-Roll al final
style.push('Rock-n-Roll');
//2. Encontrar el elemento del medio

if(style.length&2>1){
    let medio = Math.floor(style.length/2)
    style[medio] = 'Classics'
}
console.log(style)
