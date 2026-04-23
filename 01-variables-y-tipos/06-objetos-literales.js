let user = {
  nombre: "Basthian",
  apellido: "Araya",
  edad: 24,
  greeting() {
    return `Hola`
  }
}

// 1. Acceso a propiedades
console.log('user.nombre :', user.nombre);
console.log('user["nombre"] :', user["nombre"]);

// 2. Eliminar propiedades
delete user.apellido
console.log('delete user.apellido :', user);

// 3. Verificación de propiedad en objeto
console.log('"edad" in user :', "edad" in user);

// 4. Shorthand
console.log('user.greeting(this.nombre) :', user.greeting());

// 5. Desestructuración
let { nombre, apellido, edad, greeting } = user;
console.log(nombre)
console.log(greeting());
