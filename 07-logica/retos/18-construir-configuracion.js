/*
    Escribe una función construirConfig(base, ...overrides) que:
        1. Reciba un objeto base y N objetos adicionales como overrides    
        2. Fusione todos en un objeto final — cada override sobreescribe el anterior
        3. Retorne la config final sin mutar base
        Llámala con 3 argumentos distintos.
        ↯ Rompe: ¿qué pasa si no pasas ningún override? ¿Y si uno de los overrides es null?
*/

/**
 * 1. Intuicion:
 *      1. Crear un objeto base
 *      2. Crear otros objetos para fusionarlos con el objeto principal
 *      3. Retornar objeto
*/

const color = {
    color: "Azul"
}

const motor = {
    cilindrada: 1400
}

const auto = {
    marca: "kia",
}

function construirConfig(base, ...rest){
    const objetoFinal = Object.assign({}, base, ...rest)
    console.log(objetoFinal)

}

construirConfig(auto, motor, null);