/*if/else
Permite que se realice una instrucción u otra de acuerdo a la evaluación de una condición. Su estructura es:
    if(condicion){
        instrucciones si la condicion se cumple
    }else{
        instrucciones si la condicion no se cumple
    }
En la condicion se utilizan operadores de comparación.
*/

console.log("------------------------if/else---------------------------")
let edad=6;


if (edad>=18) { //Inicio de la condicion
    console.log("Eres mayor de edad, preparate :c") //Instruccion si se cumple
} else {
    console.log("Eres menor de edad, disfruta tu vida:)") //Instruccion si no se cumple.
}

console.log("-----------------Condicional anidada----------------------")


let hora = 8888

/*Devuelve un saludo dependiendo la hora:
    -De 00 a las 05: Dejen dormir!
    -De 06 a las 11: Buenos días!
    -De 12 a las 18: Buenas tardes!
    -De 19 a las 23: Buenas noches!*/

if (hora>= 0 && hora <=5) { //Primera condición
    console.log("Dejen dormir!")
} else if(hora>=6 && hora<=11){ //Segunda condición
    console.log("Buenos días!")
} else if(hora>=12 && hora<=18){ //Tercera condición
    console.log("Buenas tardes!")
} else if(hora>=19 && hora<=23){
    console.log("Buenas noches!")//Instruccion si no se cumple ninguna condición
} else {
    console.log("Hora invalida")
}


console.log("-----------------switch/case----------------------")

let dia=3

switch (dia) {
    case 0:
        console.log("El día es domingo")
        break;
    case 1:
        console.log("El día es lunes")
        break;
    case 2:
        console.log("El día es martes")
        break;
    case 3:
        console.log("El día es miercoles")
        break;
    case 4:
        console.log("El día es jueves")
        break;
    case 5:
        console.log("El día es viernes")
        break;
    case 6:
        console.log("El día essabado")
        break;

    default:
        console.log("el día no existe")
        break;
}


let num1 = 800; // Analizar si este es mayor
let num2 = 1002; // o este
let num3 = 5000; // o este

let mayor, menor,medio

// Cuál es el número mayor e imprimirlos en orden

if(num1 > num2 && num1 > num3){ // num1 es el mayor
    mayor=num1
    if (num2 < num3) { 
        menor=num2
        medio=num3
    } else {
        menor=num3
        medio=num2
    }
}else if(num2 > num1 && num2 > num3){ // num2 siendo mayor
    mayor=num2
    if (num1 < num3) { 
        menor=num1
        medio=num3
    } else {
        menor=num3
        medio=num1
    }
}else { //num3 siendo mayor
    mayor=num3
    if (num1 < num2) { 
        menor=num1
        medio=num2
    } else {
        menor=num2
        medio=num1
    }
}
console.log(`El número mayor ${mayor} el de en medio es ${medio} y el menor es ${menor}`); 


mayor = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
menor = num1 < num2 ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 : num3);
medio = (num1+num2+num3)-mayor-menor

console.log(`El número mayor ${mayor} el de en medio es ${medio} y el menor es ${menor}`);

let a = 1;
let b = 2;
let c = 1;

if (a > b && b > c) {
console.log(`${a} es el mayor, ${b} es el medio, y ${c} es el menor.`);
} else if (b > a && a > c) {
console.log(`${b} es el mayor, ${a} es el medio, y ${c} es el menor.`);
} else if (c > b && b > a) {
console.log(`${c} es el mayor, ${b} es el medio, y ${a} es el menor.`);
} else if (a > c && c > b) {
console.log(`${a} es el mayor, ${c} es el medio, y ${b} es el menor.`);
} else if (b > c && c > a) {
console.log(`${b} es el mayor, ${c} es el medio, y ${a} es el menor.`);
} else if (c > a && a > b) {
console.log(`${c} es el mayor, ${a} es el medio, y ${b} es el menor.`);
} else {
console.log("Hay números iguales.");
}

let numero=0;

if (numero %2==0){
console.log("numero par");
}else {
console.log("Numero impar");
}

let cantidadDocenas = -7;
let valorDocena = 60000;
let valorCompra = valorDocena * cantidadDocenas;
let descuento = 0;

if (cantidadDocenas >= 10) {
descuento = valorCompra * 0.2;
} else if (cantidadDocenas >= 5) {
descuento = valorCompra * 0.15;
} else if (cantidadDocenas >= 1) {
descuento = valorCompra * 0.1;
}

let valorFinal = valorCompra - descuento;

console.log(`Cantidad de docenas: ${cantidadDocenas}`);
console.log(`Valor de cada docena: $${valorDocena}`);
console.log(`Valor de la compra: $${valorCompra}`);
console.log(`Descuento aplicado: $${descuento}`);
console.log(`Valor final de la compra: $${valorFinal}`);

let compra=-5;
if (1<= compra && 4 >=compra){

var descuento1=0.10;
var precio_final = compra*60000-(compra*60000*descuento1);
console.log("su compra fue de: "+compra+" Su descuento es de "+descuento1);
console.log("El precio con descuento es: "+ precio_final);

}
else if ( 5 <= compra && compra <10) {
var descuento2=0.15;
var precio_final2 = compra*60000-(compra*descuento2*60000);
console.log("su compra fue de: "+compra+" Su descuento es de "+descuento2);
console.log("El precio con descuento es: "+ precio_final2);

}
else if (compra =>10) {
var descuento3=0.20;
var precio_final3 = compra*60000-(compra*descuento3*60000);
console.log("su compra fue de: "+compra+" Su descuento es de "+descuento3);
console.log("El precio con descuento es: "+ precio_final3);
}
else {
console.log("Error");
}