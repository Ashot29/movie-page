class ApiHandler {
    get(url) {
      return fetch(url)
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => err);
    }
  }
  
  const apiHandler = new ApiHandler();
  export default apiHandler;
      