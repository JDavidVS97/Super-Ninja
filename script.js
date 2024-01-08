class Ninja{
    constructor(nombre){
        this.nombre=nombre;
        this.salud=50;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName (){
        console.log(`El nombre del ninja es: ${this.nombre}`);
    }
    showStats (){
        console.log(`El nombre: ${this.nombre}, la fuerza: ${this.fuerza}, la velocidad: ${this.velocidad}, la salud: ${this.salud}`);
    }
    drinkSake (){
        this.salud+=10;
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        this.sabiduria = 10;
        super(nombre);
        this.salud=200;
        this.fuerza=10;
        this.velocidad=10;
    }
    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    drinkSake() {
        super.drinkSake();
    }
    showStats() {
        drinkSake();
        super.showStats();
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
