// 0. Definir un map
let mapa = new Map();
console.log(mapa);

// 1. Almacenar un valor asociado a una llave (key)
mapa.set('Nombre', 'Dakota'); // Clave: nombre, Valor: Dakota
console.log(mapa);

// 2. Obtener un elemento clave
console.log(mapa.get('Nombre'));

// 3. Verificacion
console.log(mapa.has('Nombre')); // Verifica si existe esa clave

// 4. Borrar clave
mapa.delete('Nombre');
console.log(mapa)

// 5. Borrar todo el map
mapa.set('Nombre', 'Dakota');
mapa.set('Edad', 3);
mapa.set('Peso', '3kg');
console.log(mapa)
mapa.clear();
console.log(mapa);

// 6. Obtener tamaño del mapa
mapa.set('Nombre', 'Dakota');
console.log(mapa.size);
