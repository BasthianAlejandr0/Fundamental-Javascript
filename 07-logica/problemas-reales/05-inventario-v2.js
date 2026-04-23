/**
 * Escribe un sistema que:
 * - Parsee el string en un array de objetos { nombre, precio, cantidad }
 * - Valide cada material — lanza error si precio o cantidad no son números
 * - Calcule el total por material (precio * cantidad)
 * - Retorne solo los materiales cuyo total supere $50.000
 */

const input = `cemento,5990,10
arena,1200,50
fierro,8500,5
madera,3200,20
pintura,4800,8`;

// 1. Intuicion:
//    - Convertir el string en arreglo separado por comas con split
//    - Condicionar si el tipo de dato es number con typeof
//    - Acceder a cada key, multiplicar valor y cantidad
//    - Dentro de un try: early return para los menores a 50 mil, sino retorna los mayores

// 2. Sistema critico:
//    Observar:  Un problema seria que en la transformacion solo tenga string y no numbers.
//               Estoy dando por hecho que me arrojara el tipo de dato correspondiente.
//               Debo agrupar que cada material corresponde a precio y cantidad.
//    Evaluar:   Al condicionar el tipo de dato me aseguro de que no tendre tipos inesperados,
//               pero no tengo claro cómo convertir específicamente ese dato a number,
//               ya que "arena" y "1200" son string — ¿cómo identifico cuál convertir?
//    Concluir:  Tengo el problema parcialmente correcto. Los problemas son:
//               - Cómo convertir x string a number
//               - Agrupar el objeto con su key y valores agrupados

// 3. Socrático:
//    Identifiqué lo principal: la suposición invisible.
//    Elegí métodos que conocía, encontré un edge case:
//    manejar la transformación a tipos de datos y objetos agrupados correctamente.

let arr = input.split("\n");

try {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error("Input inválido");
  }
  for (const elem of arr) {
    const [nombre, precio, cantidad] = elem.split(",");

    // Coerción numérica explícita
    const total = Number(precio) * Number(cantidad);

    // Validación de negocio
    if (total < 50000) {
      continue;
    }

    console.log('total :', total);
  }
} catch (err) {
  console.error("Proceso interrumpido:", err.message);
} finally {
  console.log("Finalización del procesamiento de datos.");
}
