const users= [
  { edad: 17, nombre: 'Franco', apellido: 'Sanchez' },
  { edad: 18, nombre: 'Renato', apellido: 'Rodriguez' },
  { edad: 12, nombre: 'Adrian', apellido: 'Rodriguez' },
  { edad: 1, nombre: 'Gerald', apellido: 'Paisig' },
];

const traePrimerInfante = data => {
  const infantes = data.filter(user => user.edad < 2);
  const primerInfante = infantes[0];
  const infante = {
    nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
    edad: primerInfante.edad
  };

  return `${infante.nombreCompleto} tiene ${infante.edad} año(s).`;
};