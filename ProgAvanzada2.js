/*Expresiones regulares.
Ayudan a encontrar texto utilizando patrones representados mediante cadenas de textos en los cuales cada símbolo tiene un significados.
En el siguiente ejemplo se busca dentro del arreglo las palabras que cumpla las siguientes condiciones:
    -Que empiece por las letras O y G.
    -Que termine por la letra S.
*/

//Array que recibe el texto a evaluar.
const palabras = ["Osos", "Arroz", "Gatos", "Guitarra", "Orca", "Cama"];

// Ejercicio sin usar expresiones regulares

console.log("-----------Ejemplo sin expresiones regulares----------------");
palabras.forEach(function (palabra) {
  //Se recorre el arreglo
  //Con el metodo at(0) se obtiene la primera letra de la palabra y at(-1) obtiene la ultima letra
  //Con el método toLowerCase() se pasa la letra a minuscula y así sea mas sencillo hacer las comparaciones.
  let primeraLetra = palabra.at(0).toLowerCase();
  let ultimaLetra = palabra.at(-1).toLowerCase();

  //Comparación de las letras obtenidas y así establecer si cumple o no las condiciones.
  if ((primeraLetra === "o" || primeraLetra === "g") && ultimaLetra === "s") {
    console.log(`La palabra "${palabra}" cumple las condiciones.`);
  } else {
    console.log(`La palabra "${palabra}" no cumple las condiciones`);
  }
});

// Ejercicio usando expresiones regulares

console.log("-----------Ejemplo con expresiones regulares----------------");
palabras.forEach(function (palabra) {
  //Recorre el arreglo.
  //Usando las barras // se define la expresión regular. Fuera de las barras va la bandera de la expresion regular.
  let expReg = /^(O|g).+(s)$/i;

  if (expReg.test(palabra)) {
    //El método test() devuelve verdadero si cumple la expresion regular.
    console.log(`La palabra "${palabra}" cumple las condiciones.`);
  } else {
    console.log(`La palabra "${palabra}" no cumple las condiciones`);
  }
});

// Ejercicio utilizando el constructor RegExp()

console.log("-----------Ejemplo 2 con expresiones regulares----------------");

let cadena =
  "lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus nulla corrupti cumque modi, quae eligendi velit perspiciatis maiores labore vel ipsum, quod pariatur quisquam esse? Neque iste ipsum hic.";

let expReg = new RegExp("nulla", "i");
console.log(expReg.test(cadena)); //devuelve un false o un true dependiendo si se cumple la expresión regular
console.log(expReg.exec(cadena)); //devuelve un arreglo con más informacion sobre la expresion

console.log("-----------Practica----------------");

let palabra = [
  "edificio",
  "perla",
  "estrella",
  "pescado",
  "salero",
  "biblioteca",
  "guitarra",
  "dinero",
  "música",
];

function sustantivos_f_m(palabra = []) {
  const regex = /[a-z]+a$/i;

  for (const str of palabra) {
    regex.test(str)
      ? console.log(`La palabra ${str} es un sustantivo femenino`)
      : console.log(`La palabra ${str} es un sustantivo masculino`);
  }
}

sustantivos_f_m(palabra);

const palabrasSustativos = [
  "edificio",
  "perla",
  "estrella",
  "pescado",
  "salero",
  "biblioteca",
  "guitarra",
  "dinero",
  "música",
];

palabrasSustativos.forEach(function (palabra) {
  let condicion = /^(\w).+(a)$/;

  if (condicion.test(palabra)) {
    console.log(`La palabra: *${palabra}* es un sustantivo femenino`);
    return true;
  } else {
    console.log(`La palabra: *${palabra}* es un sustantivo masculino`);
    return false;
  }
});

const obj = [
  "edificio",
  "perla",
  "estrella",
  "pescado",
  "salero",
  "biblioteca",
  "guitarra",
  "dinero",
  "musica",
];

let expr = /a$/;

for (let i of obj) {
  console.log(`${i} ${expr.test(i)}`);
}

function validEmail() {
  const correo = "davidmontiel@hotmail.es";

  let validarEmail = /^\w([._-]?\w)+@\w+(.com)$/;

  if (validarEmail.test(correo)) {
    console.log("El correo es correcto");
    return true;
  } else {
    console.log("Correo incorrecto");
    return false;
  }
}

validEmail();

function correo(email) {
  //const regex = /[a-z]+@[a-z]+\.[a-z]{2,5}$/;
  const regex = /^[a-z]+@+[a-z]+.\.+com$/;

  return regex.test(email) ? "es un correo" : "no es un correo";
}

console.log(correo("davidmontiel@hotmail.com"));

//contraseña debe tener mayusculas minusculas y al menos un numero
//palabras que sean hiatos o diptongos

function pass(pass) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

  if (pass.length >= 8 && regex.test(pass)) {
    return true;
  } else {
    return false;
  }
}

console.log(pass("a*Ñ/7A1"));

function contrasena(password) {
  const regex = /\w*[aeiou]{2}\w*/;

  return regex.test(password) ? "correcta" : "incorrecta";
}

console.log(contrasena(""));
