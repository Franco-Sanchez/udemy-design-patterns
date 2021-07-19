const perro = {
  raza: 'Kilterrier',
  ladrar: function () {
    console.log(`Guau! Soy un ${this.raza}`);
  }
}

const kiltro = Object.create(perro); // crea un objeto y el argumento será su prototipo

kiltro.ladrar();
console.log(kiltro.__proto__);

kiltro.raza = 'Super perro!'
kiltro.ladrar();
console.log(kiltro.__proto__);