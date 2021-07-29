const fn = () => {
  // callback hell
  ajax(() => {
    ajax(() => {
      ajax(() => {

      })
    })
  })
}

const fn2 = () => {
  ajax()
    .then(() => {
      const a = 1;
      return ajax();
    })
    .then(() => {
      return ajax();
    })
    .then(() => {
      return ajax();
    })
    .then(() => {
      console.log(a);
      return ajax();
    })
    .catch((e) => {
      console.log(e);
    })
}