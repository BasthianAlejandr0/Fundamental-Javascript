/**
 * 1. Primera lista: Gastos registrados
 */

let gastosRegistrados = [
  {
    producto: 'Escalera',
    precio: 39.990,
    fecha: '19/01/2026',
    categoria: 'Herramientas de altura'
  },
  {
    producto: 'Rotomartillo',
    precio: 89.990,
    fecha: '20/01/2026',
    categoria: 'Herramientas eléctricas'
  },
  {
    producto: 'Esmeril angular',
    precio: 45.500,
    fecha: '21/01/2026',
    categoria: 'Herramientas eléctricas'
  },
  {
    producto: 'Nivel láser',
    precio: 52.000,
    fecha: '22/01/2026',
    categoria: 'Medición'
  },
  {
    producto: 'Carretilla reforzada',
    precio: 55.900,
    fecha: '23/01/2026',
    categoria: 'Transporte'
  },
  {
    producto: 'Pala punta huevo',
    precio: 12.990,
    fecha: '24/01/2026',
    categoria: 'Herramientas manuales'
  },
  {
    producto: 'Huincha de medir 8m',
    precio: 8.500,
    fecha: '25/01/2026',
    categoria: 'Medición'
  }
];

// Herramientas de tipo eléctrica
let herramientasElectricas = gastosRegistrados.filter((herramienta) => herramienta.categoria === 'Herramientas eléctricas')
console.log('Herramientas electricas :', herramientasElectricas);

// IVA de 19%
let iva = herramientasElectricas.map(item => (item.precio * 1.19));
console.log('iva : ', iva);

// Total con IVA
let totalConIva = herramientasElectricas.reduce((acc, item) => {
  return acc + item.precio * 1.19
}, 0)
console.log((totalConIva))

// miMap
function miMap(array, fn) {
  // Para map esta funcion siempre tiene que recorrer el arreglo array
  let elemento;
  let nuevoArreglo = [];
  for (let i = 0; i < array.length; i++) {
    elemento = array[i]
    nuevoArreglo.push(fn(elemento));
  }
  return nuevoArreglo;
  // La funcion corresponde a la operacion que ingresa el usuario para manipular el array
}

console.log(miMap(herramientasElectricas, (fn) => fn));
