/*Metodos
    -Metodo estatico: Permite ser ejecutada sin necesidad de instanciar la clase
    -Metodo Setter: Permite establecer los valores de atributos de nuestra clase
    -Metodo Getter: Permite obtener los valores de los atributos de nuestra clase
*/

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

class Nadadores {
  nadar(){
    console.log(`${this.nombre} esta nadando`);
  }
}

class Delfin extends Animal{
  constructor(nombre) {
    super(nombre);
    Object.create(this, new Nadadores());
  }
}

const delfin = new Delfin("Delfin");
delfin.saludar();
delfin.nadar();


class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    //Atributo raza se crea nulo para luego pedirlo con el método setter
    this.raza = null;
  }

  saludar() {
    console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`);
  }

  static queEres() {
    //Método estatico
    console.log(
      "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos"
    );
  }

  //Getter. Obtiene el valor.
  get getRaza() {
    return this.raza;
  }

  //Setter. Modificador o establecedor del valor.
  set setRaza(raza) {
    this.raza = raza;
  }
}

const scooby = new Perro("Scooby Doo", "Macho", "Grande");

//Metodo estatico
Perro.queEres();

//Metodos setter y getter
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);

class Persona {
  constructor(nombre, apellido, edad, nacionalidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
  }
  
  static mensaje() {
    return "Hay 8.010.359.063 personas en el mundo";
  }

  get getNombre() {
    return this.nombre;
  }
  get getApellido() {
    return this.apellido;
  }

  get getEdad() {
    return this, this.edad;
  }

  get getNacionalidad() {
    return this.nacionalidad;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setApellido(apellido) {
    this.apellido = apellido;
  }
  set setEdad(edad) {
    this.edad = edad;
  }

  set setNacionalidad(nacionalidad) {
    this.nacionalidad = nacionalidad;
  }
}

let walter = new Persona("walter", "Gomez", "30+","colombiano");
walter.setApellido = "santamaría";

console.log(walter.getApellido);
console.log(Persona.mensaje());
