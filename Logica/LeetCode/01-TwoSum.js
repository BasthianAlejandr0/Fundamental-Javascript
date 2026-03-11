/**
 * 1. Suma de Dos Números (Two Sum)
 * Dificultad: Fácil
 *
 * Dado un arreglo de enteros `nums` y un entero `target`,
 * retorna los índices de los dos números que suman `target`.
 *
 * Puedes asumir que cada entrada tiene exactamente una solución,
 * y no puedes usar el mismo elemento dos veces.
 * Puedes retornar la respuesta en cualquier orden.
 *
 * Ejemplo 1:
 *   Input:  nums = [2,7,11,15], target = 9
 *   Output: [0,1]
 *   Explicación: nums[0] + nums[1] == 9, retornamos [0, 1].
 *
 * Restricciones:
 *   - 2 <= nums.length <= 10^4
 *   - -10^9 <= nums[i] <= 10^9
 *   - -10^9 <= target <= 10^9
 *   - Solo existe una respuesta válida.
 */

//Explicacion simple: buscar la suma de 2 indices que den 9
// paso 1: el primer recorrido sumarlo con el siguiente
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let match = nums[i] + nums[i + 1];
    if (match === target) {
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
