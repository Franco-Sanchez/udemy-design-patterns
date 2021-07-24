const users= [
  { edad: 17, nombre: 'Franco', apellido: 'Sanchez' },
  { edad: 18, nombre: 'Renato', apellido: 'Rodriguez' },
  { edad: 12, nombre: 'Adrian', apellido: 'Rodriguez' },
  { edad: 1, nombre: 'Gerald', apellido: 'Paisig' },
];

const head = xs => xs[0];

const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
});

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s).`;

const traePrimerInfante = data => formato(formateo(head(data.filter(x => x.edad < 2))));