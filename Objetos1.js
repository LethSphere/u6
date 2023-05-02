/*Objetos
Los objetos son conjunto de propiedades, en donde las propiedades tienen asociadas un nombre y un valor*/

const persona = {
  //Definición del objeto persona
  //Definición de las propiedades
  nombre: "Beatriz",
  apellido: "Colón",
  edad: 39,
  soltera: true,
  //Se pueden agregar objetos dentro de objetos
  contacto: {
    email: "beatriz@example.com",
    tel: "+57 1234567890",
  },
  //Se pueden agregar funciones dentro de los objetos
  saludar: function () {
    console.log("Hola! :)");
  },
  llamar: function () {
    //this nos permite hacer referencia a la instancia actual
    console.log(`llamame al ${this.contacto.tel}`);
  },
};

/*Para acceder a una propiedad del objeto se hace de la siguiente manera
nombreObjeto.nombrePropiedad*/

console.log(
  `Hola, mi nombre es ${persona.nombre} y mi edad es ${persona.edad}, mi correo electronico es ${persona.contacto.email}`
);

//Para llamar la función dentro del objeto utilizamos el . tambien
persona.llamar();

/*Se pueden recorrer las propiedades de un objeto utilizando el ciclo for*/

console.log("-----------------Recorrer un objeto----------------------");

//For in: loop que permite recorrer las propiedades de un objeto

const mario = {
  //Objeto mario
  //Propiedades
  nombre: "Mario",
  apellido: "Mendoza",
  edad: 42,
};

//Por cada llave en el objeto mario se imprimira la llave y el valor
for (const key in mario) {
  console.log(`Llave: ${key}, Valor: ${mario[key]}`);
}

console.log("-----------------Practica----------------------");

const carro = {
  marca: "Williams Racing",
  modelo: "FW45",
  año: 2023,
  color: "Azul y Negro",
  corredor: {
    nombre: "Ayrton Senna",
    nacionalidad: "Brasileño",
  },
  descripcion: function () {
    let msj = `Hola! Mi marca es ${this.marca}, soy el modelo ${this.modelo} año ${this.año} y mi color es ${this.color}`;

    return msj;
  },
};

let ferrari = carro;
console.log(`Propiedad marca del objeto: ${carro.marca}`);
console.log(`Propiedad modelo del objeto: ${carro.modelo}`);
console.log(`Propiedad año del objeto: ${carro.año}`);
console.log(`Propiedad descripción del objeto: ${carro.descripcion()}`);
console.log(`Propiedad nombre corredor del objeto: ${carro.corredor.nombre}`);
for (const key in carro) {
  console.log(`Llave: ${key}, Valor: ${carro[key]}`);
}

const carro1 = {
  marca: "Volkswagen",
  modelo: "Jetta",
  año: "2004",
  color: "Blanco",
  descripcion: function () {
    return `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.año}, y mi color es ${this.color}.`;
  },
};

console.log(carro1.descripcion());

const carro3 = {
  marca: "Volkswagen",
  modelo: "Jetta",
  año: "2004",
  color: "Blanco",
  descripcion: function () {
    return `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.año}, y mi color es ${this.color}.`;
  },
  motor: {
    potenciaMax: 100,
    motor: "diésel",
    transmision: "automática",
    traccion: "delantera",
    suspension: "independiente",
    descripcion: function () {
      let primerasTres = `Mi potencia máxima es ${this.potenciaMax}, mi motor es ${this.motor}, mi transmision es ${this.transmision}`;
      let faltantes = ` y mi tracción es ${this.traccion}, finalmente mi suspensión es ${this.suspension}`;
      return `${primerasTres} ${faltantes}`;
    },
  },
};

console.log(carro3.descripcion());
console.log(carro3.motor.descripcion());
