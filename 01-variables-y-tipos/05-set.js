// Definicion: Es una estructura de datos que permite almacenar elementos únicos y no ordenados.

// 1. Definicion de un set
let mySet = new Set();
let dakota = { name: "Dakota" };
console.log(dakota);
let basthian = { name: "Basthian" };
let denver = { name: "Denver" };

// 2. Add
mySet.add(dakota);
mySet.add(basthian);
mySet.add(denver);
mySet.add(dakota);
mySet.add(denver);
// En set solo se guardan los valores únicos
console.log(mySet.size);
for (let user of mySet) {
  console.log(user);
}

// 3. Iteracion sobre sets
let set = new Set(["Kia", "Volkswagen", "Citroen"]);
for (let value of set) console.log(value);

set.forEach((value, valueAgain, set) => {
  console.log(value);
});
