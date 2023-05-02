/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------");
const a = Array(10).fill(false);
console.log(a);

const colores = ["Rojo", "Azul", "Gris"];
console.log(colores);

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------");
colores.push("Verde");
console.log(colores);

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------");
//colores.pop()
console.log(colores);

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------");
const copiaColores = colores.slice();
console.log(copiaColores);

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------");
console.log(colores.length);
no = "Walter";
console.log(String instanceof Array);

console.log("-----------------Practica----------------------");

const array = Array(100).fill(false);

for (let i = 0; i < 100; i++) {
  array[i] = i + 1;
}
console.log(array);

function llenarArray(limite) {
  return Array.from({ length: limite }, (_, indice) => indice + 1);
}

console.table(llenarArray(100));

let panes = [];
for (let i = 0; i < 101; i++) {
  panes.push(i);
}
console.log(panes);

function arrayDePares(limite) {
  let lista = [];
  for (let i = 2; i <= limite; i += 2) {
    lista.push(i);
  }

  return lista;
}
console.log(arrayDePares(100));

let pares = [];
let impares = [];
for (let i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
}
console.log(`pares:${pares}\n impares: ${impares}`);

const paris = [];

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    paris.push(i);
  }
}
console.log(paris);

function pacman(a, b, c) {
  let yo = [a, b, c];
  yo.sort((a, b) => {
    return a - b;
  });
  return yo;
}

console.log(pacman(9, 5, 6));

function ordenar(numeros = []) {
  let cantidad = numeros.length;
  // pivote :referencia usada para comparar
  let pivote = numeros[cantidad - 1];
  let menores = [];
  let mayores = [];

  if (cantidad < 2) {
    // caso base: cuando el numero de elementos del array es 1 o 0
    return numeros;
  } else {
  }
  for (let i = 0; i < cantidad - 1; i++) {
    numeros[i] < pivote ? menores.push(numeros[i]) : mayores.push(numeros[i]);
  }
  // ... operador de propagación
  return [...ordenar(menores), pivote, ...ordenar(mayores)];
}

console.log(ordenar([10, 10, 8, 7]));

function ordenar(...numeros) {
  let desordenada = numeros;
  let limite = desordenada.length;
  let permutar;

  for (let i = 0; i < limite - 1; i++) {
    for (let j = 0; j < limite - i - 1; j++) {
      if (desordenada[j] > desordenada[j + 1]) {
        permutar = desordenada[j];
        desordenada[j] = desordenada[j + 1];
        desordenada[j + 1] = permutar;
      }
    }
  }

  return desordenada;
}

console.log(ordenar(9, 2, 10, 1));
