let user = {
  nombre: "Basthian",
  apellido: "Araya", 
  edad: 24,
  greeting() {
    return `Hola`
  }
}

// Se agrega la propiedad anidada 'dimensiones' para el ejemplo C
let auto = {
  color: "Blanco",
  motor: 1.4,
  dimensiones: {
    largo: 4.2,
    ancho: 1.8
  },
  acelerar: () => {
    console.log("Rum")
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

// !5. Desestructuración - Asignacion desestructurante
let { nombre, apellido, edad, greeting } = user;
console.log(nombre)
console.log(greeting());

// !6. Desestructuración - renombrado de propiedades
let { nombre: name, apellido: lastName } = user; // Corregido 'apellida'

// !7. Desestructuracion - valor por defecto
let { altura = 1.66 } = user;


// !C. Desestructuración Anidada (Profunda)
// Replicamos el patrón interno: extraemos 'largo' y 'ancho' directamente.
// 'alto' no existe dentro de 'dimensiones', por lo que toma su valor por defecto (1.5).
// Nota: No se crea una variable para el objeto intermedio 'dimensiones'.
let { dimensiones: { largo, ancho, alto = 1.5 } } = auto;

console.log('C. Anidada - largo :', largo); // 4.2
console.log('C. Anidada - ancho :', ancho); // 1.8
console.log('C. Anidada - alto (defecto) :', alto); // 1.5


// !D. Desestructuración en Parámetros de Función
// Los parámetros se convierten en variables locales instantáneamente.
// Usamos el patrón de seguridad '= {}' al final para evitar errores si se llama vacía.
function mostrarFichaAuto({ color = "Negro", motor: cc = 1.0, marca = "Genérica" }= {}) {
  console.log(`D. Función - Auto ${marca}, Color: ${color}, Motor: ${cc}L`);
}

// Llamada normal: usa el valor real de motor, pero 'marca' toma el valor por defecto
mostrarFichaAuto(auto); // Imprime: Auto Genérica, Color: Blanco, Motor: 1.4L

// Llamada vacía gracias al patrón de seguridad (= {}): todo toma valores por defecto
mostrarFichaAuto(); // Imprime: Auto Genérica, Color: Negro, Motor: 1.0L

// =========================================================================

// Métodos estáticos
let objectKey = Object.keys(auto) 
console.log('objectKey :', objectKey);

let objectValue = Object.values(auto)
console.log('objectValue :', objectValue);

let objectEntries = Object.entries(auto)
console.log('objectEntries :', objectEntries);

let objectAssign = Object.assign({}, user) // Corregido para realizar Shallow copy correctamente
console.log('objectAssign :', objectAssign);
console.log(user)
