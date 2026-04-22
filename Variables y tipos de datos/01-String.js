//1. Declaracion de un string
let palabra = 'Soy un string';
let saludo = 'Hola'
// 2. Declaracion con backticks
palabra = `Soy un string ${saludo}`

//===== Métodos ==============
//1. Largo de una palabra
let largo = palabra.length;
console.log(largo);



//2. Acceso a caracteres
let primeraLetra = palabra[0]; // Accede a la primera letra
let primeraLetraConAt = palabra.at(0)
console.log(primeraLetra, primeraLetraConAt);

let ultimaLetra = palabra[palabra.length - 1] // Accede a la ultima letra
let ultimaLetraConAt = palabra.at(-1)
console.log(ultimaLetra, ultimaLetraConAt)



//3. Capitalización 
let palabraEnMinuscula = palabra.toLowerCase();
console.log(palabraEnMinuscula);
let palabraEnMayuscula = palabra.toUpperCase();
console.log(palabraEnMayuscula);



//4. Subcadena de caracteres
let subcadena = palabra.indexOf('yu');//1,2
console.log(subcadena);



//5. Verificacion de caracteres
let existe = palabra.includes('hola');//false
console.log(existe);



let comienzaCon = palabra.startsWith('Soy'); //True
console.log(comienzaCon);
let terminaCon = palabra.endsWith('Hola');//true



//6. Obteniendo un substring
let substring = palabra.slice(0,5);
console.log(substring);


//====Tarea======

//1. Hacer mayúscula el primer caracter
let convertidorPrimerCaracter = (str) => {
    let primerCaracter = str.at(0);
    let pasarMayuscula = primerCaracter.toUpperCase();
    return pasarMayuscula;
}
console.log("El primer caracter a mayuscula es:",convertidorPrimerCaracter('Hola'));

//2.
let contiene = (str) => {
    let insensibilizar = str.toLowerCase();
    if(insensibilizar.includes('viagra') || insensibilizar.includes('xxx')) {
        return true;
    } else{
        return false;
    }
}

console.log(contiene('VIAGRA'));

//3. 
let verificarLongitud = (str, maxlength) => {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }


console.log(verificarLongitud('hodddda',5))