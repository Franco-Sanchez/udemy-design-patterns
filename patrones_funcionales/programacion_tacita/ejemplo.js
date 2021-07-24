const f = (_ruta, cb) => {
  // muchaaaas lineas de codigo despues
  const resultado = computacionPesada();
  cb(resultado);
};

const manejaResultado = (_resultado) => {
  //
};

f('/users', manejaResultado);