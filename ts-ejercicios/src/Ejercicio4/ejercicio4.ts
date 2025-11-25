// Clase base Animal
class Animal {
  sonar(): void {
    console.log("El animal hace un sonido...");
  }
}
// Clase Perro que hereda de Animal
class Perro extends Animal {
  sonar(): void {
    console.log("El perro ladra ¡Guau guau!");
  }
}
// Clase Gato que hereda de Animal
class Gato extends Animal {
  sonar(): void {
    console.log("El gato maúlla ¡Miau Miau!");
  }
}
//Uso de las clases
const animales: Animal[] = [
  new Animal(),
  new Perro(),
  new Gato()
];
animales.forEach(a => a.sonar());

