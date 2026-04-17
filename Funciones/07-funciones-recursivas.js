/*
    function pow(x, n) {
        if(n == 1) { // Base de la recursividad
            return x;
        } else {
            return x * pow(x, n - 1); //Paso recursivo
        }
    }
*/

/*
function cuentaAtras(num) {
  if (num < 0) return; 
  console.log(num);
  cuentaAtras(num - 1); 
}
cuentaAtras(5)
*/

// function calcularFactorial(num){
//     //1. Condicionar que num sea menor o igual a 1
//     if(num === 0){
//         return 0;
//     } else if (num === 1){
//         return 1;
//     } else{
//         return num * calcularFactorial(num - 1)
//     }
// }

// console.log(calcularFactorial(5))

// function sumaNumeros(num){
//     if(num <= 0) {
//         return 0;
//     };
//     return num + sumaNumeros(num - 1)
// }
// console.log(sumaNumeros(6))

function calcularFibonacci (num) {
    //1. Casos bases
    if(num === 1 || num === 0){
        return num;
    }
    return calcularFibonacci(num-1) + calcularFibonacci(num-2)
}

console.log(calcularFibonacci(7))


