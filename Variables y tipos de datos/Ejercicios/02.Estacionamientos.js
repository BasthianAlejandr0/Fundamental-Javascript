/*
 * SISTEMA DE ESTACIONAMIENTO - OFICINA
 *
 * Contexto:
 * La oficina cuenta con 3 estacionamientos compartidos y 1 exclusivo del gerente.
 * El estacionamiento del gerente está fuera del sistema (no se gestiona aquí).
 *
 * Problema:
 * No hay forma rápida de saber qué estacionamientos están disponibles,
 * lo que genera pérdida de tiempo revisando uno por uno.
 *
 * Solución:
 * Modelar los 3 estacionamientos compartidos como una colección de objetos,
 * cada uno con su área asignada y estado de ocupación,
 * para consultar disponibilidad en un solo lugar.
 */

//1. Definir un arreglo para guardar los estacionamientos y Definir diccionario con cada auto y dueño

// 301 305 312
const estacionamiento301 = {
  nombre: "Estacionamiento TI",
  capacidad: 1,
  autorizados: {
    Basthian: "Kia",
    Sebastian: "Volkswagen",
    Hugo: "Kia",
  },
  ocupado: false,
};

const estacionamiento305 = {
  nombre: "Estacionamiento Comercial",
  capacidad: 1,
  autorizados: {
    Santiago: "Peugeot",
    Jenni: "Chevrolet",
    Tomas: "Mazda",
  },
  ocupado: "Jenni",
};

const estacionamiento312 = {
  nombre: "Estacionamiento Proyectos",
  capacidad: 1,
  autorizados: {
    Antonio: "Nissan",
    Brian: "Kia",
    Jaime: "Keeway",
  },
  ocupado: "Brian",
};

let estacionamientos = [
  estacionamiento301,
  estacionamiento305,
  estacionamiento312,
];

let verificarEstacionamientoOcupado = (estacionamiento) => {
  //1. Verificar si esta ocupado
  if (estacionamiento.ocupado === false) {
    return "Esta libre";
  } else {
    let Verificar = `${estacionamiento.nombre}: OCUPADO por ${estacionamiento.ocupado} con el auto ${estacionamiento.autorizados[estacionamiento.ocupado]}`
    return Verificar;
  }
};

for (let estacionamientoIterador of estacionamientos) {
  console.log(verificarEstacionamientoOcupado(estacionamientoIterador));
}
