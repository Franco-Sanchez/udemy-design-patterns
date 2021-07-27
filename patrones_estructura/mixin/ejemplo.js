// mixin
const mixin = {
  saludar() {
    console.log(`Hola, ${this.name}`);
  },
  despedir() {
    console.log(`Chao, ${this.name}`);
  }
};

// clase
class Usuario {
  constructor(name) {
    this.name = name;
  }
}

// aumentamos el prototipo
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario("Chanchito feliz");
usuario.saludar();
