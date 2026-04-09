/**
 * 1. Dado un arreglo con nombre y rol
 * 2. Crear una función principal que valida el rol del usuario
 *  2.1. Se le pasa como argumento una funcion declaracion que sirve para rol requerido
 * 3. Crear una funcion declaracion para aplicar hoisting y closure
 *  3.1. Esta debe recibir un usuario y retornar true o false si tiene el rol correcto
 * 4. La funcion principal debe retornar la funcion declaracion
 */

const usuarios = [
  { nombre: "Basthian", rol: "admin" },
  { nombre: "Ale", rol: "user" },
  { nombre: "Tuti", rol: "admin" },
];



const crearValidador = (rolRequerido) => {
  return (usuario) => {
    let esRol = usuario.rol === rolRequerido ? true : false;
    console.log(esRol)
  }
}

const esAdmin = crearValidador("admin");

esAdmin(usuarios[0]); // true
esAdmin(usuarios[1]); // false
