//0. Declaracion
let autos = ["Kia", "Volkswagen", "Citroen", "Audi"];

//1. Remplazar elementos del arreglo
autos[1] = "BMW";
console.log({ autos });

//2. Obtener el largo del arreglo
console.log(`El largo de arreglo es: ${autos.length}`);

//3. ¿Que puede almacenar un array?
autos = [
  "Kia",
  "Volkswagen",
  { marca: "Citroen", motor: 1.4, tipo: "Suv" },
  "Audi",
];
console.log(`Acceder a la clase: ${autos[2].marca}`);

//4. Obtener el ultimo elemento
let obtenerUltimoElemento = autos.at(-1);
console.log(`El ultimo elemento del arreglo es: ${obtenerUltimoElemento}`);

//5. Manipulacion de una COLA
autos.push("Renault");
console.log(`El nuevo elemento es: ${autos.at(-1)}`);

console.log(autos.shift());

console.log(`Ahora el primer elemento es: ${autos[0]}`);
autos.unshift("Mazda");

console.log(`Se agrego ${autos[0]} al inicio: ${autos}`);

//6. Manipulacion de una PILA
let frutas = ["Manzana", "Pera", "Sandia", "Platano"];

let quitarUltimoElemento = frutas.pop();
console.log(`Se quitó: ${quitarUltimoElemento} → ${frutas}`);

frutas.push("Cereza");
console.log(`Nuevo array de frutas: ${frutas}`);

//7. Arrays multidimensionales
let matriz = [
  [1, 2, 3],
  [4.5, 6],
  [7, 8, 9],
];

//8. forEach (iterar)
autos.forEach((auto) => console.log(auto));

/* ===============================
   METODOS QUE FALTABAN
================================ */

//9. map → transformar (NO muta)
const autosMayus = autos.map((auto) =>
  typeof auto === "string" ? auto.toUpperCase() : auto.marca.toUpperCase(),
);
console.log("map:", autosMayus);

//10. filter → filtrar elementos
const soloStrings = autos.filter((auto) => typeof auto === "string");
console.log("filter:", soloStrings);

//11. find → encontrar un elemento
const autoConObjeto = autos.find((auto) => typeof auto === "object");
console.log("find:", autoConObjeto);

//12. includes → verificar existencia
console.log("includes Audi:", autos.includes("Audi"));

//13. indexOf → obtener indice
console.log("indexOf BMW:", autos.indexOf("BMW"));

//14. slice → copiar una parte (NO muta)
const copiaAutos = autos.slice(1, 3);
console.log("slice:", copiaAutos);

//15. splice → eliminar / reemplazar (MUTA)
autos.splice(1, 1, "Tesla");
console.log("splice:", autos);

//16. reduce → acumular
const totalLetras = autos.reduce((acc, auto) => {
  if (typeof auto === "string") return acc + auto.length;
  return acc + auto.marca.length;
}, 0);
console.log("reduce (total letras):", totalLetras);

//17. some → al menos uno cumple
const haySUV = autos.some(
  (auto) => typeof auto === "object" && auto.tipo === "Suv",
);
console.log("some:", haySUV);

//18. every → todos cumplen
const todosSonString = autos.every((auto) => typeof auto === "string");
console.log("every:", todosSonString);

//19. sort → ordenar (MUTA)
let numeros = [10, 5, 100, 1];
numeros.sort((a, b) => a - b);
console.log("sort:", numeros);

//20. join → unir en string
console.log("join:", frutas.join(" - "));

//21. flat → aplanar arrays
console.log("flat:", matriz.flat());

/* ===============================
   EJERCICIO
================================ */

let style = ["Jazz", "Blues"];

style.push("Rock-n-Roll");

if (style.length % 2 === 1) {
  let medio = Math.floor(style.length / 2);
  style[medio] = "Classics";
}

console.log(style);
