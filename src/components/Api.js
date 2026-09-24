export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards/`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      });
  }

  // otros métodos para trabajar con la API
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      });
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "835d92fb-e209-44f2-beac-2e4da90ff6eb",
    "Content-Type": "application/json",
  },
});
