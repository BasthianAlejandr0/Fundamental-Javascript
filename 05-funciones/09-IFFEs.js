//Sintaxis
/**
 * Dos cosas a notar:
    - Los paréntesis externos () convierten la función en una expresión
    - Los paréntesis finales () la invocan inmediatamente
 */

//IFFEs expresión de funcion    
(function(){
    const message = `Hola soy privado con expresión de funcion`;
    console.log(message);
})();

//IFFEs con arrow function
(() => {
    const message = `Hola soy privado con arrow function`;
    console.log(message);
})();

//----Ejercicio-------

/*
    - Escribe una IIFE que inicialice una configuración de conexión a una base de datos — host, puerto y nombre de base de datos. 
    - Esos valores deben quedar completamente privados.
    -  La IIFE debe retornar solo un objeto con un método getConfig() que exponga la configuración, y asigna ese resultado a una variable db.
        Llama db.getConfig() al final y muestra la config en consola.
 */


const db = (()=> {
    const _db = {
        host: "Server Oracle",
        puerto: 8000,
        nombre: "Principal db",
    }
    return {
        getConfig: ()=> _db
    }
})();

console.log(db.getConfig())