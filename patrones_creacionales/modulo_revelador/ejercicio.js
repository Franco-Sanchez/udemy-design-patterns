const Users = (() => {
  const resource = "https://jsonplaceholder.typicode.com/users";

  const apiFetch = async (url, method='GET', data=null) => {
    const options = { method };
    if (data) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(data);
    }

    const request = await fetch(url, options);
    const response = await request.json();
    return response; 
  }

  try {
    return {
      read: async () => await apiFetch(resource),
      create: async (data) => await apiFetch(resource, 'POST', data),
      update: async (id, data) => await apiFetch(`${resource}/${id}`, 'PATCH', data),
      delete: async (id) => await apiFetch(`${resource}/${id}`, 'DELETE')
    } 
  } catch (error) {
    console.error(error);
  }
})();