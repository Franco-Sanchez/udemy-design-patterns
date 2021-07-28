const user = new User();

const init = () => {
  user.on('login', userLoggedIn);
  user.on('login', retrieveInitData);
};

const userLoggedIn = () => {
  // usuario inició sesión
};

const retrieveInitData = () => {
  // recupera la data que se mostrará al usuario 
};

app.init();

// en algún lugar de nuestra app
const login = () => {
  // lógica de inicio de sesión...
  // ...
  
  // Luego:
  user.trigger('login');
};

login();