/**
 * Escribir un funcion procesarNumero que reciba un numero y un callback. la funcion debe validar
 * que el numero sea positivo, si lo es ejecuta el callback pasandole ese numero y lo multiplicas por 2. si no lo es muestra un error.
 *  LLamalo dos veces: una con numero positivo y otra con numero negativo, usando callbacks distintos
 * 
 * 1. Intuicion
 *  - al numero le debemos aplicar un condicional if para verificar que sea mayor o igual a cero, de ser asi se ejcuta el callback que debe multiplicar por 2 el numero
 *  - si cae  en el else arroja error
 * 2. Sistema critico
 *  - obseravar: que pasa si aplicamos un string como parametro?
 *  - evaluar: hay alguna condicion para descartar que el parametro sea !== de 0
 *  - concluir: ya que el usuario si o si pasara como argumento una funcion y un numero no es necesario aun
 * 3. Socratico:
 *  - EL programa se cae si pasamos un string en el num y en el callback o otro tipo de dato
 *  - la solucion sobrevive a las preguntas socraticas
 */

function multiplicarPorDos(num){
    console.log(num*2);
}

function multiplicarPorDosNegativo(num){
    console.log(num*-2);
}


function procesarNumero(num, callback){
    if(num>0){
        callback(num);
    } else{
        throw new Error("Es negativo o cero")
    }
}

procesarNumero(2, multiplicarPorDos)
procesarNumero(-2, multiplicarPorDosNegativo)