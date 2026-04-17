/*
function multiplication(...rest){
    let resultado = 1;
    for(const res of rest){
        resultado *= res
    }
    return resultado
}

console.log(multiplication(1, 2, 3));

function sumAll(...rest) { // args es el nombre del array
  let sum = 0;

  for (let rests of rest) sum += rests;

  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6

*/

/*
    1. Creacion de un arreglo basado en los parametros que pasa un usuario
    2. El rest recoge todos los parametros que le pasa un usuario sin limite
    3. Podemos utilizar map, filter o reduce
*/
function crearArray(...rest){
    console.log(rest)
}

crearArray(1,2,3,4,5,6,7,8,9,10)