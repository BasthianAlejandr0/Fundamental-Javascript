//Escribe una función pura normalizarEmail(email) que retorne el email limpio: sin espacios y en minúsculas.
// const normalizarEmail = (email) => {
//     return email.trim().toLowerCase();
// }

// let email = "  BASTHIAN@Gmail.Com  ";
// let emailToArray = email.split(",")
// console.log(emailToArray);




// const evento1 = ["Ana", "Luis", "Pedro"];
// const evento2 = ["Luis", "María", "Ana"];
// evento1.splice(3, 1, "Diego")
// console.log('evento1.splice() :', evento1);
// evento1.slice()



// let eventoN = [...evento1, ...evento2]
// const sinDuplicados = [...new Set(eventoN)]

// console.log(sinDuplicados);0

// console.log('producto :', producto.calcularTotal());

// const materiales = ["cemento", "arena", "fierro", "madera", "pintura"];

// console.log(materiales.slice(2,4));
// const removeArena = materiales.splice(1,1)
// console.log(materiales);
const producto = {
    nombre: "Cemento",
    precio: "daw",
    cantidad: 10,
    calcularTotal: function(){
        return this.precio * this.cantidad
    }
};


const obtenerPrecioProducto = (producto) => {
    if(producto === undefined || producto === null ) throw new Error("Producto es undefined o null")
    return producto.precio
}

try {
    let productoValido = obtenerPrecioProducto(producto)
    if(typeof producto.precio !== 'number'){
        throw new Error("No es de tipo number")
    }
    
} catch (err) {
    console.log(err)
}
