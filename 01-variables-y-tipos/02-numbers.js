// 1. Notación de un numero en js
let numero = 16;

// 2. Convertir number a string
let aPalabra = numero.toString(16); // Dentro del parentesis debe ir la BASE
console.log(aPalabra);

// 3. Redondeo
numero = 1.234
let haciaAbajo = Math.floor(numero)   // floor: Redondea hacia abajo
let haciaArriba = Math.ceil(numero)   // ceil:  Redondea hacia arriba
let entoroCercano = Math.round(numero * 100 * 0.5) // round: Redondea hacia el entero mas cercano
let remueveTraspunto = Math.trunc(numero) // trunc: Remueve lo que haya tras el punto decimal sin redondear
let redondeoNDigitos = numero.toFixed(2)
console.log(`Floor: ${haciaAbajo} \n Ceil: ${haciaArriba} \n Round: ${entoroCercano} \n Trunc: ${remueveTraspunto} \n ToFixed: ${redondeoNDigitos}`)

// 4. ParseInt y ParseFloat
numero = '1000+';
let convertirAInt = parseInt(numero);
console.log(convertirAInt);
numero = '12.5em';
let convertirAFloat = parseFloat(numero);
console.log(convertirAFloat);

// Ejercicio: Crea una funcion readNumber que pida un numero hasta que el visitante ingrese un valor numerico valido
const readNumber = (num) => {
  if (typeof(num) === 'number') {
    return 'Is a number';
  }
  return false;
}

console.log(readNumber(1));
