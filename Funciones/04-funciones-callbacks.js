//Callback
function saludar(nombre, Callback) {
  console.log("Hola" + nombre);
  Callback();
}

function despedir() {
  console.log("Adios");
}
saludar("Ana", despedir);

//Callback asíncrono
console.log("Inicio");
setTimeout(function () {
  console.log("Esto pasa después de 2 segundos");
}, 2000);
console.log("Fin");

//Callback en foreach
const numeros = [1, 2, 3];
numeros.forEach(function (num) {
  console.log(num * 2); // Callback que multiplica cada número
});

//Callback en DOM

const boton = document.querySelector("button");
boton.addEventListener("click", function () {
  alert("¡Botón clickeado!");
});
