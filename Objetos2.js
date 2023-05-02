/*Clases.
Son una forma de organizar y simplificar el funcionamiento del código de una aplicación
Su sintaxis es la siguiente:
    class nombreClase{
        //propiedades y metodos
    }
Se pueden hacer objetos a partir de las clases de la siguiente forma:
    const nombreObjeto=new nombreClase()    
*/

console.log("-----------------Clases----------------------");

class Animal {
  //Definicion de una clase
  /*El constructor es un metodo que se ejecuta al instanciarse la clase*/
  constructor(nombre, genero) {
    //Propiedades de la clase animal.
    this.nombre = nombre;
    this.genero = genero;
  }

  saludar() {
    //Método de la clase animal
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

//Creación de una instancia un objeto basado en la clase animal
const caliman = new Animal("Caliman", "Macho");

//Tipo de dato que es caliman
console.log(typeof caliman);
//Impresión del objeto
console.log(caliman);
//Llamado al método
caliman.saludar();

/*Herencia
Una clase hija hereda las propiedades y métodos de una clase padre. Se utiliza la palabra reservada extends.
*/

console.log("-----------------Herencia----------------------");

class Perro extends Animal {
  //La clase perro extiende de la clase animal-
  constructor(nombre, genero, tamanio) {
    //Super es un metodo que manda a llamar el constructor de la clase padre
    super(nombre, genero);
    //Propiedad de la clase perro.
    this.tamanio = tamanio;
  }

  /*Sobreescritura.
     Permite a las clases hijas hacer una implementación de un método que ha sido dado por una clase padre.
    */

  saludar() {
    //sobreescritura del metodo saludar
    console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`);
  }

  ladrar() {
    //metodo de la clase perro
    console.log("Guau Guau");
  }
}

//Instancia de un objeto basado en la clase perro
const scooby = new Perro("Scooby Doo", "Macho", "Grande");

console.log(scooby);
scooby.saludar();
scooby.ladrar();

console.log("-----------------Practica----------------------");

class Figura {
  //Definicion de una clase
  /*El constructor es un metodo que se ejecuta al instanciarse la clase*/
  constructor(color) {
    //Propiedades de la clase.
    this.color = color;
  }

  saludar() {
    //Método de la clase.
    console.log(`Hola, soy una figura y mi color es ${this.color}`);
  }
}
figure = new Figura("Violeta");
figure.saludar();

class Figura1 {
  constructor(color) {
    this.color = color;
  }

  saludar() {
    console.log(`Hola! Soy una figura y mi color es ${this.color}`);
  }
}

const figura = new Figura1("rojo");
figura.saludar();

class Cuadrado extends Figura1 {
  constructor(color, alto, ancho) {
    super(color);
    this.alto = alto;
    this.ancho = ancho;
  }

  saludar() {
    console.log(
      `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto}x${this.ancho}`
    );
  }
}

const cuadrado = new Cuadrado("azul", 5, 5);
cuadrado.saludar();

class Circulo extends Figura1 {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  saludar() {
    console.log(
      `Hola! Soy un círculo. Mi color es ${this.color} y mi radio es ${this.radio}`
    );
  }
}
const circulo = new Circulo("verde", 3);
circulo.saludar();

class Cuadrado1 extends Figura {
  constructor(color, ancho, altura) {
    super(color);
    this.ancho = ancho;
    this.altura = altura;
  }

  saludar() {
    let msj = `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.altura}cm de alto x ${this.ancho}cm de ancho.`;

    return msj;
  }
}

const figuraB = new Cuadrado1("Azul", 12, 12);
console.log(figuraB.saludar());

class Circulo2 extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  saludar() {
    let msj = `Hola! Soy un circulo. Mi color es ${this.color} y mi radio es ${this.radio}.`;

    return msj;
  }
}

const figuraC = new Circulo2("Azul", 15);
console.log(figuraC.saludar());

class Figura2 {
  constructor(color) {
    this.color = color;
  }
  saludar() {
    return `Hola! Soy una figura y mi color es ${this.color}`;
  }
}

const nuevaFigura = new Figura2("Amarillo");
console.log(nuevaFigura.saludar());

class Cuadrado2 extends Figura2 {
  constructor(color, alto, ancho) {
    super(color);
    this.alto = alto;
    this.ancho = ancho;
  }

  saludar() {
    return `Hola! Soy un cuadrado. Mi color es ${
      this.color
    } y mis medidas son ${this.alto * this.ancho} cm2`;
  }
}

const nuevoCuadrado = new Cuadrado2("Negro", 6, 6);

console.log(nuevoCuadrado.saludar());
