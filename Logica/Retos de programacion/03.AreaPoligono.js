/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

//Paso 1: Crear una funcion que solo pueda recibir un poligono a la vez
//   Paso 1.1: Verificar el parametro que se esta entregando en base a las caracteristicas de un poligono

function isTriangulo(poligono) {}
function isCuadrado() {}
function isRectangulo() {}
let areaToPoligono = (poligono) => {
  //Verificacion del poligono
  isCuadrado(poligono);
  isRectangulo(poligono);
  isTriangulo(poligono);
  if (poligono === "triangulo") {
  }
};
