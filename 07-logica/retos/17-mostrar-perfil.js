const usuario = {
    nombre: "Basthian",
    edad: 28,
    rol: "admin",
    direccion: {
        ciudad: "Santiago",
        pais: "Chile"
    }
}
const usuario2 = {
    nombre: "Basthian",
    edad: 28,
    rol: "admin"
}

const mostrarPerfil = (user) => {
    const {nombre, edad, rol = 'Guest' ,direccion:{ciudad} = {}} = user

    console.log(nombre, edad, ciudad);
}

mostrarPerfil(usuario2)