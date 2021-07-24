const suma = (a) => {
  return (b) => {
    return a + b;
  }
};

const suma1 = suma(1);
suma1(5);

const multi = a => b => a * b;

const multi1 = multi(1);
multi1(5);
