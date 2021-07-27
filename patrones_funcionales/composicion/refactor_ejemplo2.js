const users= [
  { edad: 17, nombre: 'Franco', apellido: 'Sanchez' },
  { edad: 18, nombre: 'Renato', apellido: 'Rodriguez' },
  { edad: 12, nombre: 'Adrian', apellido: 'Rodriguez' },
  { edad: 1, nombre: 'Gerald', apellido: 'Paisig' },
];

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

//

const resultado = x => x.edad < 2;

//

const filtrar = f => xs => xs.filter(f);

const head = xs => xs[0];

const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
});

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s).`;

//

const traePrimerInfante = compose(
  formato,
  formateo,
  head,
  filtrar(resultado)
);

traePrimerInfante(users);