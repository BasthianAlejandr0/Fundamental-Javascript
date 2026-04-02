/*
 * COMPARADOR DE BENCINERAS
 *
 * Contexto:
 * Encontrar dónde cargar combustible implica revisar múltiples bencineras
 * manualmente, sin saber si el precio que ves es bueno o malo respecto
 * al mercado local.
 *
 * Problema:
 * No hay forma rápida de saber si el precio de una bencinera está
 * sobre o bajo la media del mercado para un octanaje específico.
 *
 * Solución:
 * Modelar un conjunto de bencineras con su precio por octanaje,
 * calcular la media de precios y clasificar cada bencinera
 * como BAJO LA MEDIA o SOBRE LA MEDIA.
 *
 * Alcance v1:vb 
 * - Octanaje fijo: 95
 * - Sin UI, solo lógica
 * - Sin factor distancia (v2)
 */

const Aramco = {
    nombre: "Aramco",
    combustible: {
        diesel: 1500,
        bencina:{
            oct93: {
                octanaje: 93,
                precio: 1530
            },
            oct95: {
                octanaje: 95,
                precio: 1630
            },
            oct97: {
                octanaje: 97,
                precio: 1730
            }
        },
        kerosene: 1200
    }
}

const Shell = {
    nombre: "Shell",
    combustible: {
        diesel: 1510,
        bencina: {
            oct93: {
                octanaje: 93,
                precio: 1540
            },
            oct95: {
                octanaje: 95,
                precio: 1645
            },
            oct97: {
                octanaje: 97,
                precio: 1750
            }
        },
        kerosene: 1220
    }
};

const Copec = {
    nombre: "Copec",
    combustible: {
        diesel: 1495,
        bencina: {
            oct93: {
                octanaje: 93,
                precio: 1525
            },
            oct95: {
                octanaje: 95,
                precio: 1625
            },
            oct97: {
                octanaje: 97,
                precio: 1725
            }
        },
        kerosene: 1190
    }
};

let bencineras = [Copec, Aramco, Shell]

//1. Funcion para obtener la media
let obtenerMedia = (bencineras) => {
    let arr = []
    for(let bencinera of bencineras) {
        let precio = bencinera.combustible.bencina.oct95.precio
        arr.push(precio)
    }
    const media = arr.reduce((a,b) => a+b, 0)/arr.length
    return media
}

let media = obtenerMedia(bencineras)
const clasificarBencineras = (array) => {
    for(let indice of array) {
        let precio = indice.combustible.bencina.oct95.precio
        if(precio > media) {
            console.log(`${indice.nombre}: $${precio} Sobre la media`)
        } else if (precio < media){
            console.log(`${indice.nombre}: $${precio} Bajo la media`)
        } else if(precio === media){
            console.log("Igual a la media")
        }
    }
}

clasificarBencineras(bencineras);