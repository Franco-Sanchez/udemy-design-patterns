class Api {
  operations(url, opts, verb) {
    switch (verb) {
      case 'get':
        // return fetch...
      case 'post':
        // return post...
      default:
        return;
    }
  }
}

class Api2 {
  get(url, opts) {
    // return axios.get...
  }

  post(url, opts) {
    // return axios.get...
  }
}

// Adaptador
class ApiAdapter {
  #api2;

  constructor() {
    this.#api2 = new Api2();
  }

  operations(url, opts, verb) {
    switch (verb) {
      case 'get':
        return this.#api2.get(url, opts); 
      case 'post':
        return this.#api2.post(url, opts);
      default:
        break;
    }
  }
}

const api = new Api();

api.operations('www.google.cl', { q: 1 }, 'get');

const api2 = new Api2();

api2.get('www.google.cl', { q: 1 });

const adapter = new ApiAdapter();

adapter.operations('www.google.cl', { q: 1 }, 'get');