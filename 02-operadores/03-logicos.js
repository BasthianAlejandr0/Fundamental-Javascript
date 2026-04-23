// Operador Or
let hour1 = 9;
if (hour1 < 10 || hour > 18) {
  alert("La oficina esta cerrada.");
}

// Operador And
let hour2 = 12;
let minute = 30;
if (hour2 == 12 && minute == 30) {
  alert("La hora es 12:30");
}

// Operador negacion: Sirve para validaciones
let num = 2;
if (!num) {
  return "El valor no es 2";
}
