const usuarios = [
    { nombre: "Ana", edad: 17, email: "ana@gmail.com", activo: true },
    { nombre: "Luis", edad: 23, email: "", activo: false },
    { nombre: "Basthian", edad: 28, email: "bas@gmail.com", activo: true },
    { nombre: "María", edad: 15, email: "maria@gmail.com", activo: true },
    { nombre: "Pedro", edad: 31, email: "", activo: false }
];

/**
 * Escribe una función procesarUsuarios(users) que:
    1. Filtre solo los usuarios activos y con email válido
    2. Verifique que todos los usuarios resultantes sean mayores de 18
    3. Retorne el nombre del primer usuario válido encontrado
    4. Retorne cuántos usuarios pasaron el filtro
    5. Retorna { primerUsuario, totalValidos, todaysMayores }.
 */

function procesarUsuarios(arr) {
    //1.
    let totalValidos = arr.filter((current) => current.email !== "" && current.activo === true)
    let usuarioFiltrodosCantidad = totalValidos.length
    //2.
    let verificarMayoriaDeEdad =  totalValidos.every((current) => current.edad > 18)
    if(verificarMayoriaDeEdad === false){
        //3. 
        totalValidos = totalValidos.filter(u => u.edad > 18)
    }
    let primerEncontrado = totalValidos.find(element => element.activo === true)
    //4. 
    let usuarioPasaronFiltro = totalValidos.length
    //5.
    let primeroNombre= primerEncontrado.nombre 
    return {
        primeroNombre,
        usuarioFiltrodosCantidad,
        totalValidos
    }


}

console.log(procesarUsuarios(usuarios));