const saludar = nombre => console.log(`¡Hola! soy ${nombre}`);
const despedir = () => console.log('¡Adiós!');
const dormir = ( ) => console.log('Zzzzz...'); 

class Persona {
  constructor() {
    this.nombre = 'lala';
  }

  saludar() { saludar(this.nombre); }

  despedir() { despedir(); }

  dormir() { dormir(); }
}

class Robot {
  constructor() {
    this.nombre = 'lala';
  }

  saludar() { saludar(this.nombre); }

  despedir() { despedir(); }
}