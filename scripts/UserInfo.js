class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userDescription = document.querySelector(jobSelector);
  }

  getUserInfo() {}

  setUserInfo() {}
}
