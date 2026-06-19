//Verificar si un numero es entero
/**
 * Intuicion:
 *  como saber si un numero es decimal?
 *      - 
 */


function isInteger(value){
    let division = value % 1;
    console.log(division)
}

console.log(isInteger(5))

// No modificar: necesario para evaluar el resultado.
export { isInteger };