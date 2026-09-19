class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    fetch(`${this.baseUrl}/cards/`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  // otros métodos para trabajar con la API
  getUserInfo() {
    fetch(`${this.baseUrl}/users/me/`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
});

//prueba para conectar el servidor
api.getUserInfo()
    .then((data) => {
        UserInfo.setUserInfo(data.name, data.job, data.avatar);
    });
    .catch((err) => console.log(err));
