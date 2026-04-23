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

// Explicacion: buscar la suma de 2 indices que den el target
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let suma = nums[j] + nums[i]
      if (suma === target) {
        return [i, j]
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);

// 1. Recorro el arreglo
// 2. Obtengo el valor del primero y lo sumo con el siguiente
