/*
Escribe una función analizarPrecios(obj) que use los tres métodos y retorne:
    1. El total de productos disponibles — Object.keys()
    2. El precio promedio — Object.values()
    3. Un listado formateado de cada producto con su precio — Object.entries()

Retorna { totalProductos, promedio, listado }.
*/

const precios = {
    manzana: 1500,
    naranja: 800,
    pera: 1200,
    uva: 2500,
    kiwi: 900
}


/**
 * Pensamiento algoritmico:
 * Intiucion: 
 *  1. Con un object.value obtengo solo los valores y con reduce obtenemos el valor de la suma total y esta la dividimos con el largo de la lista
 *  2. Con un object.key obtengo solo las claves y con esa lista aplico un lenght para poder un entero con el total de productos
 *  3. Con un object.entries
 * lo que necesito es  
 */


const analizarPrecios = (obj) => {
    //1. Primera parte
    let totalProductos = Object.keys(obj).length
    //2. Segunda parte
    let objValue = Object.values(obj)
    let sumaValores = objValue.reduce((acomulador, valorActual) => acomulador + valorActual)
    let promedio = sumaValores / objValue.length
    
    //3. Tercera parte
    let objEntries = Object.entries(obj)
    console.log('objEntries :', objEntries);
    let listado = objEntries.map((item) => item[0] + ":" + item[1]);
    return{totalProductos, promedio, listado}
}

analizarPrecios(precios)

