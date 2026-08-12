class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userDescription = document.querySelector(jobSelector);
  }

  getUserInfo() {
    let userInfo = {
      name: this._userName.textContent,
      job: this._userDescription.textContent,
    };

    return userInfo;
  }
}
