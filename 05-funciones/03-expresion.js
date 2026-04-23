// Importante: Una funcion es un valor, estamos almacenando una funcion dentro de una variable por ende es una funcion

let sayHi = function (nombre) {
  return "Hola" + nombre;
};
console.log(sayHi("Dakota"));

// Podemos copiar inclusive el valor
let fun = sayHi;
sayHi();
fun(); // Retorna lo mismo
