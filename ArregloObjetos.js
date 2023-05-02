/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------");

const numeros = [1, 2, 3];
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

console.log(uno, dos);

//Con destrucrturacion

console.log("--------------Con destructuración-------------------");

const [one, two, three] = numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(two);

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona = {
  nombre: "Ana",
  apellido: "Santos",
  edad: 23,
};

const { nombre, apellido, edad } = persona; //deben tener el mismo nombre del la llave del objeto

console.log(edad);

console.log("--------------Practica-------------------");

let dias_semana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
//let [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete] =dias_semana;
//console.log(diaCuatro)

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete] =
  diasSemana;

console.log(diaUno);
console.log(diaDos);
console.log(diaTres);
console.log(diaCuatro);
console.log(diaCinco);
console.log(diaSeis);
console.log(diaSiete);

let dias_semana2 = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
const [pan] = dias_semana2;
console.log(pan);

const carro = {
  marca: "bmw",
  color: "æ",
  anio: 2023,
};

const { marca, color, anio } = carro;
console.log(marca, color);

const planta = {
  altura: 70,
  color1: "verde oscuro",
  especie: "arbolitus",
};

const { altura, color1, especie } = planta;
console.log(color1);

const mascota = {
  nombre1: "Pedro",
  edad1: 5,
  tamaño1: "Grande",
  color2: "Blanco",
};

const { nombre1, edad1, tamaño1, color2 } = mascota;
console.log(edad);

const mascotas={
    tortuga:"marina",
    ed4d:100,
    nombr3:"alex"
    }
    const{tortuga,ed4d,nombr3}=mascotas
    console.log(`La tortuga ${tortuga} tiene ${ed4d}años y su nombre es ${nombr3}`)