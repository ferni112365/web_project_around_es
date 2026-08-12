export class UserInfo {
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

  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userDescription.textContent = job;
  }
}
