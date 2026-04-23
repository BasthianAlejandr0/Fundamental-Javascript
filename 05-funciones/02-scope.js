function showMessage() {
  // La variable dentro de la funcion solo es visible en esta.
  let message = "Hola mundo";
  console.log(message);
}

showMessage();

// ----------------------------------------------------------------
let name = "Dakota";
// La funcion puede acceder a una varible externa si esta es declarada afuera
// La funcion incluso puede ser modificada dentro de la funcion.
function showName() {
  name = "Denver";
  let ShowName = "Hola" + name;
  console.log(ShowName);
}
console.log(name); // Dakota
showName(); // Denver
// ----------------------------------------------------------------
// Variable sombra
let grito = "aaaaaaa";
function gritar() {
  let grito = "AAAAA";
  console.log(grito); // La funcion ignora la variable externa y toma solo la de dentro
}
