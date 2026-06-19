/*
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);
*/

/*
 * 1. Un sistema de riego que activa la bomba, luego verifica si el suelo tiene humedad suficiente.
 *    Si no la tiene, vuelve a activar. Si la tiene, para.
 */

// let humedad = 70; // Aumenta en 20 cada ciclo, limite 100
// let estaLloviendo = false;
// const limite = 100

// const activarRiego = (humedad, estaLloviendo) => {
//   if(humedad%2 !== 0){
//     throw new Error('Sobrepasara los 100')
//   }
//   if (estaLloviendo === true) {
//     throw new Error('Esta lloviendo');
//   }

//   if (humedad === limite) {
//     throw new Error('Esta en 100');
//   }

//   do {
//     humedad += 20;
//     console.log(`Humedad en ${humedad}`)
//     if (humedad <=limite) {
//       console.log(`El loop ha llegado al límite ${limite}`)
//       break
//     }
//   } while (humedad < limite);
// }

// activarRiego(humedad, estaLloviendo);




/**
 * 2. Escibir una funciion pedirNumero() que simule pedirle a un usuario un numero entre 1 y 10;
 *  - Simularlo con Math.random() en cada iteracion como si fuera el input del usuario
 *  - Condicion: Cuando el numero caiga entre 1 y 10 parar
 *  - Extra: Se debe imprimir cada intento 
*/ 


const pedirNumero = () => {
  let input;
  let contador = 0;
  do{
    contador++;
    input = Math.floor(Math.random() * 15) + 1;
  }while(input >10 || input < 1);

  console.log(`Tu numero es: ${input} y los intentos fueron: ${contador}`)
}

pedirNumero()